import React, { ChangeEvent } from 'react';
import './style.scss';
export declare type TreeNode = {
    title: string;
    key: string;
    children?: TreeNode[];
};
export declare type TreeData = TreeNode[];
export declare type TreeProps = {
    treeData: TreeNode[];
    checkedKeys?: string[];
    onCheck?: (newCheckedKeys: string[], checkNode: TreeNode, event: ChangeEvent<HTMLInputElement>) => void;
};
declare const Tree: React.FC<TreeProps>;
export default Tree;
