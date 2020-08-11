import React, { Component, HTMLAttributes } from 'react';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import { MenuContextProps } from './MenuContext';
import './Menu.scss';
export interface MenuProps extends HTMLAttributes<HTMLElement> {
    mode: modeType;
}
export declare type modeType = 'inline' | 'vertical' | 'horizontal';
export interface MenuState {
    selectedKey: string;
}
declare class Menu extends Component<MenuProps, MenuState> {
    static contextType: React.Context<MenuContextProps>;
    static MenuGroup: typeof MenuGroup;
    static MenuItem: typeof MenuItem;
    static SubMenu: typeof SubMenu;
    static defaultProps: {
        mode: string;
    };
    private indentLevel;
    constructor(props: MenuProps);
    componentDidMount(): void;
    changeKey: (newKey: string) => void;
    render(): JSX.Element;
}
export default Menu;
