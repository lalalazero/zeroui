import React from 'react';
import { CommonMenuProps, MenuStore } from '.';
export interface MenuItemProps {
    key?: React.Key;
    className?: string;
}
declare type MenuItemInnerProps = CommonMenuProps & MenuItemProps;
declare const _default: React.FunctionComponent<import("../_util/zero-store").ConnectedProps<MenuStore, MenuStore, MenuItemInnerProps>>;
export default _default;
