import React from 'react';
import './Icon.scss';
export declare const ICONS: readonly ["like", "edit", "copy", "info", "error", "loading", "alipay", "wechat", "code-open", "code-close", "left", "right", "down", "setting", "emptysearch", "filled-up", "filled-down", "filled-left", "filled-right", "download", "next-double", "prev-double", "search", "zoom-in", "zoom-out", "close", "rotate-left", "rotate-right", "check", "check-filled"];
export declare type ICON = typeof ICONS[number];
export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: ICON;
}
declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
