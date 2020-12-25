import React, { ChangeEvent, ReactNode } from 'react';
export declare type TreeNodeType = {
    title: string | ReactNode;
    key: string;
    children?: TreeNodeType[];
    expandable?: boolean;
    checkable?: boolean;
    icon?: ReactNode;
    isLeaf?: boolean;
};
interface TreeNodeProps {
    treeNode: TreeNodeType;
    checkedKeys: string[];
    expandKeys: string[];
    selectedKeys: string[];
    autoExpandParent?: boolean;
    onCheck?: (newCheckedKeys: string[], checkItem?: TreeNodeType, e?: ChangeEvent<HTMLInputElement>) => void;
    level: number;
    onExpand: (expandNode: TreeNodeType, expanded: boolean) => void;
    onSelect: (selectNode: TreeNodeType, selected: boolean) => void;
    treeCheckable: boolean;
    expandIcon?: ReactNode;
    collapseIcon?: ReactNode;
    loadData?: (node: TreeNodeType) => Promise<any>;
}
declare const TreeNode: React.FC<TreeNodeProps>;
export default TreeNode;
