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
    checkable?: boolean
    icon?: ReactNode
}

export type TreeData = TreeNode[]

export type TreeProps = {
    treeData: TreeNode[]
    checkedKeys?: string[]
    defaultCheckedKeys?: string[]
    defaultExpandKeys?: string[]
    defaultSelectedKeys?: string[]
    expandKeys?: string[]
    selectedKeys?: string[]
    multiple?: boolean
    checkable: boolean
    defaultExpandAll?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkNode: TreeNode,
        event: ChangeEvent<HTMLInputElement>
    ) => void
    onExpand?: (expandKeys: string[], expandNode: TreeNode) => void
    onSelect?: (selectedKeys: string[], selectNode: TreeNode) => void
    expandIcon?: ReactNode
    collapseIcon?: ReactNode
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
    selectedKeys: string[]
    defaultExpandAll?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeNode,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
    level: number
    onExpand: (expandKeys: string[], expandNode: TreeNode) => void
    onSelect: (selectNode: TreeNode) => void
    onDeselect: (selectNode: TreeNode) => void
    treeCheckable: boolean
    expandIcon?: ReactNode
    collapseIcon?: ReactNode
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

const useChildrenKeys = (props: TreeNodeProps) => {
    const childrenKeys = useMemo(() => {
        if (props.treeNode) {
            return getChildrenKeys(props.treeNode)
        }
        return []
    }, [props.treeNode])

    return childrenKeys
}

const useCheck = (props: TreeNodeProps) => {
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const childrenKeys = useChildrenKeys(props)
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

    return [checked, indeterminate]
}

const useSelect = (props: TreeNodeProps) => {
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (
            props.selectedKeys &&
            props.selectedKeys.indexOf(props.treeNode.key) >= 0
        ) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [props.selectedKeys, props.treeNode.key])

    return selected
}

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const [checked, indeterminate] = useCheck(props)
    const selected = useSelect(props)
    const isExpand = useExpand(props)
    const childrenKeys = useChildrenKeys(props)

    const isLeaf = useMemo(() => {
        return props.treeNode.children && props.treeNode.children.length > 0
            ? false
            : true
    }, [props.treeNode])

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
                return props.expandIcon || <Icon name="filled-down"></Icon>
            } else {
                return props.collapseIcon || <Icon name="filled-right"></Icon>
            }
        }

        return ''
    }, [props.treeNode.children, isExpand])

    const checkable = useMemo(() => {
        return props.treeCheckable && props.treeNode.checkable !== false
    }, [props.treeNode.checkable, props.treeCheckable])

    const renderCheckbox = useMemo(() => {
        if (checkable) {
            return (
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
            )
        }

        return ''
    }, [checkable, checked, indeterminate, handleCheck])

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

    const handleSelect = (selectNode: TreeNode) => {
        if (selected) {
            props.onDeselect(selectNode)
        } else {
            props.onSelect(selectNode)
        }
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

                {renderCheckbox}
                <span
                    className={classname(PREFIX + '-label', {
                        [`${PREFIX}-item-selected`]: selected,
                    })}
                    onClick={() => handleSelect(props.treeNode)}
                >
                    <span className={PREFIX + '-node-icon'}>
                        {props.treeNode.icon}
                    </span>
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
                            treeCheckable={props.treeCheckable}
                            selectedKeys={props.selectedKeys}
                            onSelect={props.onSelect}
                            onDeselect={props.onDeselect}
                            expandIcon={props.expandIcon}
                            collapseIcon={props.collapseIcon}
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
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    useEffect(() => {
        if (props.selectedKeys) {
            setSelectedKeys(props.selectedKeys)
        }
    }, [props.selectedKeys])

    useEffect(() => {
        if (props.defaultExpandKeys) {
            setExpandKeys(props.defaultExpandKeys)
        }

        if (props.defaultCheckedKeys) {
            setCheckedKeys(props.defaultCheckedKeys)
        }

        if (props.defaultSelectedKeys) {
            setSelectedKeys(props.defaultSelectedKeys)
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

    const handleSelect = (selectNode: TreeNode) => {
        let newSelectedKeys = [selectNode.key]
        if (props.multiple) {
            newSelectedKeys = uniq(selectedKeys.concat([selectNode.key]))
        }
        setSelectedKeys(newSelectedKeys)
        props.onSelect && props.onSelect(newSelectedKeys, selectNode)
    }

    const handleDeselect = (deselectNode: TreeNode) => {
        const newSelectedKeys = selectedKeys.filter(
            (key) => key !== deselectNode.key
        )
        setSelectedKeys(newSelectedKeys)
        props.onSelect && props.onSelect(newSelectedKeys, deselectNode)
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
                    treeCheckable={props.checkable}
                    selectedKeys={selectedKeys}
                    onSelect={handleSelect}
                    onDeselect={handleDeselect}
                    expandIcon={props.expandIcon}
                    collapseIcon={props.collapseIcon}
                ></TreeNode>
            ))}
        </div>
    )
}

Tree.defaultProps = {
    checkable: true,
    defaultExpandAll: false,
    multiple: false,
}

export default Tree
