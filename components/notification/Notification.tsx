import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { scopedClassMaker } from '../_util/classes'
import Notice from './Notice'
import './style.scss'

export type NoticeContent = Pick<
    NoticeConfig,
    | 'body'
    | 'title'
    | 'key'
    | 'onClose'
    | 'wait'
    | 'autoClose'
    | 'placement'
    | 'closeable'
> & { type?: buildInApiType }

export type NoticeFunc = (noticeContent: NoticeContent) => void
export interface NotificationInstance {
    notice: NoticeFunc
    component: Notification
    destroy: () => void
    removeNotice: (key: React.Key) => void
}

interface NotificationState {
    notices: NoticeContent[]
}

interface NotificationProps extends NoticeConfig {
    style?: React.CSSProperties
    type?: buildInApiType
}

const containerClass = scopedClassMaker('zeroUI-notification')

let seed = 0
function getUUid() {
    const id = seed
    seed += 1
    return `zeroUI_notice_${id}`
}
const defaultNoticeConfig: NoticeConfig = {
    getContainer: () => document.body,
    placement: 'topRight',
    autoClose: true,
    wait: 5000,
    closeable: true,
}

function openNotice(props: NotificationProps) {
    const config = { ...defaultNoticeConfig, ...props }
    getNotificationInstance(config, (instance) => {
        // TODO fix any
        instance.notice(config as any)
    })
}

const notificationApi: any = {
    open: openNotice,
    close: (key: React.Key) => {
        Object.keys(notificationInstanceCacheMap).forEach((cacheKey) => {
            Promise.resolve(notificationInstanceCacheMap[cacheKey]).then(
                (instance) => {
                    instance.removeNotice(key)
                }
            )
        })
    },
    destroy() {
        Object.keys(notificationInstanceCacheMap).forEach((cacheKey) => {
            Promise.resolve(notificationInstanceCacheMap[cacheKey]).then(
                (instance) => {
                    instance.destroy()
                }
            )
            delete notificationInstanceCacheMap[cacheKey]
        })
    },
}

const otherApi = [
    'success',
    'warn',
    'info',
    'error',
    'success2',
    'warn2',
    'info2',
    'error2',
] as const

type buildInApiType = typeof otherApi[number]

otherApi.forEach((type) => {
    notificationApi[type] = (userConfig: NoticeConfig) =>
        openNotice({ ...userConfig, type })
})

const notificationInstanceCacheMap: {
    [key: string]: Promise<NotificationInstance>
} = {}

function getPlacementStyle(placement: NoticePlacement | undefined) {
    const placementMap: { [key in NoticePlacement]: React.CSSProperties } = {
        topRight: {
            top: 20,
            right: 20,
        },
        topLeft: {
            top: 20,
            left: 20,
        },
        topCenter: {
            top: 20,
            left: '50%',
            translate: '-50%, 0',
        },
        bottomLeft: {
            bottom: 20,
            left: 20,
        },
        bottomRight: {
            bottom: 20,
            right: 20,
        },
        bottomCenter: {
            bottom: 20,
            left: '50%',
        },
    }

    return placement ? placementMap[placement] : {}
}

function getNotificationInstance(
    properties: NoticeConfig = defaultNoticeConfig,
    callback: (instance: NotificationInstance) => void
) {
    const { placement, ...config } = properties

    const cacheKey = `zeroUI-notification-${placement}`
    const cachedInstance = notificationInstanceCacheMap[cacheKey]

    if (cachedInstance) {
        Promise.resolve(cachedInstance).then((instance) => {
            callback(instance)
        })
        return
    }

    notificationInstanceCacheMap[cacheKey] = new Promise((resolve) => {
        Notification.newInstance(
            {
                style: getPlacementStyle(placement),
                ...config,
            },
            (notificationInstance) => {
                resolve(notificationInstance)
                callback(notificationInstance)
            }
        )
    })
}

class Notification extends React.Component<
    NotificationProps,
    NotificationState
> {
    static newInstance: (
        properties: NotificationProps,
        callback: (instance: NotificationInstance) => void
    ) => void
    state: NotificationState = {
        notices: [],
    }
    add = (originNotice: NotificationProps) => {
        this.setState({
            notices: this.state.notices.concat([originNotice]),
        })
    }
    remove = (key: React.Key) => {
        const filterNotices = this.state.notices.filter(
            (notice) => notice.key !== key
        )
        this.setState({
            notices: filterNotices,
        })
    }
    render() {
        const { style } = this.props
        return (
            <div className={containerClass('')} style={style}>
                {this.state.notices.map((noticeConfig) => (
                    <Notice
                        {...noticeConfig}
                        key={noticeConfig.key}
                        onClose={() => {
                            this.remove(noticeConfig.key as React.Key)
                            noticeConfig.onClose && noticeConfig.onClose()
                        }}
                    />
                ))}
            </div>
        )
    }
}

Notification.newInstance = function newNotificationInstance(
    properties = {},
    callback
) {
    const { getContainer, ...config } = properties
    const div = document.createElement('div')
    if (getContainer) {
        const root = getContainer()
        root.appendChild(div)
    } else {
        document.body.appendChild(div)
    }
    let called = false
    function ref(notificationInstance: Notification) {
        if (called) {
            return
        }
        called = true
        callback({
            notice(noticeConfig) {
                notificationInstance.add({
                    ...noticeConfig,
                    key: noticeConfig.key || getUUid(),
                })
            },
            component: notificationInstance,
            removeNotice: (key) => {
                notificationInstance.remove(key)
            },
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
    closeable?: boolean
    wait?: number
    placement?: NoticePlacement
    onClose?: () => void
    getContainer?: () => HTMLElement
    key?: React.Key
}

type buildInApi = { [key in buildInApiType]: (config: NoticeConfig) => void }

export interface NotificationApi extends buildInApi {
    open(config: NoticeConfig): void
}

export default notificationApi as NotificationApi
