import React, { Component, HTMLAttributes } from 'react'
import { classname } from '../_util/classes'
import { modeType } from './Menu'
import { PADDING_BASE_GROUP, renderChildren } from './utils'

const PREFIX = 'zeroUI-menu-group'

export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
    title: string
    extraProps?: extraProps
    itemKey?: string
}

export interface extraProps {
    indentLevel?: number
    mode?: modeType
    changeKey: (key: string, keyPath: string[]) => void
    selectedKey: string
    selectedKeys: string[]
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
        const {
            className,
            title,
            itemKey,
            extraProps: extraProps = {},
            ...rest
        } = this.props
        const { indentLevel, mode } = extraProps as extraProps

        const paddingLeftStyle =
            mode === 'inline'
                ? {
                      paddingLeft: `${
                          (indentLevel as number) * PADDING_BASE_GROUP
                      }px`,
                  }
                : { paddingLeft: `${PADDING_BASE_GROUP}px` }
        return (
            <div
                className={classname(className, PREFIX)}
                {...rest}
                item-key={itemKey}
            >
                <p
                    className={classname(PREFIX + '-label')}
                    style={paddingLeftStyle}
                >
                    {title}
                </p>
                <div className={classname(PREFIX + '-item-wrapper')}>
                    {renderChildren(
                        itemKey as string,
                        this.props.children,
                        extraProps as extraProps
                    )}
                </div>
            </div>
        )
    }
}
