import { Component, HTMLAttributes } from 'react';
import { modeType } from './Menu';
export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string;
    indentLevel?: number;
    mode?: modeType;
}
export interface MenuGroupState {
}
export default class MenuGroup extends Component<MenuGroupProps, MenuGroupState> {
    static isMenuGroup: boolean;
    constructor(props: MenuGroupProps);
    render(): JSX.Element;
}
