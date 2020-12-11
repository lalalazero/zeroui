import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../index'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import { NoticeContent } from './Notification'

const sc = scopedClassMaker('zeroUI-notice')
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
    const clsSwitch = makeClassSwitchs({
        placement,
        [type]: {
            useKey: !!type,
        },
    })
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
            return <div className={sc('type-icon')}>{typeIcon[type]}</div>
        }
        return ''
    }
    return (
        <div
            className={sc(clsSwitch, '')}
            ref={ref}
            onAnimationEnd={handleAnimationEnd}
        >
            {renderIcon()}
            <div className={sc('content')}>
                <div className={sc('title')}>{title}</div>
                <div className={sc('body')}>{body}</div>
            </div>
            {closeable && (
                <div className={sc('close-icon')} onClick={handleClose}>
                    <Icon name="close"></Icon>
                </div>
            )}
        </div>
    )
}

export default Notice
