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
}

const Tree: React.FC<TreeProps> = (props) => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([])
    const [expandKeys, setExpandKeys] = useState<string[]>([])
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
        setCheckedKeys(uniq(checkedKeys))
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
    autoExpandParent: true,
    multiple: false,
}

export default Tree
