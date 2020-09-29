import React, { Component, HTMLAttributes } from 'react'
import { scopedClassMaker } from '../_util/classes'
import { modeType } from './Menu'
import { PADDING_BASE_GROUP, renderChildren } from './utils'

const scopedClassName = scopedClassMaker('zeroUI-menu-group')
const sc = scopedClassName

export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string
    indentLevel?: number
    mode?: modeType
}

export interface MenuGroupState {
    // subItemVisible: boolean
    [key: string]: any
}

export default class MenuGroup extends Component<
    MenuGroupProps,
    MenuGroupState
> {
    static isMenuGroup = true
    constructor(props: MenuGroupProps) {
        super(props)
        this.state = {
            // subItemVisible: false
        }
    }

    render() {
        const { className, title, indentLevel, mode, ...rest } = this.props
        const paddingLeftStyle =
            mode === 'inline'
                ? {
                    paddingLeft: `${
                        (indentLevel as number) * PADDING_BASE_GROUP
                    }px`,
                }
                : { paddingLeft: `${PADDING_BASE_GROUP}px` }
        return (
            <div className={sc('', className)} {...rest}>
                <p className={sc('label')} style={paddingLeftStyle}>
                    {title}
                </p>
                <div className={sc('item-wrapper')}>
                    {renderChildren(this.props.children, { indentLevel, mode })}
                </div>
            </div>
        )
    }
}
