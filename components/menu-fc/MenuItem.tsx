import React, { useMemo } from 'react'
import { CommonMenuProps } from '../menu-fc'
import { classname } from '../_util/classes'
import { PADDING_BASE } from './SubMenu'

const PREFIX = 'zeroUI-menu-item'

export interface MenuItemProps {
    key?: React.Key
    className?: string
}

type MenuItemInnerProps = CommonMenuProps & MenuItemProps

const MenuItem: React.FC<MenuItemInnerProps> = (props) => {
    const { indentLevel, type, className, generateKey } = props

    const itemKey = generateKey

    const paddingLeftStyle = useMemo(() => {
        if (type === 'inline') {
            return {
                paddingLeft: `${(indentLevel as number) * PADDING_BASE}px`,
            }
        }

        if (type === 'vertical') {
            return { paddingLeft: `${PADDING_BASE}px` }
        }

        return { paddingLeft: PADDING_BASE, paddingRight: PADDING_BASE }
    }, [type])

    const classes = classname(className, PREFIX, {
        [`${PREFIX}-selected`]: false, // selectedKey === itemKey,
    })
    return (
        <li className={classes} style={paddingLeftStyle} data-key={itemKey}>
            {props.children}
            <span style={{ marginLeft: 20 }}>{itemKey}</span>
        </li>
    )
}

export default MenuItem
