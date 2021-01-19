import React, { useMemo } from 'react'
import { CommonMenuProps, MenuStore } from '.'
import { classname } from '../_util/classes'
import { connect, Store } from '../_util/mini-store'
import { PADDING_BASE } from './SubMenu'

const PREFIX = 'zeroUI-menu-item'

export interface MenuItemProps {
    key?: React.Key
    className?: string
}

type MenuItemInnerProps = CommonMenuProps &
    MenuItemProps & { store: Store<MenuStore> }

const MenuItem: React.FC<MenuItemInnerProps> = (props) => {
    const { indentLevel, type, className, generateKey, store } = props

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

    const isSelected = useMemo(() => {
        const { selectedKeys } = store.getState()

        if (
            selectedKeys &&
            selectedKeys.length > 0 &&
            selectedKeys.indexOf(generateKey) >= 0
        ) {
            return true
        }

        return false
    }, [store.getState()])

    const toggleSelected = () => {
        let selectedKeys = store.getState().selectedKeys || []

        if (props.multiple) {
            if (isSelected) {
                // menu 不需要取消选中
                // const index = selectedKeys.indexOf(generateKey)
                // if (index >= 0) {
                //     selectedKeys.splice(index, 1)
                // }
            } else {
                selectedKeys.push(generateKey)
            }
        } else {
            if (isSelected) {
                // menu 不需要取消选中
                // selectedKeys = []
            } else {
                selectedKeys = [generateKey]
            }
        }

        store.setState({ selectedKeys })

        props.onSelect &&
            props.onSelect({
                key: generateKey,
                keyPath: [generateKey],
                selectedKeys,
            })
    }

    const classes = classname(className, PREFIX, {
        [`${PREFIX}-selected`]: isSelected, // selectedKey === itemKey,
    })
    return (
        <li
            className={classes}
            style={paddingLeftStyle}
            data-key={itemKey}
            onClick={toggleSelected}
        >
            {props.children}
            <span style={{ marginLeft: 20 }}>{itemKey}</span>
        </li>
    )
}

const ConnectedMenuItem = connect<{}, MenuItemInnerProps>()(MenuItem)

export default ConnectedMenuItem
