import React, { useEffect, useState } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-tag'

export interface TagProps {
    visible?: boolean
    closeable?: boolean
    onClose?: () => void
    color?: string
}

const Tag: React.FC<TagProps> = (props) => {
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

export default Tag
