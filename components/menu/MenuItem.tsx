import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'

const scopedClassName = scopedClassMaker('zeroUI-menu-item')
const sc = scopedClassName

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {

}

export default class MenuItem extends Component<MenuItemProps> {
    constructor(props: MenuItemProps) {
        super(props)
    }

    render() {
        const { className, ...rest } = this.props
        return <li className={sc('', className)} {...rest}>
            {this.props.children}
        </li>
    }
}