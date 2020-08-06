import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import './Menu.scss'

export interface MenuProps extends HTMLAttributes<HTMLElement> {
}
const scopedClassName = scopedClassMaker('zeroUI-menu')
const sc = scopedClassName

class Menu extends Component<MenuProps> {
    static Group = MenuGroup
    static Item = MenuItem
    constructor(props: MenuProps) {
        super(props)
    }
    render() {
        const { className, ...rest } = this.props
        return <div className={sc('', className)} {...rest}>
            {this.props.children}
        </div>
    }
}

export default Menu