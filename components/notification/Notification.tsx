import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
    close: () => void
    wait: number
}

const Notification: React.FC<NotificationProps> = (props) => {
    const [timer, setTimer] = useState<any>()
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('1')
            props.close()
        }, props.wait)
        setTimer(timerId)
    }, [])

    const onMouseEnter = useCallback(() => {
        if (timer) clearTimeout(timer)
    }, [timer])

    const onMouseLeave = useCallback(() => {
        if (timer) clearTimeout(timer)
        const newTimer = setTimeout(() => {
            console.log('2')
            props.close()
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
                <div className={sc('close-icon')} onClick={props.close}>
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
}

let seed = 1

const defaultConfig = {
    title: '',
    body: '',
    wait: 3000,
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

const open = (config: NotificationConfig) => {
    config = Object.assign({}, defaultConfig, config)
    const container = getContainer(config)
    const mountNode = document.createElement('div')
    mountNode.className = itemWrapperClass
    mountNode.setAttribute('data-seed', `${seed++}`)
    const handleClose = () => {
        ReactDOM.unmountComponentAtNode(mountNode)
        container.removeChild(mountNode)
    }
    const component = (
        <Notification
            title={config.title}
            body={config.body}
            mountNode={mountNode}
            close={handleClose}
            wait={config.wait as number}
        ></Notification>
    )
    ReactDOM.render(component, mountNode)
    container.appendChild(mountNode)
}

const notification = {
    open,
}

export default notification
