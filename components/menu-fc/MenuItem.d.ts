import React from 'react';
import { CommonMenuProps } from '../menu-fc';
export interface MenuItemProps {
    key?: React.Key;
    className?: string;
}
declare type MenuItemInnerProps = CommonMenuProps & MenuItemProps;
declare const MenuItem: React.FC<MenuItemInnerProps>;
export default MenuItem;
