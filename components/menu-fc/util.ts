import React, { ReactNode } from 'react'
import { CommonMenuProps } from '.'

export const renderMenu = (
    children: ReactNode,
    props: Partial<CommonMenuProps>
) => {
    return React.Children.map(children, (child: any, idx) => {
        const { indentLevel, type, generateKey } = props
        return React.cloneElement(child, {
            indentLevel,
            type,
            key: child.key,
            generateKey: `${generateKey}-${idx}`,
        })
    })
}

export const collectMenuKeys = (menuChildren: ReactNode, prefix = 'root') => {
    const keys: string[] = []

    const loopChildrenKeys = (children: ReactNode, prefix: string) => {
        React.Children.map(children, (child: any, idx) => {
            if (child && child.type) {
                const generateKey = `${prefix}-${idx}`
                if (['SubMenu', 'MenuItem'].indexOf(child.type.name) >= 0) {
                    keys.push(generateKey)
                }

                if (['SubMenu', 'MenuGroup'].indexOf(child.type.name) >= 0) {
                    loopChildrenKeys(child.props.children, generateKey)
                }
            }
        })
    }

    loopChildrenKeys(menuChildren, prefix)

    return keys
}
