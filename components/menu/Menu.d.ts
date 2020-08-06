import { Component, HTMLAttributes } from 'react';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import './Menu.scss';
export interface MenuProps extends HTMLAttributes<HTMLElement> {
}
declare class Menu extends Component<MenuProps> {
    static MenuGroup: typeof MenuGroup;
    static MenuItem: typeof MenuItem;
    static SubMenu: typeof SubMenu;
    constructor(props: MenuProps);
    render(): JSX.Element;
}
export default Menu;
