import React, { HTMLProps } from 'react';
import './Row.scss';
export interface RowProps extends HTMLProps<HTMLDivElement> {
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
    gutter?: number;
    align?: 'top' | 'middle' | 'bottom';
}
declare const Row: React.FC<RowProps>;
export default Row;
