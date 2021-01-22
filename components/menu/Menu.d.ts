import { Component, HTMLAttributes } from 'react';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
export interface MenuProps extends HTMLAttributes<HTMLElement> {
    mode: modeType;
}
export declare type modeType = 'inline' | 'vertical' | 'horizontal' | 'ceilinged';
export interface MenuState {
    selectedKey: string;
    selectedKeys: string[];
}
declare class Menu extends Component<MenuProps, MenuState> {
    static MenuGroup: typeof MenuGroup;
    static MenuItem: typeof MenuItem;
    static SubMenu: typeof SubMenu;
    static defaultProps: {
        mode: string;
    };
    private indentLevel;
    constructor(props: MenuProps);
    changeKey: (newKey: string, keyPath: string[]) => void;
    render(): JSX.Element;
}
export default Menu;
