import React, { useEffect, useState } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-tag'

interface TagProps {
    visible?: boolean
    closeable?: boolean
    onClose?: () => void
    color?: string
}

export interface TagInterface extends React.FC<TagProps> {
    CheckableTag: typeof CheckableTag
}

export interface CheckableTagProps {
    checked?: boolean
    onChange?: (checked: boolean) => void
}
const CheckableTag: React.FC<CheckableTagProps> = (props) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (props.checked !== null && props.checked !== undefined) {
            setChecked(props.checked)
        }
    }, [props.checked])
    const toggleChecked = () => {
        setChecked(!checked)
        props.onChange && props.onChange(!checked)
    }
    return (
        <span
            onClick={toggleChecked}
            className={classname(PREFIX, `${PREFIX}-checkable`, {
                [`${PREFIX}-checked`]: checked,
            })}
        >
            {props.children}
        </span>
    )
}

const Tag: TagInterface = (props) => {
    useEffect(() => {
        if (typeof props.visible === 'boolean') {
            setVisible(props.visible)
        }
    }, [props.visible])
    const [visible, setVisible] = useState(true)

    const handleClose = () => {
        setVisible(false)
        props.onClose && props.onClose()
    }

    const closeIcon = (
        <span className={`${PREFIX}-close-icon`} onClick={handleClose}>
            <Icon name="close" />
        </span>
    )
    return (
        <span
            className={classname(PREFIX, {
                [`${PREFIX}-closeable`]: props.closeable,
                [`${PREFIX}-hidden`]: !visible,
            })}
            style={{
                backgroundColor: props.color,
                borderColor: props.color ? '#fff' : undefined,
                color: props.color ? '#fff' : undefined,
            }}
        >
            {props.children}
            {props.closeable && closeIcon}
        </span>
    )
}
Tag.CheckableTag = CheckableTag
export default Tag
