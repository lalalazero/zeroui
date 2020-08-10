import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import { renderChildren, PADDING_BASE, PADDING_BASE_GROUP } from './utils'

const scopedClassName = scopedClassMaker('zeroUI-menu-group')
const sc = scopedClassName

export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string,
    indentLevel?: number,
}

export interface MenuGroupState {
    // subItemVisible: boolean
}

export default class MenuGroup extends Component<MenuGroupProps, MenuGroupState> {
    static isMenuGroup = true
    constructor(props: MenuGroupProps) {
        super(props)
        this.state = {
            // subItemVisible: false
        }
    }

    render() {
        const { className, title, indentLevel, ...rest } = this.props
        // const { subItemVisible } = this.state
        return <div className={sc('', className)} {...rest}>
            <p className={sc('label')} style={{ paddingLeft: `${indentLevel as number * PADDING_BASE_GROUP}px` }}>{title}</p>
            <div className={sc('item-wrapper')}>
                {renderChildren(this.props.children, { indentLevel })}
            </div>
        </div>
    }
}
