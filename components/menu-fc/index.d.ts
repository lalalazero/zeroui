import React from 'react';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import './style.scss';
import SubMenu from './SubMenu';
export declare type MenuType = 'inline' | 'vertical' | 'horizontal' | 'ceilinged';
export interface CommonMenuProps {
    indentLevel: number;
    type: MenuType;
    generateKey: string;
    key: React.Key;
}
export interface MenuProps {
    type?: MenuType;
    className?: string;
}
export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu;
    MenuItem: typeof MenuItem;
    MenuGroup: typeof MenuGroup;
}
declare const Menu: MenuInterface;
export default Menu;
