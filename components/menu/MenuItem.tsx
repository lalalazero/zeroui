import React, { useMemo } from 'react'
import { CommonMenuProps, MenuStore } from '.'
import { classname } from '../_util/classes'
import { connect, ConnectedComponent } from '../_util/zero-store'
import { useSelected } from './hooks'
import { PADDING_BASE } from './SubMenu'

const PREFIX = 'zeroUI-menu-item'

export interface MenuItemProps {
    key?: React.Key
    className?: string
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    return <ConnectMenuItem {...(props as any)} />
}

type MenuItemInnerProps = CommonMenuProps & MenuItemProps

const MenuItemInternal: ConnectedComponent<
    MenuStore,
    MenuStore,
    MenuItemInnerProps
> = (props) => {
    const {
        indentLevel,
        type,
        className,
        generateKey,
        store,
        selectedKeys,
    } = props

    const isSelected = useSelected(props)

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
            data-key={generateKey}
            onClick={toggleSelected}
        >
            {props.children}
        </li>
    )
}

const ConnectMenuItem = connect<MenuStore, MenuStore, MenuItemInnerProps>(
    (state) => state
)(MenuItemInternal)

export default MenuItem
