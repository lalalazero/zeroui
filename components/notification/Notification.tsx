import React from 'react'
import ReactDOM from 'react-dom'
import { scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-notification')
const sc = scopedClassName
const mountNodeClass = sc('wrapper')

interface NotificationProps {
    title: string | React.ElementType | React.ComponentType
    body: string | React.ElementType | React.ComponentType
    mountNode: Element
}

export interface NotificationConfig {
    getContainer?: () => HTMLElement
    title: string | React.ElementType | React.ComponentType
    body: string | React.ElementType | React.ComponentType
}

const Notification: React.FC<NotificationProps> = (props) => {
    const modal = (
        <div className={sc('')}>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </div>
    )
    return ReactDOM.createPortal(modal, props.mountNode)
}

const getDefaultContainer = () => document.body

const getMountNode: () => Element = () => {
    let div = document.querySelector(`.${mountNodeClass}`)
    if (!div) {
        div = document.createElement('div')
        div.className = mountNodeClass
    }
    return div
}

const getContainer = (config: NotificationConfig) => {
    return config.getContainer ? config.getContainer() : getDefaultContainer()
}

const open = (config: NotificationConfig) => {
    console.log(config)
    console.log('open notification')

    const container = getContainer(config)
    const mountNode = getMountNode()
    const component = (
        <Notification
            title={config.title}
            body={config.body}
            mountNode={mountNode}
        ></Notification>
    )
    ReactDOM.render(component, mountNode)
    container.appendChild(mountNode)

    setTimeout(() => {
        console.log('移除notification')
        console.log(mountNode)
        // ReactDOM.unmountComponentAtNode(mountNode)
        // mountNode.removeChild(div)
    }, 2000)
}

const notification = {
    open,
}

export default notification
