import React from 'react'
import { CommonMenuProps } from '.'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import { collectMenuKeys, renderMenu } from './util'

const PREFIX = 'zeroUI-submenu'

export const PADDING_BASE = 14

export interface SubMenuProps {
    title?: string
    className?: string
}

type SubMenuInnerProps = CommonMenuProps & SubMenuProps

const SubMenu: React.FC<SubMenuInnerProps> = (props) => {
    const isHighlighted = false

    const itemsVisible = false

    const { indentLevel, type, className, title, generateKey } = props

    const itemKey = generateKey

    const paddingLeftStyle =
        type === 'inline'
            ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
            : { paddingLeft: `${PADDING_BASE}px` }

    const classes = classname(className, PREFIX, `${PREFIX}-${type}`)

    const childrenKeys = collectMenuKeys(props.children, generateKey)

    console.log(`${itemKey} childrenKeys..`, childrenKeys)

    return (
        <li>
            <ul
                className={classes}
                is-highlighted={isHighlighted ? 'yes' : 'no'}
            >
                <p
                    className={classname(PREFIX + '-label')}
                    style={paddingLeftStyle}
                    data-visible={itemsVisible}
                >
                    <span>item-key={itemKey}</span>
                    {title}
                    <span>
                        <Icon name="down"></Icon>
                    </span>
                </p>
                <div
                    className={classname(PREFIX + '-popup-wrapper', {
                        [`${PREFIX}-popup-wrapper-hide`]: !itemsVisible,
                    })}
                    data-key={itemKey}
                >
                    {renderMenu(props.children, {
                        indentLevel: indentLevel + 1,
                        type,
                        generateKey,
                    })}
                </div>
            </ul>
        </li>
    )
}

SubMenu

export default SubMenu
