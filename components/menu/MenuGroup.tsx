import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'

const scopedClassName = scopedClassMaker('zeroUI-menu-group')
const sc = scopedClassName

export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string
}

export interface MenuGroupState {
    // subItemVisible: boolean
}

export default class MenuGroup extends Component<MenuGroupProps, MenuGroupState> {
    constructor(props: MenuGroupProps) {
        super(props)
        this.state = {
            // subItemVisible: false
        }
    }

    render() {
        const { className, title, ...rest } = this.props
        // const { subItemVisible } = this.state
        return <div className={sc('', className)} {...rest}>
            <p className={sc('label')}>{title}</p>
            <div className={sc('item-wrapper')}>
                {this.props.children}
            </div>
        </div>
    }
}
