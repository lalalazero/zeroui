import React from 'react'
import { classname } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import './style.scss'
import SubMenu from './SubMenu'

const PREFIX = 'zeroUI-menu'

export interface MenuProps {
    type?: 'inline' | 'vertical' | 'horizontal' | 'ceilinged'
    className?: string
}

export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu
    MenuItem: typeof MenuItem
    MenuGroup: typeof MenuGroup
}

const Menu: MenuInterface = (props) => {
    const { className, type } = props
    const indentLevel = 1
    const classes = classname(className, PREFIX, `${PREFIX}-${type}`)

    return (
        <ul className={classname(classes)}>
            {React.Children.map(props.children, (child: any) =>
                React.cloneElement(child, {
                    indentLevel,
                    type: props.type,
                })
            )}
        </ul>
    )
}

Menu.SubMenu = SubMenu
Menu.MenuItem = MenuItem
Menu.MenuGroup = MenuGroup

Menu.defaultProps = {
    type: 'inline',
}

export default Menu
