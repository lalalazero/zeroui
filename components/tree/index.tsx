import React, {
    ChangeEvent,
    ChangeEventHandler,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroui-tree'

export type TreeNode = {
    title: string | ReactNode
    key: string
    children?: TreeNode[]
    expandable?: boolean
}

export type TreeData = TreeNode[]

export type TreeProps = {
    treeData: TreeNode[]
    checkedKeys?: string[]
    defaultCheckedKeys?: string[]
    defaultExpandKeys?: string[]
    expandKeys?: string[]
    defaultExpandAll?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkNode: TreeNode,
        event: ChangeEvent<HTMLInputElement>
    ) => void
    onExpand?: (expandKeys: string[], expandNode: TreeNode) => void
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

const getExpandableChildrenKeys = (treeData: TreeData) => {
    const keys: string[] = []
    const getKey = (parentNode: TreeNode) => {
        if (parentNode.children && parentNode.children.length > 0) {
            if (parentNode.expandable === false) return
            keys.push(parentNode.key)
            parentNode.children.forEach((child) => getKey(child))
        }
    }

    treeData.forEach((node: TreeNode) => getKey(node))

    return keys
}

interface TreeNodeProps {
    treeNode: TreeNode
    checkedKeys: string[]
    expandKeys: string[] | undefined | null
    defaultExpandAll?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeNode,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
    level: number
    onExpand: (expandKeys: string[], expandNode: TreeNode) => void
}

const useExpand = (props: TreeNodeProps) => {
    const [isExpand, setIsExpand] = useState(false)
    const expandable =
        props.treeNode.children && props.treeNode.children.length > 0

    useEffect(() => {
        if (!expandable) return
        if (props.expandKeys) {
            const found = props.expandKeys.find((i) => i === props.treeNode.key)
            setIsExpand(!!found)
        }
    }, [props.expandKeys])

    return expandable && isExpand
}

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const [indeterminate, setIndeterminate] = useState(false)
    const [checked, setChecked] = useState(false)

    const isExpand = useExpand(props)

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

    const expandIcon = useMemo(() => {
        if (props.treeNode.children && props.treeNode.children.length > 0) {
            if (isExpand) {
                return <Icon name="filled-down"></Icon>
            } else {
                return <Icon name="filled-right"></Icon>
            }
        }

        return ''
    }, [props.treeNode.children, isExpand])

    const handleExpand = () => {
        const newExpandKeys = props.expandKeys ? [...props.expandKeys] : []
        if (!isExpand) {
            newExpandKeys.push(props.treeNode.key)
        } else {
            const index = newExpandKeys.indexOf(props.treeNode.key)
            if (index >= 0) {
                newExpandKeys.splice(index, 1)
            }
        }

        props.onExpand(newExpandKeys, props.treeNode)
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
                <span
                    className={PREFIX + '-expand-span'}
                    onClick={handleExpand}
                >
                    {expandIcon}
                </span>
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
                {isExpand &&
                    props.treeNode.children &&
                    props.treeNode.children.map((child) => (
                        <TreeNode
                            key={child.key}
                            treeNode={child}
                            checkedKeys={props.checkedKeys}
                            onCheck={onNodeCheck}
                            level={props.level + 1}
                            expandKeys={props.expandKeys}
                            onExpand={props.onExpand}
                            defaultExpandAll={props.defaultExpandAll}
                        ></TreeNode>
                    ))}
            </div>
        </>
    )
}

const uniq = (arr: string[]) => Array.from(new Set(arr))

const Tree: React.FC<TreeProps> = (props) => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([])
    const [expandKeys, setExpandKeys] = useState<string[]>()

    useEffect(() => {
        if (props.defaultExpandKeys) {
            setExpandKeys(props.defaultExpandKeys)
        }

        if (props.defaultCheckedKeys) {
            setCheckedKeys(props.defaultCheckedKeys)
        }
    }, [])

    useEffect(() => {
        if (props.checkedKeys) {
            setCheckedKeys(props.checkedKeys)
        }
    }, [props.checkedKeys])

    useEffect(() => {
        if (props.defaultExpandAll) {
            const expandableKeys = getExpandableChildrenKeys(props.treeData)
            expandableKeys.length > 0 && setExpandKeys(expandableKeys)
        }
    }, [props.defaultExpandAll])

    useEffect(() => {
        if (props.expandKeys) {
            setExpandKeys(props.expandKeys)
        }
    }, [props.expandKeys])

    const handleCheck = (
        checkedKeys: string[],
        checkNode: TreeNode,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCheckedKeys(uniq(checkedKeys))
        props.onCheck && props.onCheck(checkedKeys, checkNode, event)
    }

    const handleExpand = (expandKeys: string[], expandNode: TreeNode) => {
        setExpandKeys(uniq(expandKeys))
        props.onExpand && props.onExpand(expandKeys, expandNode)
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
                    expandKeys={expandKeys}
                    onExpand={handleExpand}
                    defaultExpandAll={props.defaultExpandAll}
                ></TreeNode>
            ))}
        </div>
    )
}

export default Tree
