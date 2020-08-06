import { Component, HTMLAttributes } from 'react';
export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
}
export default class MenuItem extends Component<MenuItemProps> {
    constructor(props: MenuItemProps);
    render(): JSX.Element;
}
