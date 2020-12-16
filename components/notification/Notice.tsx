import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import { NoticeContent, NoticePlacement } from './Notification'

const PREFIX = 'zeroUI-notice'

const getPlacementCls = (placement: NoticePlacement) => {
    const map = {
        topRight: 'top-right',
        topLeft: 'top-left',
        topCenter: 'top-center',
        bottomRight: 'bottom-right',
        bottomLeft: 'bottom-left',
        bottomCenter: 'bottom-center',
    }

    return map[placement]
}

const Notice: React.FC<NoticeContent> = ({
    title,
    body,
    onClose,
    wait = 3000,
    autoClose = true,
    placement,
    type = '',
    closeable = true,
}) => {
    const classes = classname(
        PREFIX,
        `${PREFIX}-${getPlacementCls(placement as NoticePlacement)}`,
        {
            [`${PREFIX}-${type}`]: !!type,
        }
    )
    const [timerId, setTimerId] = useState<any>(null)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (autoClose && closeable) {
            startTimer()
        }
        return cleanTimer()
    }, [])

    const startTimer = () => {
        const id = setTimeout(() => {
            handleClose()
        }, wait)

        setTimerId(id)
    }

    const cleanTimer = () => {
        timerId && window.clearTimeout(timerId)
    }

    const handleAnimationEnd: React.AnimationEventHandler = (event) => {
        if ((event.target as HTMLDivElement).getAttribute('notice-close')) {
            onClose && onClose()
        }
    }

    const handleClose = () => {
        ref && ref.current && ref.current.setAttribute('notice-close', 'true')
    }

    const renderIcon = () => {
        if (['success', 'warn', 'info', 'error'].includes(type)) {
            const typeIcon: any = {
                success: <Icon name="check" />,
                warn: <Icon name="info" />,
                info: <Icon name="info" />,
                error: <Icon name="error" />,
            }
            return (
                <div className={classname(PREFIX + '-type-icon')}>
                    {typeIcon[type]}
                </div>
            )
        }
        return ''
    }
    return (
        <div className={classes} ref={ref} onAnimationEnd={handleAnimationEnd}>
            {renderIcon()}
            <div className={classname(PREFIX + '-content')}>
                <div className={classname(PREFIX + '-title')}>{title}</div>
                <div className={classname(PREFIX + '-body')}>{body}</div>
            </div>
            {closeable && (
                <div
                    className={classname(PREFIX + '-close-icon')}
                    onClick={handleClose}
                >
                    <Icon name="close"></Icon>
                </div>
            )}
        </div>
    )
}

export default Notice
