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
    expandKeys: string[] | undefined | null;
    selectedKeys: string[];
    defaultExpandAll?: boolean;
    onCheck?: (newCheckedKeys: string[], checkItem?: TreeNodeType, e?: ChangeEvent<HTMLInputElement>) => void;
    level: number;
    onExpand: (expandKeys: string[], expandNode: TreeNodeType) => void;
    onSelect: (selectNode: TreeNodeType) => void;
    onDeselect: (selectNode: TreeNodeType) => void;
    treeCheckable: boolean;
    expandIcon?: ReactNode;
    collapseIcon?: ReactNode;
    loadData?: (node: TreeNodeType) => Promise<any>;
}
declare const TreeNode: React.FC<TreeNodeProps>;
export default TreeNode;
