import { Component, HTMLAttributes } from 'react';
import { extraProps } from './MenuGroup';
interface InternalMenuProps extends SubMenuProps {
    extraProps: extraProps;
    itemKey: string;
}
interface InternalMenuState {
    itemsVisible: boolean;
    isHighlighted: boolean;
}
export declare class SubMenuInternal extends Component<InternalMenuProps, InternalMenuState> {
    static isSubMenuInternal: boolean;
    private timerId;
    constructor(props: InternalMenuProps);
    static getDerivedStateFromProps(props: InternalMenuProps): Partial<InternalMenuState>;
    toggle: () => void;
    open: () => void;
    close: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    changeKey: (key: string, keyPath: string[]) => void;
    render(): JSX.Element;
}
export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string;
}
declare class SubMenu extends Component<SubMenuProps> {
    static isSubMenu: boolean;
    constructor(props: SubMenuProps);
    render(): JSX.Element;
}
export default SubMenu;
