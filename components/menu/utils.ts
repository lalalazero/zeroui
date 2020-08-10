import { cloneElement, ReactElement, ReactNode, Children } from 'react'
import MenuItem from './MenuItem'
import { addItemKey } from './MenuContext'
import MenuGroup from './MenuGroup'
import SubMenu from './SubMenu'

export const PADDING_BASE = 14
export const PADDING_BASE_GROUP = 8

export const collectItemKeys = (children: ReactNode) => {
    loopChildren(children, addItemKey)
}


export const renderChildren = (children: ReactNode, extraProps: any) => {
    return Children.map(children, (child: ReactElement) => {
        if (child.type && (child.type as typeof MenuItem).isMenuItem) {
            return cloneElement(child, { itemKey: child.key, ...extraProps })
        }
        // if (child.type && (child.type as typeof SubMenu).isSubMenu) {
        //     return cloneElement(child, extraProps)
        // }
        return cloneElement(child, extraProps)
    })
}

export const loopChildren = (children: ReactNode, cb: any) => {
    Children.map(children, (child: ReactElement, i: number) => {
        if (child && child.type) {
            let tmp1 = child.type as typeof MenuItem
            if (tmp1.isMenuItem) {
                cb(child.key)
            }
            let tmp2 = child.type as typeof MenuGroup
            if (tmp2.isMenuGroup) {
                loopChildren(child.props.children, cb)
            }

            let tmp3 = child.type as typeof SubMenu
            if (tmp3.isSubMenu) {
                loopChildren(child.props.children, cb)
            }
        }
    })
}

export const detectIndent = (children: ReactNode, level: number) => {
    const loop = (children: ReactNode, level: number) => {
        let x = level
        Children.forEach(children, (child: ReactElement) => {
            if (child && child.type) {
                let tmp3 = child.type as typeof SubMenu
                if (tmp3.isSubMenu) {
                    x = loop(child.props.children, x + 1)
                }

            }
        })
        return x
    }
    return loop(children, level)
}