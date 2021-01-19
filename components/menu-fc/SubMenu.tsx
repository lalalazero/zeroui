import React from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-submenu'

export const PADDING_BASE = 14

const SubMenu: React.FC<any> = (props) => {
    const isHighlighted = false

    const itemsVisible = true

    const { indentLevel, type, className, title } = props

    const paddingLeftStyle =
        type === 'inline'
            ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
            : { paddingLeft: `${PADDING_BASE}px` }

    const classes = classname(className, PREFIX, `${PREFIX}-${type}`)

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
                    {title}
                    <span>
                        <Icon name="down"></Icon>
                    </span>
                </p>
                <div
                    className={classname(PREFIX + '-popup-wrapper')}
                    data-visible={itemsVisible}
                >
                    {itemsVisible &&
                        React.Children.map(props.children, (child: any) =>
                            React.cloneElement(child, {
                                indentLevel,
                                type,
                            })
                        )}
                </div>
            </ul>
        </li>
    )
}

export default SubMenu
