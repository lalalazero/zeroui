import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import './style.scss'
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
    defaultExpandAll?: boolean
    onCheck?: (
        newCheckedKeys: string[],
        checkNode: TreeNodeType,
        event: ChangeEvent<HTMLInputElement>
    ) => void
    onExpand?: (expandKeys: string[], expandNode: TreeNodeType) => void
    onSelect?: (selectedKeys: string[], selectNode: TreeNodeType) => void
    expandIcon?: ReactNode
    collapseIcon?: ReactNode
    loadData?: (node: TreeNodeType) => void
}

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
        checkNode: TreeNodeType,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCheckedKeys(uniq(checkedKeys))
        props.onCheck && props.onCheck(checkedKeys, checkNode, event)
    }

    const handleExpand = (expandKeys: string[], expandNode: TreeNodeType) => {
        setExpandKeys(uniq(expandKeys))
        props.onExpand && props.onExpand(expandKeys, expandNode)
    }

    const handleSelect = (selectNode: TreeNodeType) => {
        let newSelectedKeys = [selectNode.key]
        if (props.multiple) {
            newSelectedKeys = uniq(selectedKeys.concat([selectNode.key]))
        }
        setSelectedKeys(newSelectedKeys)
        props.onSelect && props.onSelect(newSelectedKeys, selectNode)
    }

    const handleDeselect = (deselectNode: TreeNodeType) => {
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

const uniq = (arr: string[]) => Array.from(new Set(arr))

Tree.defaultProps = {
    checkable: true,
    defaultExpandAll: false,
    multiple: false,
}

export default Tree
