import React from 'react';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import './style.scss';
import SubMenu from './SubMenu';
export declare type MenuType = 'inline' | 'vertical' | 'horizontal';
export interface CommonMenuProps {
    indentLevel: number;
    type: MenuType;
    generateKey: string;
    key: React.Key;
    onOpenChange?: (openKeys: string[]) => void;
    onSelect?: (selectParams: TSelectParam) => void;
    multiple: boolean;
}
export interface TSelectParam {
    key: string;
    keyPath: string[];
    selectedKeys: string[];
}
export interface MenuProps {
    type?: MenuType;
    className?: string;
    selectedKeys?: string[];
    openKeys?: string[];
    defaultSelectedKeys?: string[];
    defaultOpenKeys?: string[];
    onSelect?: (selectParams: TSelectParam) => void;
    onOpenChange?: (openKeys: string[]) => void;
    multiple?: boolean;
}
export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu;
    MenuItem: typeof MenuItem;
    MenuGroup: typeof MenuGroup;
}
export declare type MenuStore = {
    openKeys: string[];
    selectedKeys: string[];
};
declare const Menu: MenuInterface;
export default Menu;
