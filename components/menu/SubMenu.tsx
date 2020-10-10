import React, { Component, HTMLAttributes } from 'react'
import { Icon } from '../index'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { extraProps } from './MenuGroup'
import { loopChildren, PADDING_BASE, renderChildren } from './utils'

export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string
    extraProps?: extraProps
}
export interface SubMenuState {
    itemsVisible: boolean
}
const scopedClassName = scopedClassMaker('zeroUI-submenu')
const sc = scopedClassName

class SubMenu extends Component<SubMenuProps, SubMenuState> {
    static isSubMenu = true
    private subItemKeys: string[] = []
    private timerId: any = null
    constructor(props: SubMenuProps) {
        super(props)
        this.state = {
            itemsVisible: false,
        }
    }
    toggle = () => {
        const { extraProps = {} } = this.props
        const { mode } = extraProps as extraProps
        if (mode !== 'inline') {
            return
        }
        this.setState({
            itemsVisible: !this.state.itemsVisible,
        })
    }

    open = () => {
        this.setState({
            itemsVisible: true,
        })
    }
    close = () => {
        this.setState({
            itemsVisible: false,
        })
    }
    componentDidMount() {
        loopChildren(this.props.children, (itemKey: string) => {
            this.subItemKeys.push(itemKey)
        })
    }
    onMouseEnter = () => {
        const { extraProps = {} } = this.props
        const { mode } = extraProps as extraProps
        if (mode === 'inline') {
            return
        }
        if (this.timerId) {
            clearTimeout(this.timerId)
        }
        this.open()
    }
    onMouseLeave = () => {
        const { extraProps = {} } = this.props
        const { mode } = extraProps as extraProps
        if (mode === 'inline') {
            return
        }
        if (this.timerId) {
            clearTimeout(this.timerId)
        }
        this.timerId = setTimeout(() => {
            this.close()
        }, 100)
    }
    render() {
        const { className, title, extraProps = {}, ...rest } = this.props
        const { indentLevel, mode, selectedKey } = extraProps as extraProps
        const { itemsVisible } = this.state
        console.log(title, this.subItemKeys)
        const isHighlighted = !!this.subItemKeys.find(
            (item) => item === selectedKey
        )
        const paddingLeftStyle =
            mode === 'inline'
                ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
                : { paddingLeft: `${PADDING_BASE}px` }
        const clsObj = makeClassSwitchs({
            'sub-item-selected': {
                useKey: this.subItemKeys.indexOf(selectedKey) >= 0,
            },
            mode,
        })
        return (
            <li
                onMouseLeave={this.onMouseLeave}
                onMouseEnter={this.onMouseEnter}
            >
                <ul
                    className={sc(clsObj, className)}
                    is-highlighted={isHighlighted ? 'yes' : 'no'}
                    {...rest}
                    onMouseEnter={this.onMouseEnter}
                >
                    <p
                        className={sc('label')}
                        style={paddingLeftStyle}
                        onClick={this.toggle}
                        data-visible={itemsVisible}
                    >
                        {title}
                        <span>
                            <Icon name="down"></Icon>
                        </span>
                    </p>
                    <div
                        className={sc('popup-wrapper')}
                        data-visible={itemsVisible}
                    >
                        {itemsVisible &&
                            renderChildren(this.props.children, {
                                ...extraProps,
                                indentLevel: (indentLevel as number) + 1,
                            } as extraProps)}
                    </div>
                </ul>
            </li>
        )
    }
}
export default SubMenu
