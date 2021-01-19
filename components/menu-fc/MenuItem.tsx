import React, { useMemo } from 'react'
import { classname } from '../_util/classes'
import { PADDING_BASE } from './SubMenu'

const PREFIX = 'zeroUI-menu-item'

const MenuItem: React.FC<any> = (props) => {
    const { indentLevel, type, className } = props

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
        <li className={classes} style={paddingLeftStyle}>
            {props.children}
        </li>
    )
}

export default MenuItem
