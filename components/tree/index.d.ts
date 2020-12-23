import React, { ChangeEvent, ReactNode } from 'react';
import './style.scss';
export declare type TreeNode = {
    title: string | ReactNode;
    key: string;
    children?: TreeNode[];
    expandable?: boolean;
};
export declare type TreeData = TreeNode[];
export declare type TreeProps = {
    treeData: TreeNode[];
    checkedKeys?: string[];
    defaultCheckedKeys?: string[];
    defaultExpandKeys?: string[];
    expandKeys?: string[];
    defaultExpandAll?: boolean;
    onCheck?: (newCheckedKeys: string[], checkNode: TreeNode, event: ChangeEvent<HTMLInputElement>) => void;
    onExpand?: (expandKeys: string[], expandNode: TreeNode) => void;
};
declare const Tree: React.FC<TreeProps>;
export default Tree;
