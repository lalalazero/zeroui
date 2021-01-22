import React, { useEffect, useState } from 'react'
import { classname } from '../_util/classes'
import { createStore, Provider, Store } from '../_util/zero-store'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import './style.scss'
import SubMenu from './SubMenu'
import { renderMenu } from './util'

const PREFIX = 'zeroUI-menu'

export type MenuType = 'inline' | 'vertical' | 'horizontal' | 'ceilinged'

export interface CommonMenuProps {
    indentLevel: number
    type: MenuType
    generateKey: string
    key: React.Key
    onOpenChange?: (openKeys: string[]) => void
    onSelect?: (selectParams: TSelectParam) => void
    multiple: boolean
}

export interface TSelectParam {
    key: string
    keyPath: string[]
    selectedKeys: string[]
}

export interface MenuProps {
    type?: MenuType
    className?: string
    selectedKeys?: string[]
    openKeys?: string[]
    defaultSelectedKeys?: string[]
    defaultOpenKeys?: string[]
    onSelect?: (selectParams: TSelectParam) => void
    onOpenChange?: (openKeys: string[]) => void
    multiple?: boolean
}

export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu
    MenuItem: typeof MenuItem
    MenuGroup: typeof MenuGroup
}

export type MenuStore = {
    openKeys: string[]
    selectedKeys: string[]
}

const Menu: MenuInterface = (props) => {
    const { className, type } = props

    const [stateStore] = useState<Store<MenuStore>>(
        createStore<MenuStore>({
            openKeys: props.defaultOpenKeys || props.openKeys || [],
            selectedKeys: props.defaultSelectedKeys || props.selectedKeys || [],
        })
    )

    useEffect(() => {
        if (props.openKeys) {
            stateStore.setState({ openKeys: props.openKeys })
        }

        if (props.selectedKeys) {
            stateStore.setState({ selectedKeys: props.selectedKeys })
        }
    }, [props.openKeys, props.selectedKeys])

    const classes = classname(className, PREFIX, `${PREFIX}-${type}`)

    // const childrenKeys = collectMenuKeys(props.children)

    return (
        <Provider store={stateStore}>
            <ul className={classname(classes)}>
                {renderMenu(props.children, {
                    indentLevel: 1,
                    type,
                    generateKey: 'root',
                    onOpenChange: props.onOpenChange,
                    onSelect: props.onSelect,
                    multiple: props.multiple,
                })}
            </ul>
        </Provider>
    )
}

Menu.SubMenu = SubMenu
Menu.MenuItem = MenuItem
Menu.MenuGroup = MenuGroup

Menu.defaultProps = {
    type: 'inline',
    multiple: false,
}

export default Menu
