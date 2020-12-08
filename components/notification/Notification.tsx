import React, {
    AnimationEventHandler,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '../index'
import { scopedClassMaker } from '../_util/classes'
import { tuple } from '../_util/type'
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
    placement: 'topRight',
}
const NotificationPlacementTypes = tuple(
    'topRight',
    'topLeft',
    'topCenter',
    'bottomLeft',
    'bottomRight',
    'bottomCenter'
)
const placementClassMap = {
    topRight: sc('top-right'),
    topLeft: sc('top-left'),
    topCenter: sc('top-center'),
    bottomLeft: sc('bottom-left'),
    bottomRight: sc('bottom-right'),
    bottomCenter: sc('bottom-center'),
}
export type NotificationPlacement = typeof NotificationPlacementTypes[number]
export type NotificationConfig = {
    title?: React.ReactNode
    body?: React.ReactNode
    wait?: number
    autoClose?: boolean
    placement?: NotificationPlacement
}

const getDefaultContainer = () => document.body

interface NotificationItemProps {
    seed: string
    title: string
    body: ReactNode
    onClose: () => void
    wait: number
    autoClose: boolean
}

const NotificationItem: React.FC<NotificationItemProps> = (props) => {
    const { seed, title, body, onClose, wait, autoClose } = props
    const [timer, setTimerId] = useState<NodeJS.Timeout>()
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (autoClose) {
            const timerId = setTimeout(() => {
                hanleClose()
            }, wait)

            setTimerId(timerId as any)
        }
        return () => timer && clearTimeout(timer)
    }, [seed])

    useEffect(() => {
        timer && clearTimeout(timer)
    }, [])

    const hanleClose = () => {
        ref.current && ref.current.setAttribute('data-close', 'true')
    }

    const handleAnimationEnd: AnimationEventHandler = (event) => {
        if ((event.target as HTMLDivElement).getAttribute('data-close')) {
            onClose && onClose()
        }
    }

    return (
        <div
            ref={ref}
            className={itemWrapperClass}
            data-seed={seed}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={itemClass}>
                <div className={sc('title')}>{title}</div>
                <div className={sc('body')}>{body}</div>
                <div className={sc('close-icon')} onClick={hanleClose}>
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

export type InstanceConfig = {
    placement?: NotificationPlacement
    getContainer?: () => HTMLElement
}

interface NotificationItem extends NotificationConfig {
    seed: number
    onClose: any
}

class Notification {
    container: Element
    root: Element
    mountNode: Element
    seed = 1
    notifications: NotificationItem[] = []
    instance: Notification | null = null
    private constructor() {
        this.initRoot()
    }
    private initRoot(config?: InstanceConfig): void {
        this.container =
            config && config.getContainer
                ? config.getContainer()
                : getDefaultContainer()
        this.container.className = containerClass
        this.root = document.createElement('div')
        this.root.classList.add(laneClass)
        this.container.appendChild(this.root)
    }
    private adjustPlacement(placement: NotificationPlacement = 'topRight') {
        this.root.classList.add(placementClassMap[placement])
    }
    remove(seed: number): void {
        this.notifications = this.notifications.filter(
            (item) => item.seed !== seed
        )
        ReactDOM.render(
            <NotificationInternal items={this.notifications} />,
            this.root
        )
    }
    open(config: NotificationConfig): void {
        config = Object.assign({}, defaultConfig, config)

        this.adjustPlacement(config.placement)

        const seed = this.seed++
        this.notifications.push({
            ...config,
            seed,
            onClose: () => this.remove(seed),
        })
        ReactDOM.render(
            <NotificationInternal items={this.notifications} />,
            this.root
        )
    }
    static getIntance(): Notification {
        return new Notification()
    }
    static destroy(instance: Notification): undefined {
        ReactDOM.unmountComponentAtNode(instance.root)
        instance.container &&
            (instance.container as Element).removeChild(instance.root)
        return undefined
    }
}

export default Notification

const defaultInstance = Notification.getIntance()

export const notification = defaultInstance
