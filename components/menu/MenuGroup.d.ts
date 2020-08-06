import { Component, HTMLAttributes } from 'react';
export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string;
}
export interface MenuGroupState {
}
export default class MenuGroup extends Component<MenuGroupProps, MenuGroupState> {
    constructor(props: MenuGroupProps);
    render(): JSX.Element;
}
