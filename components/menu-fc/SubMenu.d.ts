import React from 'react';
import { MenuStore, TSelectParam } from '.';
import { Store } from '../_util/mini-store';
export declare const PADDING_BASE = 14;
export interface SubMenuProps {
    title?: string;
    className?: string;
}
declare const ConnectedSubMenu: (props: {
    indentLevel: number;
    type: import("../menu/Menu").modeType;
    generateKey: string;
    key: React.ReactText;
    onOpenChange?: ((openKeys: string[]) => void) | undefined;
    onSelect?: ((selectParams: TSelectParam) => void) | undefined;
    multiple: boolean;
    title?: string | undefined;
    className?: string | undefined;
    store: Store<MenuStore>;
}) => JSX.Element;
export default ConnectedSubMenu;
