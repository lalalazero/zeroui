import React, { Component, HTMLAttributes, Children, ReactElement, cloneElement } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import MenuContext, { defaultContextValue, MenuContextProps, allKeys } from './MenuContext'
import { collectItemKeys, renderChildren } from './utils'
import './Menu.scss'

export interface MenuProps extends HTMLAttributes<HTMLElement> {
}

export interface MenuState {
    selectedKey: string

}
const scopedClassName = scopedClassMaker('zeroUI-menu')
const sc = scopedClassName

class Menu extends Component<MenuProps, MenuState> {
    static contextType = MenuContext
    static MenuGroup = MenuGroup
    static MenuItem = MenuItem
    static SubMenu = SubMenu
    private indentLevel = 1
    constructor(props: MenuProps) {
        super(props)
        this.state = {
            selectedKey: '',
        }
    }

    componentDidMount() {
        collectItemKeys(this.props.children)
    }

    changeKey = (newKey: string) => {
        this.setState({
            selectedKey: newKey
        })
    }

    render() {
        const { className, ...rest } = this.props
        const { selectedKey } = this.state
        const { indentLevel } = this
        const contextValue = { selectedKey, allKeys, changeKey: this.changeKey }
        return (
            <MenuContext.Provider value={contextValue}>
                <ul className={sc('', className)} {...rest}>
                    {
                        renderChildren(this.props.children, { indentLevel })
                    }
                </ul>
            </MenuContext.Provider>
        )

    }
}

export default Menu