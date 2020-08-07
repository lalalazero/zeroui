import React, { Component, HTMLAttributes } from 'react';
export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
}
export interface MenuItemState {
    isSelectedKey: boolean;
}
export default class MenuItem extends Component<MenuItemProps, MenuItemState> {
    static contextType: React.Context<import("./MenuContext").MenuContextProps>;
    constructor(props: MenuItemProps);
    onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, changeKey: any) => void;
    render(): JSX.Element;
}
