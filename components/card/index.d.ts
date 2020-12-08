import React, { HTMLAttributes, ReactNode } from 'react';
import './style.scss';
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'size'> {
    title?: ReactNode;
    size?: 'small';
    bordered?: boolean;
    hoverable?: boolean;
}
export interface CardGridProps {
    hoverable?: boolean;
    style?: React.CSSProperties;
}
declare const Grid: React.FC<CardGridProps>;
export interface CardInterface extends React.FC<CardProps> {
    Grid: typeof Grid;
}
declare const Card: CardInterface;
export default Card;
