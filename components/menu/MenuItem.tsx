import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import MenuContext from './MenuContext'

const scopedClassName = scopedClassMaker('zeroUI-menu-item')
const sc = scopedClassName

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
}

export interface MenuItemState {
    isSelectedKey: boolean,
}

export default class MenuItem extends Component<MenuItemProps, MenuItemState> {
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
        const { className, ...rest } = this.props
        return <MenuContext.Consumer>
            {
                ({ selectedKey, changeKey }) => {
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