import React, { Component, HTMLAttributes, Children } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import MenuContext, { defaultContextValue } from './MenuContext'
import { collectItemKeys } from './utils'
import './Menu.scss'

export interface MenuProps extends HTMLAttributes<HTMLElement> {
}
const scopedClassName = scopedClassMaker('zeroUI-menu')
const sc = scopedClassName

class Menu extends Component<MenuProps> {
    static contextType = MenuContext
    static MenuGroup = MenuGroup
    static MenuItem = MenuItem
    static SubMenu = SubMenu
    constructor(props: MenuProps) {
        super(props)
    }

    componentDidMount(){
        collectItemKeys(this.props.children)
        console.log(this.context.allKeys)
    }
    
    render() {
        const { className, ...rest } = this.props
        return (
            <MenuContext.Provider value={defaultContextValue}>
                <ul className={sc('', className)} {...rest}>
                    {this.props.children}
                </ul>
            </MenuContext.Provider>
        )

    }
}

export default Menu