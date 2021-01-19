import React, { useMemo } from 'react'
import { CommonMenuProps } from '.'
import { classname } from '../_util/classes'
import { renderMenu } from './util'

const PREFIX = 'zeroUI-menu-group'

export const PADDING_BASE_GROUP = 8

export interface MenuGroupProps {
    title?: string
}

type MenuGroupInnerProps = CommonMenuProps & MenuGroupProps

const MenuGroup: React.FC<MenuGroupInnerProps> = (props) => {
    const { indentLevel, type, title, generateKey } = props

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
                {renderMenu(props.children, {
                    indentLevel,
                    type,
                    generateKey,
                })}
            </div>
        </div>
    )
}

export default MenuGroup
