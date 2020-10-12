import React, { Component, HTMLAttributes } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
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
    selectedKeys: string[]
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
    private indentLevel = 1
    itemKeys: any[] = []
    constructor(props: MenuProps) {
        super(props)
        this.state = {
            selectedKey: '',
            selectedKeys: [],
        }
    }

    componentDidMount() {
        collectItemKeys(this.props.children, this.itemKeys)
        console.log(this.itemKeys)
    }

    addItemKey = (key: any) => {
        this.itemKeys.push(key)
    }

    changeKey = (newKey: string, keyPath: string[]) => {
        console.log('change key', newKey)
        this.setState({
            selectedKey: newKey,
            selectedKeys: keyPath,
        })
    }

    render() {
        const { className, mode, ...rest } = this.props
        const { indentLevel } = this
        const { selectedKey, selectedKeys } = this.state
        const clsSwitch = makeClassSwitchs({
            mode,
        })
        return (
            <ul className={sc(clsSwitch, className)} {...rest}>
                {renderChildren(this.props.children, {
                    indentLevel,
                    mode,
                    changeKey: this.changeKey,
                    selectedKey,
                    selectedKeys,
                })}
            </ul>
        )
    }
}

export default Menu
