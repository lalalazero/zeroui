import React from 'react';
import { CommonMenuProps, MenuStore } from '.';
export declare const PADDING_BASE = 14;
export interface SubMenuProps {
    title?: string;
    className?: string;
}
declare type SubMenuInnerProps = CommonMenuProps & SubMenuProps;
declare const _default: React.FunctionComponent<import("../_util/zero-store").ConnectedProps<MenuStore, MenuStore, SubMenuInnerProps>>;
export default _default;
