import React, { ReactNode } from 'react'
import { CommonMenuProps } from '.'

export const renderMenu = (
    children: ReactNode,
    props: Partial<CommonMenuProps>
) => {
    return React.Children.map(children, (child: any, idx) => {
        const { generateKey, ...rest } = props
        return React.cloneElement(child, {
            key: child.key,
            generateKey: child.key || `${generateKey}-${idx}`,
            ...rest,
        })
    })
}

export const collectMenuKeys = (menuChildren: ReactNode, prefix = 'root') => {
    const keys: string[] = []

    const loopChildrenKeys = (children: ReactNode, prefix: string) => {
        React.Children.map(children, (child: any, idx) => {
            if (child && child.type) {
                const generateKey = child.key || `${prefix}-${idx}`

                // TODO fix InnerFC
                if (['InnerFC'].indexOf(child.type.name) >= 0) {
                    keys.push(generateKey)
                }

                if (['InnerFC', 'MenuGroup'].indexOf(child.type.name) >= 0) {
                    loopChildrenKeys(child.props.children, generateKey)
                }
            }
        })
    }

    loopChildrenKeys(menuChildren, prefix)

    return Array.from(new Set(keys))
}
