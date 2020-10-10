import React, { Component, HTMLAttributes } from 'react';
import { extraProps } from './MenuGroup';
export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    itemKey?: React.Key;
    extraProps?: extraProps;
}
export interface MenuItemState {
    isSelectedKey: boolean;
}
declare class MenuItem extends Component<MenuItemProps, MenuItemState> {
    static isMenuItem: boolean;
    constructor(props: MenuItemProps);
    onClick: () => void;
    render(): JSX.Element;
}
export default MenuItem;
