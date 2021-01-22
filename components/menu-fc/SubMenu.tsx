import React, { useMemo } from 'react'
import { CommonMenuProps, MenuStore, TSelectParam } from '.'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import { connect, Store } from '../_util/zero-store'
import { collectMenuKeys, renderMenu } from './util'

const PREFIX = 'zeroUI-submenu'

export const PADDING_BASE = 14

export interface SubMenuProps {
    title?: string
    className?: string
}

type SubMenuInnerProps = CommonMenuProps &
    SubMenuProps & { store: Store<MenuStore> } & MenuStore

const SubMenu: React.FC<SubMenuInnerProps> = (props) => {
    const {
        indentLevel,
        type,
        className,
        title,
        generateKey,
        store,
        multiple,
        selectedKeys,
        openKeys,
    } = props

    const childrenKeys = collectMenuKeys(props.children, generateKey)

    const itemsVisible = useMemo(() => {
        if (
            openKeys &&
            openKeys.length > 0 &&
            openKeys.indexOf(generateKey) >= 0
        ) {
            return true
        }

        return false
    }, [openKeys])

    const isSelected = useMemo(() => {
        if (
            selectedKeys &&
            selectedKeys.length > 0 &&
            selectedKeys.some((key: string) => childrenKeys.indexOf(key) >= 0)
        ) {
            return true
        }

        return false
    }, [selectedKeys])

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

    const itemKey = generateKey

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
                        onSelect: handleSelect,
                        multiple,
                    })}
                </div>
            </ul>
        </li>
    )
}

const ConnectedSubMenu = connect<MenuStore, SubMenuInnerProps>(
    (state: MenuStore) => state
)(SubMenu)

export default ConnectedSubMenu
