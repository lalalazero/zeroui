import React, { Component, HTMLAttributes, Children, ReactElement, createElement, cloneElement } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import { Icon } from '../index'
import { renderChildren, loopChildren } from './utils'
import MenuContext from './MenuContext'

export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string,
}
export interface SubMenuState {
    itemsVisible: boolean
}
const scopedClassName = scopedClassMaker('zeroUI-submenu')
const sc = scopedClassName

class SubMenu extends Component<SubMenuProps, SubMenuState> {
    static isSubMenu = true
    private subItemKeys: string[] = []
    constructor(props: SubMenuProps) {
        super(props)
        this.state = {
            itemsVisible: false
        }
    }
    toggle = () => {
        this.setState({
            itemsVisible: !this.state.itemsVisible
        })
    }
    componentDidMount() {
        loopChildren(this.props.children, (itemKey: string) => {
            this.subItemKeys.push(itemKey)
        })
    }
    render() {
        const { className, title, ...rest } = this.props
        const { itemsVisible } = this.state
        return <MenuContext.Consumer>
            {
                ({ selectedKey }) => {
                    const clsObj = makeClassSwitchs({
                        'sub-item-selected': {
                            useKey: this.subItemKeys.indexOf(selectedKey) >= 0
                        }
                    })
                    return <ul className={sc(clsObj, className)} {...rest}>
                        <p className={sc('label')}
                            onClick={this.toggle} data-visible={itemsVisible} >{title}<span><Icon
                                name="down"></Icon></span></p>

                        {itemsVisible && renderChildren(this.props.children)}
                    </ul>
                }
            }
        </MenuContext.Consumer>

    }
}

export default SubMenu