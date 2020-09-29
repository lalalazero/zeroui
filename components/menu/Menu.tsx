import React, { Component, HTMLAttributes } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './Menu.scss'
import MenuContext, { allKeys } from './MenuContext'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { collectItemKeys, renderChildren } from './utils'

export interface MenuProps extends HTMLAttributes<HTMLElement> {
    mode: modeType
}

export type modeType = 'inline' | 'vertical' | 'horizontal'

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
    static defaultProps = {
        mode: 'inline',
    }
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
            selectedKey: newKey,
        })
    }

    render() {
        const { className, mode, ...rest } = this.props
        const { selectedKey } = this.state
        const { indentLevel } = this
        const clsSwitch = makeClassSwitchs({
            mode,
        })
        const contextValue = { selectedKey, allKeys, changeKey: this.changeKey }
        return (
            <MenuContext.Provider value={contextValue}>
                <ul className={sc(clsSwitch, className)} {...rest}>
                    {renderChildren(this.props.children, { indentLevel, mode })}
                </ul>
            </MenuContext.Provider>
        )
    }
}

export default Menu
