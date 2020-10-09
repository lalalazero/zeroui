import React, { Component, HTMLAttributes } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { modeType } from './Menu'
// import MenuContext from './MenuContext'
import { PADDING_BASE } from './utils'

const scopedClassName = scopedClassMaker('zeroUI-menu-item')
const sc = scopedClassName

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    itemKey?: React.Key
    indentLevel?: number
    mode?: modeType
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

    onClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        // changeKey(this.props.itemKey)
        console.log('click event', event)
    }

    render() {
        const { className, itemKey, indentLevel, mode, ...rest } = this.props
        const selectedKey = ''
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

// const mapState = (state: any) => state

// const connected = connect(mapState)(MenuItem)

// export default connected
