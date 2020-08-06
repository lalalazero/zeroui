import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import './Menu.scss'

export interface MenuProps extends HTMLAttributes<HTMLElement> {
}
const scopedClassName = scopedClassMaker('zeroUI-menu')
const sc = scopedClassName

class Menu extends Component<MenuProps> {
    static MenuGroup = MenuGroup
    static MenuItem = MenuItem
    static SubMenu = SubMenu
    constructor(props: MenuProps) {
        super(props)
    }
    render() {
        const { className, ...rest } = this.props
        return <ul className={sc('', className)} {...rest}>
            {this.props.children}
        </ul>
    }
}

export default Menu