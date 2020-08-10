import React, { Component, HTMLAttributes, ReactElement } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuContext from './MenuContext'

const scopedClassName = scopedClassMaker('zeroUI-menu-item')
const sc = scopedClassName

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    itemKey?: string | number
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
        console.log('onClick...')
    }

    render() {
        const { className, itemKey,  ...rest } = this.props
        console.log('itemKey: ', itemKey)
        return <MenuContext.Consumer>
            {
                ({ selectedKey, changeKey, allKeys }) => {
                    console.log('allKeys', allKeys)
                    const clsObj = makeClassSwitchs({
                        'selected': {
                            useKey: false
                        }
                    })
                    const mergedClsName = sc(clsObj, className)
                    return <li className={mergedClsName} {...rest}
                            onClick={(event) => this.onClick(event, changeKey)}>
                        {this.props.children}
                    </li>
                }
            }

        </MenuContext.Consumer>

    }
}