import React from 'react'
import { classname } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import './style.scss'
import SubMenu from './SubMenu'
import { collectMenuKeys, renderMenu } from './util'

const PREFIX = 'zeroUI-menu'

export type MenuType = 'inline' | 'vertical' | 'horizontal' | 'ceilinged'

export interface CommonMenuProps {
    indentLevel: number
    type: MenuType
    generateKey: string
    key: React.Key
}

export interface MenuProps {
    type?: MenuType
    className?: string
}

export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu
    MenuItem: typeof MenuItem
    MenuGroup: typeof MenuGroup
}

const Menu: MenuInterface = (props) => {
    const { className, type } = props

    const classes = classname(className, PREFIX, `${PREFIX}-${type}`)

    const childrenKeys = collectMenuKeys(props.children)

    console.log('root childrenKeys..', childrenKeys)

    return (
        <ul className={classname(classes)}>
            {renderMenu(props.children, {
                indentLevel: 1,
                type,
                generateKey: 'root',
            })}
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
