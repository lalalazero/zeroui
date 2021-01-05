import React from 'react';
import './style.scss';
declare const Item: React.FC<any>;
export interface BreadcrumbInterface extends React.FC<any> {
    Item: typeof Item;
}
declare const Breadcrumb: BreadcrumbInterface;
export default Breadcrumb;
