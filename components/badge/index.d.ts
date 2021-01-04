import React, { CSSProperties } from 'react';
import './style.scss';
export interface BadgeProps extends Omit<CSSProperties, 'offset'> {
    count?: number;
    className?: string;
    showZero?: boolean;
    overCount?: number;
    dot?: boolean;
    offset?: [number | string, number | string];
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
