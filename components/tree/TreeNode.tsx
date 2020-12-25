import React, {
    ChangeEvent,
    ChangeEventHandler,
    ReactNode,
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
    disabled?: boolean
    disableCheckbox?: boolean
}

interface TreeNodeProps {
    treeNode: TreeNodeType
    checkedKeys: string[]
    expandKeys: string[]
    selectedKeys: string[]
    autoExpandParent?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkItem?: TreeNodeType,
        e?: ChangeEvent<HTMLInputElement>
    ) => void
    level: number
    onExpand: (expandNode: TreeNodeType, expanded: boolean) => void
    onSelect: (selectNode: TreeNodeType, selected: boolean) => void
    treeCheckable: boolean
    expandIcon?: ReactNode
    collapseIcon?: ReactNode
    loadData?: (node: TreeNodeType) => Promise<any>
    treeDisabled?: boolean
}

// @connect(() => ({ a: 'aaaaaaaa' }))
const TreeNode: React.FC<TreeNodeProps> = (props) => {
    // const store = useContext(Context)

    console.log(`key=${props.treeNode.key}`)
    console.log(`props.a`, (props as any).a)

    // console.log(`${props.treeNode.title} context = `, store && store.getState())

    const [loading, setLoading] = useState(false)

    const childrenKeys = useMemo(() => {
        return getChildrenKeys(props.treeNode)
    }, [props.treeNode.children])

    const checked = useMemo(() => {
        return props.checkedKeys.indexOf(props.treeNode.key) >= 0
    }, [props.checkedKeys])

    const indeterminate = useMemo(() => {
        return (
            childrenKeys.length > 0 &&
            childrenKeys.some((key) => props.checkedKeys.indexOf(key) >= 0)
        )
    }, [props.checkedKeys, childrenKeys])

    const selected = useMemo(() => {
        return props.selectedKeys.indexOf(props.treeNode.key) >= 0
    }, [props.treeNode.key, props.selectedKeys])

    const expanded = useMemo(() => {
        return props.expandKeys.indexOf(props.treeNode.key) >= 0
    }, [props.expandKeys, props.treeNode.key])

    const nodeDisabled =
        props.treeDisabled === true || props.treeNode.disabled === true

    const checkboxDisabled =
        nodeDisabled || props.treeNode.disableCheckbox === true

    const isLeaf = useMemo(() => {
        if (typeof props.treeNode.isLeaf === 'boolean') {
            return props.treeNode.isLeaf
        }
        return !props.treeNode.children || props.treeNode.children.length <= 0
    }, [props.treeNode.isLeaf, props.treeNode.children])

    const autoCheckableChildrenKeys = filterAutoCheckableKeys(
        props.treeNode.children || []
    )

    const handleCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (nodeDisabled || checkboxDisabled) return
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
                newCheckedKeys = newCheckedKeys.concat(
                    autoCheckableChildrenKeys
                )
            } else {
                newCheckedKeys = newCheckedKeys.filter(
                    (key) => autoCheckableChildrenKeys.indexOf(key) < 0
                )
            }
        }

        props.onCheck && props.onCheck(newCheckedKeys, props.treeNode, event)
    }

    const expandIcon = useMemo(() => {
        if (!isLeaf) {
            if (expanded) {
                return props.expandIcon || <Icon name="filled-down"></Icon>
            } else {
                return props.collapseIcon || <Icon name="filled-right"></Icon>
            }
        }

        return ''
    }, [props.treeNode.children, expanded])

    const checkable = useMemo(() => {
        return (
            props.treeCheckable !== false && props.treeNode.checkable !== false
        )
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
                        disabled={checkboxDisabled}
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
        props.onExpand(props.treeNode, expanded)
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
        if (props.loadData && !expanded) {
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

    const handleSelect = () => {
        if (nodeDisabled) return
        props.onSelect(props.treeNode, selected)
    }

    const key = `level/${props.level}-value/${props.treeNode.key}`

    return (
        <>
            <div
                key={key}
                data-key={key}
                style={{ marginLeft: props.level * 10 }}
                className={classname(PREFIX + '-item', {
                    [`${PREFIX}-item-disabled`]: nodeDisabled,
                })}
            >
                {renderExpandIcon}

                {renderCheckbox}
                <span
                    className={classname(PREFIX + '-label', {
                        [`${PREFIX}-item-selected`]: selected,
                    })}
                    onClick={handleSelect}
                >
                    <span className={PREFIX + '-node-icon'}>
                        {props.treeNode.icon}
                    </span>
                    {props.treeNode.title}
                </span>
                {expanded &&
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
                            autoExpandParent={props.autoExpandParent}
                            treeCheckable={props.treeCheckable}
                            selectedKeys={props.selectedKeys}
                            onSelect={props.onSelect}
                            expandIcon={props.expandIcon}
                            collapseIcon={props.collapseIcon}
                            loadData={props.loadData}
                            treeDisabled={props.treeDisabled}
                        ></TreeNode>
                    ))}
            </div>
        </>
    )
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

const filterAutoCheckableKeys = (children: TreeData) => {
    const keys: string[] = []

    const x = (node: TreeNodeType) => {
        if (node.disabled || node.disableCheckbox) {
            return
        }
        keys.push(node.key)
        node.children && node.children.forEach((child) => x(child))
    }

    children.forEach((child) => x(child))

    return keys
}
// export default connect(() => ({ a: 'bbbb' }))(TreeNode)
