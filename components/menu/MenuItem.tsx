import React, { Component, HTMLAttributes } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { extraProps } from './MenuGroup'
import { PADDING_BASE } from './utils'

const scopedClassName = scopedClassMaker('zeroUI-menu-item')
const sc = scopedClassName

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    itemKey?: React.Key
    extraProps?: extraProps
}

export interface MenuItemState {
    isSelectedKey: boolean
}

class MenuItem extends Component<MenuItemProps, MenuItemState> {
    static isMenuItem = true
    // static contextType = MenuContext
    constructor(props: MenuItemProps) {
        super(props)
        this.state = {
            isSelectedKey: false,
        }
    }

    onClick = () => {
        const { extraProps = {}, itemKey } = this.props
        const { changeKey } = extraProps as extraProps
        changeKey && changeKey(itemKey as string, [itemKey as string])
    }

    render() {
        const { className, itemKey, extraProps = {}, ...rest } = this.props
        const { indentLevel, mode, selectedKey } = extraProps as extraProps
        const paddingLeftStyle =
            mode === 'inline'
                ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
                : { paddingLeft: `${PADDING_BASE}px` }
        const clsObj = makeClassSwitchs({
            selected: {
                useKey: selectedKey === itemKey,
            },
        })
        const mergedClsName = sc(clsObj, className)
        return (
            <li
                className={mergedClsName}
                {...rest}
                style={paddingLeftStyle}
                onClick={this.onClick}
            >
                {this.props.children}
            </li>
        )
    }
}
export default MenuItem
