import { Component, HTMLAttributes } from 'react';
import { modeType } from './Menu';
export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string;
    extraProps?: extraProps;
    itemKey?: string;
}
export interface extraProps {
    indentLevel?: number;
    mode?: modeType;
    changeKey: (key: string, keyPath: string[]) => void;
    selectedKey: string;
    selectedKeys: string[];
}
export interface MenuGroupState {
    [key: string]: any;
}
export default class MenuGroup extends Component<MenuGroupProps, MenuGroupState> {
    static isMenuGroup: boolean;
    constructor(props: MenuGroupProps);
    render(): JSX.Element;
}
