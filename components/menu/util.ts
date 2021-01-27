import React, { ReactNode } from 'react'
import { CommonMenuProps } from '.'

export const renderMenu = (
    children: ReactNode,
    props: Partial<CommonMenuProps>
): ReactNode[] => {
    return React.Children.map(children, (child: any, idx) => {
        const { generateKey, ...rest } = props
        return React.cloneElement(child, {
            key: child.key,
            generateKey: child.key || `${generateKey}-${idx}`,
            ...rest,
        })
    })
}

export const collectMenuKeys = (
    menuChildren: ReactNode,
    prefix = 'root'
): string[] => {
    const keys: string[] = []

    const loopChildrenKeys = (children: ReactNode, prefix: string) => {
        React.Children.map(children, (child: any, idx) => {
            if (child && child.type) {
                const generateKey = child.key || `${prefix}-${idx}`

                const name = child.type.displayName || child.type.name

                if (['MenuItem', 'SubMenu'].indexOf(name) >= 0) {
                    keys.push(generateKey)
                }

                if (['SubMenu', 'MenuGroup'].indexOf(name) >= 0) {
                    loopChildrenKeys(child.props.children, generateKey)
                }
            }
        })
    }

    loopChildrenKeys(menuChildren, prefix)

    return Array.from(new Set(keys))
}
