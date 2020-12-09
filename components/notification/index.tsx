import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { scopedClassMaker } from '../_util/classes'

const sc = scopedClassMaker('zeroUI-notification')

export interface NoticeContent {
    content?: ReactNode
    onClose?: () => void
}
export type NoticeFunc = (noticeProps: NoticeContent) => void
export interface NotificationInstance {
    notice: NoticeFunc
    component: Notification
    destroy: () => void
}

interface NotificationState {
    notices: NoticeContent[]
}

class Notification extends React.Component<any, any> {
    static newInstance: (
        properties: NoticeConfig & { getContainer?: () => HTMLElement },
        callback: (instance: NotificationInstance) => void
    ) => void
    state: NotificationState = {
        notices: [],
    }
    add = (notice: NoticeContent) => {
        this.setState({
            notices: this.state.notices.concat([notice]),
        })
    }
    render() {
        return <div className={sc('')}></div>
    }
}

Notification.newInstance = function newNotificationInstance(
    properties,
    callback
) {
    const { getContainer, ...config } = properties || {}
    const div = document.createElement('div')
    if (getContainer) {
        const root = getContainer()
        root.appendChild(div)
    } else {
        document.body.appendChild(div)
    }
    let called = false
    function ref(notification: Notification) {
        if (called) {
            return
        }
        called = true
        callback({
            notice(noticeContent) {
                notification.add(noticeContent)
            },
            component: notification,
            destroy() {
                ReactDOM.unmountComponentAtNode(div)
                if (div.parentNode) {
                    div.parentNode.removeChild(div)
                }
            },
        })
    }

    ReactDOM.render(<Notification ref={ref} {...config} />, div)
}

const openNotice = (config: NoticeConfig) => {
    Notification.newInstance(config, (instance) => {
        // TODO
        instance.notice(config as any)
    })
}

const api: any = {
    open: openNotice,
}

export type NoticePlacement =
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
    | 'topCenter'
    | 'bottomCenter'

export interface NoticeConfig {
    title?: string
    body?: ReactNode
    autoClose?: boolean
    wait?: number
    placement?: NoticePlacement
}

export interface NotificationApi {
    success(config: NoticeConfig): void
    error(config: NoticeConfig): void
    info(config: NoticeConfig): void
    warning(config: NoticeConfig): void
    open(config: NoticeConfig): void
}

export default api as NotificationApi
