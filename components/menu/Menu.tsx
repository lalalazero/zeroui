import React, { Component, HTMLAttributes } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { create, Provider, Store } from '../_util/mini-store'
import './Menu.scss'
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
    // static contextType = MenuContext
    static MenuGroup = MenuGroup
    static MenuItem = MenuItem
    static SubMenu = SubMenu
    static defaultProps = {
        mode: 'inline',
    }
    store: Store
    private indentLevel = 1
    constructor(props: MenuProps) {
        super(props)
        this.state = {
            selectedKey: '',
        }
        this.store = create({ selectedKey: [], allKeys: [] })
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
        const { indentLevel } = this
        const clsSwitch = makeClassSwitchs({
            mode,
        })
        return (
            <Provider store={this.store}>
                <ul className={sc(clsSwitch, className)} {...rest}>
                    {renderChildren(this.props.children, { indentLevel, mode })}
                </ul>
            </Provider>
        )
    }
}

export default Menu
