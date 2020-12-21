import React, { ChangeEvent, useEffect, useState } from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroui-tree'

export type TreeItem = {
    title: string
    key: string
    children?: TreeItem[]
}

export type TreeData = TreeItem[]

export type TreeProps = {
    treeData: TreeItem[]
    checkedKeys?: string[]
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeItem,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
}

const getChildrenKeys = (parentNode: TreeItem) => {
    const collectChildrenKey = (children: TreeData) => {
        let keys: string[] = []
        children.forEach((child) => {
            keys.push(child.key)
            if (child.children) {
                keys = keys.concat(collectChildrenKey(child.children))
            }
        })
        return keys
    }

    return collectChildrenKey(parentNode.children || [])
}

const Tree: React.FC<TreeProps> = (props) => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([])

    useEffect(() => {
        if (props.checkedKeys) {
            setCheckedKeys(props.checkedKeys)
        }
    }, [props.checkedKeys])

    const renderChildren = (
        treeData: TreeData,
        level = 1,
        parentNode?: TreeItem
    ) => {
        const jsxList = treeData.map((item) => {
            const isChecked = checkedKeys
                ? checkedKeys.indexOf(item.key) >= 0
                : false
            const key = `level/${level}-value/${item.key}`

            const childrenKeys: string[] = getChildrenKeys(item)

            const checkParent = (checkedKeys: string[]) => {
                if (parentNode) {
                    const childrenKeys = getChildrenKeys(parentNode)
                    const checkedChildrenKeys = checkedKeys.filter(
                        (key) => childrenKeys.indexOf(key) >= 0
                    )
                    const shouldCheckParent =
                        checkedChildrenKeys.length > 0 &&
                        checkedChildrenKeys.length === childrenKeys.length

                    if (shouldCheckParent) {
                        checkedKeys.push(parentNode.key)
                    } else {
                        if (checkedKeys.indexOf(parentNode.key) >= 0) {
                            checkedKeys.splice(
                                checkedKeys.indexOf(parentNode.key),
                                1
                            )
                        }
                    }
                }
            }

            const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
                let newCheckedKeys = checkedKeys

                if (e.target.checked) {
                    newCheckedKeys = [...checkedKeys, item.key, ...childrenKeys]
                    // TODO 这里只检查了一层，但是应该不断向上检测
                    checkParent(newCheckedKeys)
                } else {
                    newCheckedKeys = checkedKeys.filter(
                        (key) =>
                            key !== item.key && childrenKeys.indexOf(key) < 0
                    )
                    checkParent(newCheckedKeys)
                }
                setCheckedKeys(newCheckedKeys)
                props.onCheck && props.onCheck(newCheckedKeys, item, e)
            }

            const isHalfCheck =
                !!childrenKeys.find(
                    (childKey) => checkedKeys.indexOf(childKey) >= 0
                ) && checkedKeys.indexOf(item.key) < 0

            return (
                <div
                    key={key}
                    data-key={key}
                    style={{ marginLeft: (level - 1) * 10 }}
                    className={classname(PREFIX + '-item')}
                >
                    <span className={PREFIX + '-item-checkbox-wrapper'}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheck}
                            ref={(ref) => {
                                if (ref) {
                                    ref.indeterminate = isHalfCheck
                                }
                            }}
                        ></input>
                        <span
                            className={PREFIX + '-item-checkbox-indeterminate'}
                            data-visible={isHalfCheck}
                        ></span>
                    </span>

                    <span className={PREFIX + '-label'}>{item.title}</span>
                    {item.children &&
                        renderChildren(item.children, level + 1, item)}
                </div>
            )
        })

        return <>{jsxList}</>
    }

    return <div className={PREFIX}>{renderChildren(props.treeData)}</div>
}

export default Tree
