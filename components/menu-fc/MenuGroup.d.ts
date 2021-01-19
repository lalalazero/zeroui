import React from 'react';
import { CommonMenuProps } from '.';
export declare const PADDING_BASE_GROUP = 8;
export interface MenuGroupProps {
    title?: string;
}
declare type MenuGroupInnerProps = CommonMenuProps & MenuGroupProps;
declare const MenuGroup: React.FC<MenuGroupInnerProps>;
export default MenuGroup;
