import React, { Component, HTMLAttributes } from 'react'
import { Icon } from '../index'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { extraProps } from './MenuGroup'
import { PADDING_BASE, renderChildren } from './utils'

interface InternalMenuProps extends SubMenuProps {
    extraProps: extraProps
    itemKey: string
}
interface InternalMenuState {
    itemsVisible: boolean
    isHighlighted: boolean
}
const scopedClassName = scopedClassMaker('zeroUI-submenu')
const sc = scopedClassName

export class SubMenuInternal extends Component<
    InternalMenuProps,
    InternalMenuState
> {
    static isSubMenuInternal = true
    // private subItemKeys: string[] = []
    private timerId: any = null
    constructor(props: InternalMenuProps) {
        super(props)
        this.state = {
            itemsVisible: false,
            isHighlighted: false,
        }
    }
    static getDerivedStateFromProps(
        props: InternalMenuProps
        // state: InternalMenuState
    ): Partial<InternalMenuState> {
        const { itemKey, extraProps = {} } = props
        const { selectedKeys = [] } = extraProps as extraProps
        const isHighlighted = !!selectedKeys.find(
            (key: string) => key === itemKey
        )
        return {
            isHighlighted,
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
    // componentDidMount() {
    //     loopChildren(this.props.children, (itemKey: string) => {
    //         this.subItemKeys.push(itemKey)
    //     })
    // }
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
    changeKey = (key: string, keyPath: string[]) => {
        keyPath.push(this.props.itemKey as string)
        this.props.extraProps.changeKey(key, keyPath)
    }
    render() {
        const {
            className,
            title,
            extraProps = {},
            itemKey,
            ...rest
        } = this.props
        const { indentLevel, mode } = extraProps as extraProps
        const { itemsVisible, isHighlighted } = this.state
        const paddingLeftStyle =
            mode === 'inline'
                ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
                : { paddingLeft: `${PADDING_BASE}px` }
        const clsObj = makeClassSwitchs({
            // 'sub-item-selected': {
            //     useKey: this.subItemKeys.indexOf(selectedKey) >= 0,
            // },
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
                    item-key={itemKey}
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
                            renderChildren(
                                itemKey as string,
                                this.props.children,
                                {
                                    ...extraProps,
                                    indentLevel: (indentLevel as number) + 1,
                                    changeKey: this.changeKey,
                                } as extraProps
                            )}
                    </div>
                </ul>
            </li>
        )
    }
}
export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string
}
class SubMenu extends Component<SubMenuProps> {
    static isSubMenu = true
    constructor(props: SubMenuProps) {
        super(props)
    }
    render() {
        return (
            <SubMenuInternal {...(this.props as InternalMenuProps)}>
                {this.props.children}
            </SubMenuInternal>
        )
    }
}
export default SubMenu
