import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import './style.scss'
import { connect, createStore, Provider } from './TreeContext'
import TreeNode, { TreeNodeType } from './TreeNode'

const PREFIX = 'zeroui-tree'

export type TreeData = TreeNodeType[]

export type TreeProps = {
    treeData: TreeNodeType[]
    checkedKeys?: string[]
    defaultCheckedKeys?: string[]
    defaultExpandKeys?: string[]
    defaultSelectedKeys?: string[]
    expandKeys?: string[]
    selectedKeys?: string[]
    multiple?: boolean
    checkable: boolean
    autoExpandParent?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkNode: TreeNodeType,
        event: ChangeEvent<HTMLInputElement>
    ) => void
    onExpand?: (expandKeys: string[], expandNode: TreeNodeType) => void
    onSelect?: (selectedKeys: string[], selectNode: TreeNodeType) => void
    expandIcon?: ReactNode
    collapseIcon?: ReactNode
    loadData?: (node: TreeNodeType) => Promise<any>
    disabled?: boolean
}

const Tree: React.FC<TreeProps> = (props) => {
    // const context = useContext(Context)

    // console.log('Tree context..', context)

    const [checkedKeys, setCheckedKeys] = useState<string[]>([])
    const [expandKeys, setExpandKeys] = useState<string[]>([])
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    const [disabledKeys, setDisabledKeys] = useState<string[]>([])

    useEffect(() => {
        if (props.disabled) {
            setDisabledKeys(getAllKeys(props.treeData))
        } else {
            setDisabledKeys(getDisabledKeys(props.treeData))
        }
    }, [props.treeData, props.disabled])

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
        if (props.autoExpandParent) {
            const expandableKeys = getExpandableChildrenKeys(props.treeData)
            expandableKeys.length > 0 && setExpandKeys(expandableKeys)
        }
    }, [props.autoExpandParent])

    useEffect(() => {
        if (props.expandKeys) {
            setExpandKeys(props.expandKeys)
        }
    }, [props.expandKeys])

    const handleCheck = (
        checkedKeys: string[],
        checkNode: TreeNodeType,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCheckedKeys(
            uniq(checkedKeys.filter((key) => disabledKeys.indexOf(key) < 0))
        )
        props.onCheck && props.onCheck(checkedKeys, checkNode, event)
    }

    const handleExpand = (expandNode: TreeNodeType, expanded: boolean) => {
        const newExpandKeys = [...expandKeys]
        if (!expanded) {
            newExpandKeys.push(expandNode.key)
        } else {
            const index = newExpandKeys.indexOf(expandNode.key)
            if (index >= 0) {
                newExpandKeys.splice(index, 1)
            }
        }
        setExpandKeys(uniq(newExpandKeys))
        props.onExpand && props.onExpand(newExpandKeys, expandNode)
    }

    const handleSelect = (selectNode: TreeNodeType, selected: boolean) => {
        let newSelectedKeys: string[] = props.multiple
            ? [...selectedKeys]
            : selected
            ? []
            : [selectNode.key]

        if (props.multiple) {
            if (!selected) {
                newSelectedKeys.push(selectNode.key)
            } else {
                const index = newSelectedKeys.indexOf(selectNode.key)
                if (index >= 0) {
                    newSelectedKeys.splice(index, 1)
                }
            }
            newSelectedKeys = uniq(Array.from(new Set(newSelectedKeys)))
        }

        setSelectedKeys(newSelectedKeys)
        props.onSelect && props.onSelect(newSelectedKeys, selectNode)
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
                    autoExpandParent={props.autoExpandParent}
                    treeCheckable={props.checkable}
                    selectedKeys={selectedKeys}
                    onSelect={handleSelect}
                    expandIcon={props.expandIcon}
                    collapseIcon={props.collapseIcon}
                    loadData={props.loadData}
                    treeDisabled={props.disabled}
                ></TreeNode>
            ))}
        </div>
    )
}

const getExpandableChildrenKeys = (treeData: TreeData) => {
    const keys: string[] = []
    const getKey = (parentNode: TreeNodeType) => {
        if (parentNode.children && parentNode.children.length > 0) {
            if (parentNode.expandable === false) return
            keys.push(parentNode.key)
            parentNode.children.forEach((child) => getKey(child))
        }
    }

    treeData.forEach((node: TreeNodeType) => getKey(node))

    return keys
}

const getDisabledKeys = (treeData: TreeData) => {
    const keys: string[] = []
    const getDisabledKey = (parentNode: TreeNodeType) => {
        if (parentNode.disabled || parentNode.disableCheckbox) {
            keys.push(parentNode.key)
        }
        if (parentNode.children && parentNode.children.length > 0) {
            parentNode.children.forEach((child) => getDisabledKey(child))
        }
    }

    treeData.forEach((node: TreeNodeType) => getDisabledKey(node))

    return keys
}

const getAllKeys = (treeData: TreeData) => {
    const keys: string[] = []
    const x = (node: TreeNodeType) => {
        keys.push(node.key)
        node.children && node.children.forEach((c) => x(c))
    }
    treeData.forEach((d) => x(d))
    return keys
}

const uniq = (arr: string[]) => Array.from(new Set(arr))

Tree.defaultProps = {
    checkable: true,
    autoExpandParent: true,
    multiple: false,
    disabled: false,
}

const mapStateToProps = () => ({ a: 'mapped' })

const Connected = connect(mapStateToProps)(Tree)

const ConnectedTree: React.FC<TreeProps> = (props) => {
    const store = createStore({ xxx: 'firstStore' })
    return (
        <Provider store={store}>
            <Connected {...props} />
        </Provider>
    )
}

export default ConnectedTree
