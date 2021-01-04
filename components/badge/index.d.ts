import React, { CSSProperties } from 'react';
import './style.scss';
export interface BadgeProps extends CSSProperties {
    count?: number;
    className?: string;
    showZero?: boolean;
    overCount?: number;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
