import React, { useMemo, useState } from 'react'
import { CommonMenuProps, MenuStore, TSelectParam } from '.'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import { connect, ConnectedComponent } from '../_util/zero-store'
import { useChildSelected, useVisible } from './hooks'
import { renderMenu } from './util'

const PREFIX = 'zeroUI-submenu'

export const PADDING_BASE = 14

const mouseEnterDelay = 200

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
    const [timer, setTimer] = useState<any>()
    const [popperVisible, setPopperVisible] = useState(false)

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

    const popperHide = useMemo(() => {
        if (type === 'inline') {
            return !itemsVisible
        }

        return !popperVisible
    }, [itemsVisible, popperVisible, type])

    const classes = classname(className, PREFIX, `${PREFIX}-${type}`, {
        [`${PREFIX}-selected`]: isSelected,
        [`${PREFIX}-open`]: !popperHide,
    })

    const handleSelect = (param: TSelectParam) => {
        const { key, keyPath, selectedKeys } = param
        props.onSelect &&
            props.onSelect({
                key,
                keyPath: keyPath.concat(generateKey),
                selectedKeys,
            })
    }

    const showPopper = () => {
        if (type === 'inline') {
            return
        }

        timer && clearTimeout(timer)
        setTimer(
            setTimeout(() => {
                setPopperVisible(true)
            }, mouseEnterDelay)
        )
    }

    const hidePopper = () => {
        if (type === 'inline') {
            return
        }
        if (popperVisible) {
            timer && clearTimeout(timer)
            setTimer(
                setTimeout(() => {
                    setPopperVisible(false)
                }, mouseEnterDelay)
            )
        }
    }

    return (
        <li>
            <ul className={classes}>
                <span
                    className={classname(PREFIX + '-label')}
                    style={paddingLeftStyle}
                    onClick={togglePopper}
                    onMouseEnter={showPopper}
                    onMouseLeave={hidePopper}
                >
                    {title}
                    <span className={classname(PREFIX + '-icon')}>
                        <Icon name="down"></Icon>
                    </span>
                </span>
                <div
                    className={classname(PREFIX + '-popper', {
                        [`${PREFIX}-popper-hide`]: popperHide,
                    })}
                    data-key={generateKey}
                    onMouseEnter={showPopper}
                    onMouseLeave={hidePopper}
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
