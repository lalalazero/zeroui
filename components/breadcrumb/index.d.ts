import React from 'react';
import './style.scss';
export interface BreadcrumbItemProps {
    href?: string;
    seperator?: string;
}
declare const Item: React.FC<BreadcrumbItemProps>;
export interface BreadcrumbInterface extends React.FC<any> {
    Item: typeof Item;
    seperator?: string;
}
declare const Breadcrumb: BreadcrumbInterface;
export default Breadcrumb;
