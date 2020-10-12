import { Component, HTMLAttributes } from 'react';
import './Menu.scss';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
export interface MenuProps extends HTMLAttributes<HTMLElement> {
    mode: modeType;
}
export declare type modeType = 'inline' | 'vertical' | 'horizontal';
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
    itemKeys: any[];
    constructor(props: MenuProps);
    componentDidMount(): void;
    addItemKey: (key: any) => void;
    changeKey: (newKey: string, keyPath: string[]) => void;
    render(): JSX.Element;
}
export default Menu;
