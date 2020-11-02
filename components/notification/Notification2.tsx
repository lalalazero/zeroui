import React from 'react'
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

const getDefaultContainer = () => document.body

class Notification {
    container: Element
    instanceNode: Element
    mountNode: Element
    seed: number = 1
    private constructor(config?: any) {
        this.container =
            config && config.getContainer
                ? config.getContainer()
                : getDefaultContainer()
        this.container.className = containerClass
        this.instanceNode = document.createElement('div')
        this.instanceNode.className = laneClass
        this.container.appendChild(this.instanceNode)
    }
    open(config: any) {
        const { title, body } = config
        const childNode = document.createElement('div')
        childNode.className = itemWrapperClass
        childNode.setAttribute('data-seed', this.seed++ + '')
        const notification = (
            <div className={itemClass}>
                <div className={sc('title')}>{title}</div>
                <div className={sc('body')}>{body}</div>
                <div
                    className={sc('close-icon')}
                    onClick={() => this.unmountDom(childNode)}
                >
                    <Icon name="close"></Icon>
                </div>
            </div>
        )
        this.mountDom(notification, childNode)
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
