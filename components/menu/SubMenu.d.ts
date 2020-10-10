import { Component, HTMLAttributes } from 'react';
import { extraProps } from './MenuGroup';
export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string;
    extraProps?: extraProps;
}
export interface SubMenuState {
    itemsVisible: boolean;
}
declare class SubMenu extends Component<SubMenuProps, SubMenuState> {
    static isSubMenu: boolean;
    private subItemKeys;
    private timerId;
    constructor(props: SubMenuProps);
    toggle: () => void;
    open: () => void;
    close: () => void;
    componentDidMount(): void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    render(): JSX.Element;
}
export default SubMenu;
