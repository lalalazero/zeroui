import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import MenuGroup, { extraProps } from './MenuGroup'
import MenuItem from './MenuItem'
import { SubMenuInternal } from './SubMenu'

export const PADDING_BASE = 14
export const PADDING_BASE_GROUP = 8

export const collectItemKeys = (
    children: ReactNode,
    subItemKeys: any[]
): void => {
    Children.map(children, (child: ReactElement, idx) => {
        if (child && child.type) {
            const tmp1 = child.type as typeof MenuItem
            if (tmp1.isMenuItem) {
                subItemKeys.push({ key: child.key })
            }
            const tmp2 = child.type as typeof MenuGroup
            if (tmp2.isMenuGroup) {
                const childKeys: any[] = []
                collectItemKeys(child.props.children, childKeys)
                subItemKeys.push({
                    key: child.key || `menuGroup-${idx}`,
                    children: childKeys,
                })
            }

            const tmp3 = child.type as typeof SubMenuInternal
            if (tmp3.isSubMenu) {
                const childKeys: any[] = []
                collectItemKeys(child.props.children, childKeys)
                subItemKeys.push({
                    key: child.key || `subMenu-${idx}`,
                    children: childKeys,
                })
            }
        }
    })
}

export const renderChildren = (
    children: ReactNode,
    extraProps: extraProps
): any[] => {
    return Children.map(children, (child: ReactElement, idx) => {
        if (child.type && (child.type as typeof MenuItem).isMenuItem) {
            return cloneElement(child, { itemKey: child.key, extraProps })
        }
        if (child.type && (child.type as typeof SubMenuInternal).isSubMenu) {
            return cloneElement(child, {
                itemKey: child.key || `subMenu-${idx}`,
                extraProps,
            })
        }

        if (child.type && (child.type as typeof MenuGroup).isMenuGroup) {
            return cloneElement(child, {
                itemKey: child.key || `menuGroup-${idx}`,
                extraProps,
            })
        }

        return cloneElement(child, {
            itemKey: child.key || `unknown-${idx}`,
            extraProps,
        })
    })
}

export const loopChildren = (children: ReactNode, cb: any) => {
    Children.map(children, (child: ReactElement) => {
        if (child && child.type) {
            const tmp1 = child.type as typeof MenuItem
            if (tmp1.isMenuItem) {
                cb(child.key)
            }
            const tmp2 = child.type as typeof MenuGroup
            if (tmp2.isMenuGroup) {
                loopChildren(child.props.children, cb)
            }

            const tmp3 = child.type as typeof SubMenuInternal
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
                const tmp3 = child.type as typeof SubMenuInternal
                if (tmp3.isSubMenu) {
                    x = loop(child.props.children, x + 1)
                }
            }
        })
        return x
    }
    return loop(children, level)
}
