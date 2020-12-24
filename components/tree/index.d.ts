import React, { ChangeEvent, ReactNode } from 'react';
import './style.scss';
export declare type TreeNode = {
    title: string | ReactNode;
    key: string;
    children?: TreeNode[];
    expandable?: boolean;
    checkable?: boolean;
    icon?: ReactNode;
};
export declare type TreeData = TreeNode[];
export declare type TreeProps = {
    treeData: TreeNode[];
    checkedKeys?: string[];
    defaultCheckedKeys?: string[];
    defaultExpandKeys?: string[];
    defaultSelectedKeys?: string[];
    expandKeys?: string[];
    selectedKeys?: string[];
    multiple?: boolean;
    checkable: boolean;
    defaultExpandAll?: boolean;
    onCheck?: (newCheckedKeys: string[], checkNode: TreeNode, event: ChangeEvent<HTMLInputElement>) => void;
    onExpand?: (expandKeys: string[], expandNode: TreeNode) => void;
    onSelect?: (selectedKeys: string[], selectNode: TreeNode) => void;
    expandIcon?: ReactNode;
    collapseIcon?: ReactNode;
};
declare const Tree: React.FC<TreeProps>;
export default Tree;
