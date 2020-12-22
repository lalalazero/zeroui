import React, {
    ChangeEvent,
    ChangeEventHandler,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroui-tree'

export type TreeNode = {
    title: string
    key: string
    children?: TreeNode[]
}

export type TreeData = TreeNode[]

export type TreeProps = {
    treeData: TreeNode[]
    checkedKeys?: string[]
    onCheck?: (
        newCheckedKeys: string[],
        checkNode: TreeNode,
        event: ChangeEvent<HTMLInputElement>
    ) => void
}

const getChildrenKeys = (parentNode: TreeNode) => {
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

interface TreeNodeProps {
    treeNode: TreeNode
    checkedKeys: string[]
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeNode,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
    level: number
}

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const [indeterminate, setIndeterminate] = useState(false)
    const [checked, setChecked] = useState(false)

    const isLeaf = useMemo(() => {
        return props.treeNode.children && props.treeNode.children.length > 0
            ? false
            : true
    }, [props.treeNode])

    const childrenKeys = useMemo(() => {
        if (props.treeNode) {
            return getChildrenKeys(props.treeNode)
        }
        return []
    }, [props.treeNode])

    useEffect(() => {
        if (props.checkedKeys) {
            if (props.checkedKeys.indexOf(props.treeNode.key) >= 0) {
                setChecked(true)
            } else {
                setChecked(false)
            }

            if (
                childrenKeys.length > 0 &&
                childrenKeys.some((key) => props.checkedKeys.indexOf(key) >= 0)
            ) {
                setIndeterminate(true)
            } else {
                setIndeterminate(false)
            }
        }
    }, [props.checkedKeys])

    const handleCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
        let newCheckedKeys = [...props.checkedKeys]
        const checked = event.target.checked
        const nodeKey = props.treeNode.key

        if (checked) {
            newCheckedKeys.push(nodeKey)
        } else {
            newCheckedKeys = newCheckedKeys.filter((key) => key !== nodeKey)
        }

        if (!isLeaf) {
            if (checked) {
                newCheckedKeys.push(...childrenKeys)
            } else {
                newCheckedKeys = newCheckedKeys.filter(
                    (key) => childrenKeys.indexOf(key) < 0
                )
            }
        }

        props.onCheck && props.onCheck(newCheckedKeys, props.treeNode, event)
    }

    const onNodeCheck = (
        checkedKeys: string[],
        checkNode: TreeNode,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const newCheckedKeys = [...checkedKeys]

        const subChildrenKeys = props.treeNode.children
            ? props.treeNode.children.map((child) => child.key)
            : []

        const isAllChecked =
            subChildrenKeys.length > 0 &&
            subChildrenKeys.every((key) => newCheckedKeys.indexOf(key) >= 0)

        if (isAllChecked) {
            newCheckedKeys.push(props.treeNode.key)
        } else {
            const index = newCheckedKeys.indexOf(props.treeNode.key)
            if (index >= 0) {
                newCheckedKeys.splice(index, 1)
            }
        }
        props.onCheck && props.onCheck(newCheckedKeys, checkNode, event)
    }

    const key = `level/${props.level}-value/${props.treeNode.key}`

    return (
        <>
            <div
                key={key}
                data-key={key}
                style={{ marginLeft: props.level * 10 }}
                className={classname(PREFIX + '-item')}
            >
                <span className={PREFIX + '-item-checkbox-wrapper'}>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheck}
                        data-checked={checked}
                    ></input>
                    <span
                        className={PREFIX + '-item-checkbox-indeterminate'}
                        data-visible={!checked && indeterminate}
                    ></span>
                </span>
                <span className={PREFIX + '-label'}>
                    {props.treeNode.title}
                </span>
                {props.treeNode.children &&
                    props.treeNode.children.map((child) => (
                        <TreeNode
                            key={child.key}
                            treeNode={child}
                            checkedKeys={props.checkedKeys}
                            onCheck={onNodeCheck}
                            level={props.level + 1}
                        ></TreeNode>
                    ))}
            </div>
        </>
    )
}

const Tree: React.FC<TreeProps> = (props) => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([])

    useEffect(() => {
        if (props.checkedKeys) {
            setCheckedKeys(props.checkedKeys)
        }
    }, [props.checkedKeys])

    const handleCheck = (
        checkedKeys: string[],
        checkNode: TreeNode,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCheckedKeys(checkedKeys)
        props.onCheck && props.onCheck(checkedKeys, checkNode, event)
    }

    return (
        <div className={PREFIX}>
            {props.treeData.map((item) => (
                <TreeNode
                    key={item.key}
                    treeNode={item}
                    checkedKeys={checkedKeys}
                    onCheck={handleCheck}
                    level={1}
                ></TreeNode>
            ))}
        </div>
    )
}

export default Tree
