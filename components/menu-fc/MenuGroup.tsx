import React, { useMemo } from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-menu-group'

export const PADDING_BASE_GROUP = 8

const MenuGroup: React.FC<any> = (props) => {
    const { indentLevel, type, title } = props

    const paddingLeftStyle = useMemo(() => {
        if (type === 'inline') {
            return {
                paddingLeft: `${
                    (indentLevel as number) * PADDING_BASE_GROUP
                }px`,
            }
        }

        return { paddingLeft: `${PADDING_BASE_GROUP}px` }
    }, [type])

    return (
        <div className={classname(PREFIX)}>
            <p
                className={classname(PREFIX + '-label')}
                style={paddingLeftStyle}
            >
                {title}
            </p>
            <div className={classname(PREFIX + '-item-wrapper')}>
                {props.children}
            </div>
        </div>
    )
}

export default MenuGroup
