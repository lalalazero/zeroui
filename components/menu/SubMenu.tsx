import React, { Component, HTMLAttributes, Children, ReactElement, createElement, cloneElement } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import { Icon } from '../index'
import { renderChildren } from './utils'

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
    render() {
        const { className, title, ...rest } = this.props
        const { itemsVisible } = this.state
        return <ul className={sc('', className)} {...rest}>
            <p className={sc('label')}
                onClick={this.toggle} data-visible={itemsVisible} >{title}<span><Icon
                    name="down"></Icon></span></p>

            {itemsVisible && renderChildren(this.props.children)}
        </ul>
    }
}

export default SubMenu