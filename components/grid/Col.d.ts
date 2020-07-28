import React, { HTMLProps } from 'react';
import './Col.scss';
interface ResponseProps {
    span?: number;
    offset?: number;
    push?: number;
    pull?: number;
    order?: number;
}
export interface ColProps extends HTMLProps<HTMLDivElement> {
    span?: number;
    offset?: number;
    push?: number;
    pull?: number;
    order?: number;
    xs?: number | ResponseProps;
    sm?: number | ResponseProps;
    md?: number | ResponseProps;
    lg?: number | ResponseProps;
    xl?: number | ResponseProps;
    xxl?: number | ResponseProps;
}
declare const Col: React.FC<ColProps>;
export default Col;
