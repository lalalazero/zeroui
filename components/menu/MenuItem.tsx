import React, { Component, HTMLAttributes, ReactElement } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuContext from './MenuContext'
import { PADDING_BASE } from './utils'

const scopedClassName = scopedClassMaker('zeroUI-menu-item')
const sc = scopedClassName

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    itemKey?: React.Key,
    indentLevel?: number,
}

export interface MenuItemState {
    isSelectedKey: boolean,
}

export default class MenuItem extends Component<MenuItemProps, MenuItemState> {
    static isMenuItem = true
    static contextType = MenuContext
    constructor(props: MenuItemProps) {
        super(props)
        this.state = {
            isSelectedKey: false
        }
    }

    onClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, changeKey: any) => {
        changeKey(this.props.itemKey)
    }

    render() {
        const { className, itemKey, indentLevel, ...rest } = this.props
        return <MenuContext.Consumer>
            {
                ({ selectedKey, changeKey, allKeys }) => {

                    const clsObj = makeClassSwitchs({
                        'selected': {
                            useKey: selectedKey === itemKey
                        }
                    })
                    const mergedClsName = sc(clsObj, className)
                    return <li className={mergedClsName} {...rest}
                        style={{ paddingLeft: `${indentLevel as number * PADDING_BASE}px` }}
                        onClick={(event) => this.onClick(event, changeKey)}>
                        {this.props.children}
                    </li>
                }
            }

        </MenuContext.Consumer>

    }
}