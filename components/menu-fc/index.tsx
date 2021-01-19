import React from 'react'
import { classname } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

const PREFIX = 'zeroUI-menu'

export interface MenuProps {
    SubMenu: typeof SubMenu
    MenuItem: typeof MenuItem
    MenuGroup: typeof MenuGroup
}

const Menu: React.FC<MenuProps> = (props) => {
    return <div className={classname(PREFIX)}>{props.children}</div>
}

Menu.defaultProps = {
    SubMenu,
    MenuItem,
    MenuGroup,
}

export default Menu
