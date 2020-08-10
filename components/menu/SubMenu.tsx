import React, { Component, HTMLAttributes, Children, ReactElement, createElement, cloneElement } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import { Icon } from '../index'
import { renderChildren, loopChildren, detectIndent, PADDING_BASE } from './utils'
import MenuContext from './MenuContext'

export interface SubMenuProps extends HTMLAttributes<HTMLElement> {
    title: string,
    indentLevel?: number,
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

    open = () => {
        this.setState({
            itemsVisible: true
        })
    }
    close = () => {
        this.setState({
            itemsVisible: false
        })
    }
    componentDidMount() {
        loopChildren(this.props.children, (itemKey: string) => {
            this.subItemKeys.push(itemKey)
        })
    }
    onMouseEnter = () => {
        this.open()
    }
    onMouseLeave = () => {
        this.close()
    }
    render() {
        const { className, title, indentLevel, ...rest } = this.props
        const { itemsVisible } = this.state
        return <MenuContext.Consumer>
            {
                ({ selectedKey }) => {
                    const clsObj = makeClassSwitchs({
                        'sub-item-selected': {
                            useKey: this.subItemKeys.indexOf(selectedKey) >= 0
                        }
                    })
                    return <li
                        onMouseLeave={this.onMouseLeave}
                        onMouseEnter={this.onMouseEnter}>
                        <ul className={sc(clsObj, className)} {...rest}>
                            <p className={sc('label')}
                                style={{ paddingLeft: `${indentLevel as number * PADDING_BASE}px` }}
                                onClick={this.toggle} data-visible={itemsVisible} >{title}<span><Icon
                                    name="down"></Icon></span></p>
                            <div className={sc('popup-wrapper')}>
                                {itemsVisible && renderChildren(this.props.children, { indentLevel: indentLevel as number + 1 })}
                            </div>


                        </ul>
                    </li>

                }
            }
        </MenuContext.Consumer>

    }
}

export default SubMenu