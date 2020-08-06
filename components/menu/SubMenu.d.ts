import { Component, HTMLAttributes } from 'react';
export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string;
}
export interface SubMenuState {
    itemsVisible: boolean;
}
declare class SubMenu extends Component<SubMenuProps, SubMenuState> {
    constructor(props: SubMenuProps);
    toggle: () => void;
    render(): JSX.Element;
}
export default SubMenu;
