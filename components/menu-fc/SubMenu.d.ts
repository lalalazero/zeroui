import React from 'react';
import { CommonMenuProps } from '.';
export declare const PADDING_BASE = 14;
export interface SubMenuProps {
    title?: string;
    className?: string;
}
declare type SubMenuInnerProps = CommonMenuProps & SubMenuProps;
declare const SubMenu: React.FC<SubMenuInnerProps>;
export default SubMenu;
