import React from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-breadcrumb'

const Item: React.FC<any> = (props) => {
    return (
        <div className={classname(PREFIX)}>
            {props.children}
            <span className={classname(`${PREFIX}-seperator`)}>/</span>
        </div>
    )
}

export interface BreadcrumbInterface extends React.FC<any> {
    Item: typeof Item
}
const Breadcrumb: BreadcrumbInterface = (props) => {
    return (
        <div className={classname(`${PREFIX}-wrapper`)}>{props.children}</div>
    )
}

Breadcrumb.Item = Item

export default Breadcrumb
