import React, { Component, HTMLAttributes } from 'react'
import { Icon } from '../index'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { modeType } from './Menu'
// import MenuContext from './MenuContext'
import { loopChildren, PADDING_BASE, renderChildren } from './utils'

export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string
    indentLevel?: number
    mode?: modeType
}
export interface SubMenuState {
    itemsVisible: boolean
}
const scopedClassName = scopedClassMaker('zeroUI-submenu')
const sc = scopedClassName

class SubMenu extends Component<SubMenuProps, SubMenuState> {
    static isSubMenu = true
    private subItemKeys: string[] = []
    private indentLevel = 0
    private timerId: any = null
    constructor(props: SubMenuProps) {
        super(props)
        this.state = {
            itemsVisible: false,
        }
    }
    toggle = () => {
        if (this.props.mode !== 'inline') {
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
        if (this.props.mode === 'inline') {
            return
        }
        if (this.timerId) {
            clearTimeout(this.timerId)
        }
        this.open()
    }
    onMouseLeave = () => {
        if (this.props.mode === 'inline') {
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
        const { className, title, indentLevel, mode, ...rest } = this.props
        const { itemsVisible } = this.state
        const paddingLeftStyle =
            mode === 'inline'
                ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
                : { paddingLeft: `${PADDING_BASE}px` }
        const selectedKey = ''
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
                                indentLevel: (indentLevel as number) + 1,
                                mode,
                            })}
                    </div>
                </ul>
            </li>
        )
    }
}
export default SubMenu
// const mapState = (state: any) => state

// const connected = connect(mapState)(SubMenu)

// export default connected
