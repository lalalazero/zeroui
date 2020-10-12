import { Component, HTMLAttributes } from 'react';
import { extraProps } from './MenuGroup';
interface InternalMenuProps extends SubMenuProps {
    extraProps: extraProps;
    itemKey: string;
}
export interface SubMenuState {
    itemsVisible: boolean;
}
export declare class SubMenuInternal extends Component<InternalMenuProps, SubMenuState> {
    static isSubMenu: boolean;
    private subItemKeys;
    private timerId;
    constructor(props: InternalMenuProps);
    toggle: () => void;
    open: () => void;
    close: () => void;
    componentDidMount(): void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    changeKey: (key: string, keyPath: string[]) => void;
    render(): JSX.Element;
}
export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string;
}
declare class SubMenu extends Component<SubMenuProps> {
    constructor(props: SubMenuProps);
    render(): JSX.Element;
}
export default SubMenu;
