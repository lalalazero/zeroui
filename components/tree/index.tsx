import React, {
    ChangeEvent,
    ChangeEventHandler,
    useEffect,
    useMemo,
    useRef,
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
        checkItem?: TreeNode,
        e?: ChangeEvent<HTMLInputElement>
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
    setCheckedKeysFn: (checkedKeys: string[]) => void
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeNode,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
    level: number
}

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
    const childrenKeys = useMemo(() => {
        if (props.treeNode) {
            return getChildrenKeys(props.treeNode)
        }
        return []
    }, [props.treeNode])

    const isChildrenAllChecked =
        childrenKeys.length > 0 &&
        childrenKeys.every((key) => props.checkedKeys.indexOf(key) >= 0)

    const isChildrenAllUnchecked =
        childrenKeys.length > 0 &&
        childrenKeys.every((key) => props.checkedKeys.indexOf(key) < 0)

    const isChecked = props.checkedKeys.indexOf(props.treeNode.key) >= 0

    const isHalfCheck =
        !isChecked &&
        childrenKeys.some((key) => props.checkedKeys.indexOf(key) >= 0)

    useEffect(() => {
        if (isChildrenAllChecked && !isChecked) {
            props.setCheckedKeysFn([...props.checkedKeys, props.treeNode.key])
        }
        if (isChildrenAllUnchecked && isChecked) {
            props.setCheckedKeysFn(
                props.checkedKeys.filter((key) => key !== props.treeNode.key)
            )
        }
    }, [isChildrenAllChecked, isChildrenAllUnchecked, isChecked, isHalfCheck])

    useEffect(() => {
        if (ref.current) {
            ref.current.checked = isChecked
            ref.current.indeterminate = isHalfCheck
        }
    }, [isChecked, isHalfCheck])

    const handleCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
        let newCheckedKeys = [...props.checkedKeys]
        if (event.target.checked) {
            newCheckedKeys.push(props.treeNode.key, ...childrenKeys)
        } else {
            newCheckedKeys = newCheckedKeys.filter(
                (key) =>
                    key !== props.treeNode.key && childrenKeys.indexOf(key) < 0
            )
        }
        props.setCheckedKeysFn(newCheckedKeys)
        props.onCheck && props.onCheck(newCheckedKeys, props.treeNode, event)
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
                        checked={isChecked}
                        onChange={handleCheck}
                        data-checked={isChecked}
                    ></input>
                    <span
                        className={PREFIX + '-item-checkbox-indeterminate'}
                        data-visible={isHalfCheck}
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
                            setCheckedKeysFn={props.setCheckedKeysFn}
                            onCheck={props.onCheck}
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

    const setCheckedKeysFn = (newCheckedKeys: string[]) =>
        setCheckedKeys(newCheckedKeys)

    return (
        <div className={PREFIX}>
            {props.treeData.map((item) => (
                <TreeNode
                    key={item.key}
                    treeNode={item}
                    checkedKeys={checkedKeys}
                    setCheckedKeysFn={setCheckedKeysFn}
                    onCheck={props.onCheck}
                    level={1}
                ></TreeNode>
            ))}
        </div>
    )
}

export default Tree
