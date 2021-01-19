import React from 'react';
import { MenuStore } from '.';
import { Store } from '../_util/mini-store';
export interface MenuItemProps {
    key?: React.Key;
    className?: string;
}
declare const ConnectedMenuItem: (props: {
    indentLevel: number;
    type: import("../menu/Menu").modeType;
    generateKey: string;
    key: React.ReactText;
    onOpenChange?: ((openKeys: string[]) => void) | undefined;
    onSelect?: ((selectParams: import(".").TSelectParam) => void) | undefined;
    multiple: boolean;
    className?: string | undefined;
    store: Store<MenuStore>;
}) => JSX.Element;
export default ConnectedMenuItem;
