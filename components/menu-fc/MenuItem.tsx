import React, { useMemo } from 'react'
import { CommonMenuProps, MenuStore } from '.'
import { classname } from '../_util/classes'
import { connect, Store } from '../_util/zero-store'
import { PADDING_BASE } from './SubMenu'

const PREFIX = 'zeroUI-menu-item'

export interface MenuItemProps {
    key?: React.Key
    className?: string
}

type MenuItemInnerProps = CommonMenuProps &
    MenuItemProps & { store: Store<MenuStore> } & MenuStore

const MenuItem: React.FC<MenuItemInnerProps> = (props) => {
    const {
        indentLevel,
        type,
        className,
        generateKey,
        store,
        selectedKeys,
    } = props

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
        if (
            selectedKeys &&
            selectedKeys.length > 0 &&
            selectedKeys.indexOf(generateKey) >= 0
        ) {
            return true
        }

        return false
    }, [selectedKeys])

    const toggleSelected = () => {
        let newSelectedKeys = [...selectedKeys]

        if (props.multiple) {
            if (isSelected) {
                // TODO 单选的 menu不需要取消选中，多选的需要
                // const index = selectedKeys.indexOf(generateKey)
                // if (index >= 0) {
                //     selectedKeys.splice(index, 1)
                // }
            } else {
                newSelectedKeys.push(generateKey)
            }
        } else {
            if (isSelected) {
                // TODO 单选的 menu不需要取消选中，多选的需要
                // selectedKeys = []
            } else {
                newSelectedKeys = [generateKey]
            }
        }

        store.setState({ selectedKeys: newSelectedKeys })

        props.onSelect &&
            props.onSelect({
                key: generateKey,
                keyPath: [generateKey],
                selectedKeys,
            })
    }

    const classes = classname(className, PREFIX, {
        [`${PREFIX}-selected`]: isSelected,
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

const ConnectedMenuItem = connect<MenuStore, MenuItemInnerProps>(
    (state: MenuStore) => state
)(MenuItem)

export default ConnectedMenuItem
