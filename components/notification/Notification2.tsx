import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '../index'
import { scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-notification')
const sc = scopedClassName
const containerClass = sc('container')
const laneClass = sc('item-lane')
const itemWrapperClass = sc('item-wrapper')
const itemClass = sc('')
const defaultConfig = {
    title: '',
    body: '',
    wait: 5000,
    autoClose: true,
}

type NotificationConfig = {
    getContainer?: () => HTMLElement
    title: string | React.ElementType | React.ComponentType
    body: string | React.ElementType | React.ComponentType
    wait?: number
    autoClose?: boolean
}

const getDefaultContainer = () => document.body

const NotificationItem: React.FC<any> = (props) => {
    const { seed, title, body, onClose, wait, autoClose } = props
    const [timer, setTimerId] = useState<any>()
    const [offsetTop, setOffsetTop] = useState<any>()
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (autoClose) {
            const timerId = setTimeout(() => {
                onClose && onClose()
            }, wait)

            setTimerId(timerId)
        }
        return () => clearTimeout(timer)
    }, [seed])

    useEffect(() => {
        clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (ref && ref.current) {
            let offsetTop = ref.current.offsetTop
            console.log(`seed=${seed} offsetTop=${offsetTop}`)
            setOffsetTop(offsetTop)
        }
    }, [])

    return (
        <div
            ref={ref}
            className={itemWrapperClass}
            data-seed={seed}
            data-offset-top={offsetTop}
            // style={offsetTop && { top: offsetTop }}
        >
            <div className={itemClass}>
                <div className={sc('title')}>{title}</div>
                <div className={sc('body')}>{body}</div>
                <div className={sc('close-icon')} onClick={onClose}>
                    <Icon name="close"></Icon>
                </div>
            </div>
        </div>
    )
}

class NotificationInternal extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { items } = this.props
        return (
            <>
                {items.map((item: any) => (
                    <NotificationItem {...item} key={item.seed} />
                ))}
            </>
        )
    }
}

class Notification {
    container: Element
    instanceNode: Element
    mountNode: Element
    seed: number = 1
    notifications: any[] = []
    private constructor(config?: any) {
        this.container =
            config && config.getContainer
                ? config.getContainer()
                : getDefaultContainer()
        this.container.className = containerClass
        this.instanceNode = document.createElement('div')
        this.instanceNode.className = laneClass
        this.container.appendChild(this.instanceNode)
        ReactDOM.render(
            <NotificationInternal items={this.notifications} />,
            this.instanceNode
        )
    }
    remove(seed: number) {
        this.notifications = this.notifications.filter(
            (item) => item.seed !== seed
        )
        ReactDOM.render(
            <NotificationInternal items={this.notifications} />,
            this.instanceNode
        )
    }
    open(config: NotificationConfig) {
        config = Object.assign({}, defaultConfig, config)
        const seed = this.seed++
        this.notifications.push({
            ...config,
            seed,
            onClose: () => this.remove(seed),
        })
        ReactDOM.render(
            <NotificationInternal items={this.notifications} />,
            this.instanceNode
        )
    }
    mountDom(component: React.ReactElement, childNode: Element) {
        ReactDOM.render(component, childNode)
        this.instanceNode.appendChild(childNode)
    }
    unmountDom(childNode: Element) {
        ReactDOM.unmountComponentAtNode(childNode)
        this.instanceNode.removeChild(childNode)
    }
    static getIntance() {
        return new Notification()
    }
    static destroy(instance: Notification) {
        instance.container &&
            (instance.container as Element).removeChild(instance.instanceNode)
        return undefined
    }
}

export default Notification
