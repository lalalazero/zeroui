import React, { CSSProperties } from 'react';
import './style.scss';
export declare const BadgeStatus: readonly ["success", "warning", "default", "processing", "error"];
export interface BadgeProps extends Omit<CSSProperties, 'offset'> {
    count?: number;
    className?: string;
    showZero?: boolean;
    overCount?: number;
    dot?: boolean;
    offset?: [number | string, number | string];
    status?: typeof BadgeStatus[number];
    color?: string;
    text?: string;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
