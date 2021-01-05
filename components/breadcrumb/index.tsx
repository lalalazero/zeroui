import React, { cloneElement } from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-breadcrumb'

export interface BreadcrumbItemProps {
    href?: string
    seperator?: string
}

const Item: React.FC<BreadcrumbItemProps> = (props) => {
    const { href, seperator } = props
    return (
        <div className={classname(PREFIX)}>
            {href ? <a href={href}>{props.children}</a> : props.children}
            <span className={classname(`${PREFIX}-seperator`)}>
                {seperator || '/'}
            </span>
        </div>
    )
}

export interface BreadcrumbInterface extends React.FC<any> {
    Item: typeof Item
    seperator?: string
}
const Breadcrumb: BreadcrumbInterface = (props) => {
    return (
        <div className={classname(`${PREFIX}-wrapper`)}>
            {React.Children.map(props.children, (child) =>
                cloneElement(child, {
                    seperator: child.props.seperator || props.seperator,
                })
            )}
        </div>
    )
}

Breadcrumb.Item = Item

export default Breadcrumb
