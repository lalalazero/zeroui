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
import { TreeData } from './index'

const PREFIX = 'zeroui-tree'

export type TreeNodeType = {
    title: string | ReactNode
    key: string
    children?: TreeNodeType[]
    expandable?: boolean
    checkable?: boolean
    icon?: ReactNode
    isLeaf?: boolean
}

interface TreeNodeProps {
    treeNode: TreeNodeType
    checkedKeys: string[]
    expandKeys: string[] | undefined | null
    selectedKeys: string[]
    defaultExpandAll?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeNodeType,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
    level: number
    onExpand: (expandKeys: string[], expandNode: TreeNodeType) => void
    onSelect: (selectNode: TreeNodeType) => void
    onDeselect: (selectNode: TreeNodeType) => void
    treeCheckable: boolean
    expandIcon?: ReactNode
    collapseIcon?: ReactNode
    loadData?: (node: TreeNodeType) => Promise<any>
}

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const [checked, indeterminate] = useCheck(props)
    const selected = useSelect(props)
    const isExpand = useExpand(props)
    const childrenKeys = useChildrenKeys(props)
    const [loading, setLoading] = useState(false)

    const isLeaf = useMemo(() => {
        return props.treeNode.isLeaf !== undefined &&
            props.treeNode.isLeaf !== null
            ? props.treeNode.isLeaf
            : props.treeNode.children && props.treeNode.children.length > 0
                ? false
                : true
    }, [props.treeNode.isLeaf, props.treeNode.children])

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
        if (!isLeaf) {
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

    const doSyncExpand = () => {
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

    const doAsyncExpand = () => {
        setLoading(true)
        props.loadData &&
            props
                .loadData(props.treeNode)
                .then(() => doSyncExpand())
                .catch((err) => console.warn('loadData err', err))
                .finally(() => setLoading(false))
    }

    const handleExpand = () => {
        if (props.loadData) {
            doAsyncExpand()
        } else {
            doSyncExpand()
        }
    }

    const renderExpandIcon = useMemo(() => {
        return loading ? (
            <Icon name="loading" className={PREFIX + '-loading'}></Icon>
        ) : (
            <span className={PREFIX + '-expand-span'} onClick={handleExpand}>
                {expandIcon}
            </span>
        )
    }, [expandIcon, loading, handleExpand])

    const onNodeCheck = (
        checkedKeys: string[],
        checkNode: TreeNodeType,
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

    const handleSelect = (selectNode: TreeNodeType) => {
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
                {renderExpandIcon}

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
                            loadData={props.loadData}
                        ></TreeNode>
                    ))}
            </div>
        </>
    )
}

const useExpand = (props: TreeNodeProps) => {
    const [isExpand, setIsExpand] = useState(false)
    const expandable =
        props.treeNode.isLeaf !== true ||
        (props.treeNode.children && props.treeNode.children.length > 0)

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

const getChildrenKeys = (parentNode: TreeNodeType) => {
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

export default TreeNode
