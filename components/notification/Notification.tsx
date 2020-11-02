import React, {
    ReactElement,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '../index'
import { scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-notification')
const sc = scopedClassName
const containerClass = sc('container')
const laneClass = sc('item-lane')
const itemWrapperClass = sc('item-wrapper')

interface NotificationProps {
    title: string | React.ElementType | React.ComponentType
    body: string | React.ElementType | React.ComponentType
    mountNode: Element
    onClose: () => void
    wait: number
    autoClose: () => void
}

const Notification: React.FC<NotificationProps> = (props) => {
    const [timer, setTimer] = useState<any>()
    useEffect(() => {
        const timerId = setTimeout(() => {
            props.autoClose()
        }, props.wait)
        setTimer(timerId)
    }, [])

    const onMouseEnter = useCallback(() => {
        if (timer) clearTimeout(timer)
    }, [timer])

    const onMouseLeave = useCallback(() => {
        if (timer) clearTimeout(timer)
        const newTimer = setTimeout(() => {
            props.autoClose()
        }, props.wait)
        setTimer(newTimer)
    }, [timer])

    const modal = useMemo(
        () => (
            <div
                className={sc('')}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={sc('title')}>{props.title}</div>
                <div className={sc('body')}>{props.body}</div>
                <div className={sc('close-icon')} onClick={props.onClose}>
                    <Icon name="close"></Icon>
                </div>
            </div>
        ),
        [props, onMouseEnter, onMouseLeave]
    )

    return ReactDOM.createPortal(modal, props.mountNode)
}

type NotificationConfig = {
    getContainer?: () => HTMLElement
    title: string | React.ElementType | React.ComponentType
    body: string | React.ElementType | React.ComponentType
    wait?: number
    autoClose?: boolean
}

const defaultConfig = {
    title: '',
    body: '',
    wait: 5000,
    autoClose: true,
}

const getDefaultContainer = () => document.body

const getContainer = (config: NotificationConfig) => {
    const container = config.getContainer
        ? config.getContainer()
        : getDefaultContainer()
    container.classList.add(containerClass)
    let panel = container.querySelector(`.${laneClass}`)
    if (!panel) {
        panel = document.createElement('div')
        panel.className = laneClass
        container.appendChild(panel)
    }
    return panel
}

class NotificationItem {
    static seed = 0
    instance: HTMLDivElement
    container: Element
    component: ReactElement
    constructor(config: NotificationConfig) {
        this.init(config)
        this.bindListeners()
    }
    init(config: NotificationConfig) {
        config = Object.assign({}, defaultConfig, config)
        const container = getContainer(config)
        const mountNode = document.createElement('div')
        mountNode.className = itemWrapperClass
        this.instance = mountNode
        this.container = container

        const component = (
            <Notification
                title={config.title}
                body={config.body}
                mountNode={this.instance}
                onClose={this.handleClose.bind(this)}
                autoClose={
                    config.autoClose ? this.handleClose.bind(this) : null
                }
                wait={config.wait as number}
            ></Notification>
        )
        this.component = component
    }
    bindListeners() {
        this.instance.onanimationstart = () => console.log('1 start')
        this.instance.onanimationend = this.onAnimationEnd.bind(this)
    }
    onAnimationEnd(event: any) {
        if (event.target.getAttribute('data-seed')) {
            this.unmount()
        }
    }
    handleClose() {
        this.instance.setAttribute('data-seed', `${NotificationItem.seed++}`)
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(this.instance)
        this.container.removeChild(this.instance)
    }
    mount() {
        ReactDOM.render(this.component, this.instance)
        this.container.appendChild(this.instance)
    }
}

const open = (config: NotificationConfig) => {
    const notificationItem = new NotificationItem(config)
    notificationItem.mount()
}

const notification = {
    open,
}

export default notification
