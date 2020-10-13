import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import MenuGroup, { extraProps } from './MenuGroup'
import MenuItem from './MenuItem'
import SubMenu, { SubMenuInternal } from './SubMenu'

export const PADDING_BASE = 14
export const PADDING_BASE_GROUP = 8

export const collectItemKeys = (
    children: ReactNode,
    subItemKeys: any[]
): void => {
    Children.map(children, (child: ReactElement) => {
        if (child && child.type) {
            const tmp1 = child.type as typeof MenuItem
            if (tmp1.isMenuItem) {
                subItemKeys.push({ key: child.props.itemKey })
            }
            const tmp2 = child.type as typeof MenuGroup
            if (tmp2.isMenuGroup) {
                const childKeys: any[] = []
                collectItemKeys(child.props.children, childKeys)
                subItemKeys.push({
                    key: child.props.itemKey,
                    children: childKeys,
                })
            }

            const tmp3 = child.type as typeof SubMenuInternal
            if (tmp3.isSubMenuInternal) {
                const childKeys: any[] = []
                collectItemKeys(child.props.children, childKeys)
                subItemKeys.push({
                    key: child.props.itemKey,
                    children: childKeys,
                })
            }
        }
    })
}

function generateItemKey(fatherKey: string, child: ReactElement, idx: number) {
    if (child.type && (child.type as typeof MenuItem).isMenuItem) {
        return child.key || `${fatherKey}-menuItem-${idx}`
    }
    if (
        child.type &&
        (child.type as typeof SubMenuInternal).isSubMenuInternal
    ) {
        return child.key || `${fatherKey}-subMenuInternal-${idx}`
    }
    if (child.type && (child.type as typeof SubMenu).isSubMenu) {
        return child.key || `${fatherKey}-subMenu-${idx}`
    }
    if (child.type && (child.type as typeof MenuGroup).isMenuGroup) {
        return child.key || `${fatherKey}-menuGroup-${idx}`
    }
    return child.key || `unknown-${idx}`
}

export const renderChildren = (
    fatherKey: string,
    children: ReactNode,
    extraProps: extraProps
): any[] => {
    return Children.map(children, (child: ReactElement, idx) => {
        const itemKey = generateItemKey(fatherKey, child, idx)
        return cloneElement(child, {
            itemKey,
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
            if (tmp3.isSubMenuInternal) {
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
                if (tmp3.isSubMenuInternal) {
                    x = loop(child.props.children, x + 1)
                }
            }
        })
        return x
    }
    return loop(children, level)
}
