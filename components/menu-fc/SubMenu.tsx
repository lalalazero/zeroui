import React from 'react'
import { CommonMenuProps, MenuStore, TSelectParam } from '.'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import { connect, ConnectedComponent } from '../_util/zero-store'
import { useChildSelected, useVisible } from './hooks'
import { renderMenu } from './util'

const PREFIX = 'zeroUI-submenu'

export const PADDING_BASE = 14

export interface SubMenuProps {
    title?: string
    className?: string
}

type SubMenuInnerProps = CommonMenuProps & SubMenuProps

const SubMenu: ConnectedComponent<MenuStore, MenuStore, SubMenuInnerProps> = (
    props
) => {
    const {
        indentLevel,
        type,
        className,
        title,
        generateKey,
        store,
        multiple,
        openKeys,
    } = props

    const itemsVisible = useVisible(props)

    const isSelected = useChildSelected(props)

    const togglePopper = () => {
        const newItemVisible = !itemsVisible
        const newOpenKeys = [...openKeys]
        if (newItemVisible) {
            newOpenKeys.push(generateKey)
        } else {
            const index = newOpenKeys.indexOf(generateKey)

            if (index >= 0) {
                newOpenKeys.splice(index, 1)
            }
        }

        store.setState({ openKeys: newOpenKeys })

        props.onOpenChange && props.onOpenChange(newOpenKeys)
    }

    const paddingLeftStyle =
        type === 'inline'
            ? { paddingLeft: `${(indentLevel as number) * PADDING_BASE}px` }
            : { paddingLeft: `${PADDING_BASE}px` }

    const classes = classname(className, PREFIX, `${PREFIX}-${type}`)

    const handleSelect = (param: TSelectParam) => {
        const { key, keyPath, selectedKeys } = param
        props.onSelect &&
            props.onSelect({
                key,
                keyPath: keyPath.concat(generateKey),
                selectedKeys,
            })
    }

    return (
        <li>
            <ul className={classes} is-highlighted={isSelected ? 'yes' : 'no'}>
                <p
                    className={classname(PREFIX + '-label')}
                    style={paddingLeftStyle}
                    data-visible={itemsVisible}
                    onClick={togglePopper}
                >
                    <span>item-key={generateKey}</span>
                    {title}
                    <span>
                        <Icon name="down"></Icon>
                    </span>
                </p>
                <div
                    className={classname(PREFIX + '-popup-wrapper', {
                        [`${PREFIX}-popup-wrapper-hide`]: !itemsVisible,
                    })}
                    data-key={generateKey}
                >
                    {renderMenu(props.children, {
                        indentLevel: indentLevel + 1,
                        type,
                        generateKey,
                        onSelect: handleSelect,
                        multiple,
                    })}
                </div>
            </ul>
        </li>
    )
}

export default connect<MenuStore, MenuStore, SubMenuInnerProps>(
    (state) => state
)(SubMenu)
