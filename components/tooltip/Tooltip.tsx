import React, { useState } from 'react'
import { scopedClassMaker } from '../_util/classes'
import './Tooltip.scss'

const scopedClassName = scopedClassMaker('zeroUI-tooltip-wrapper')
const sc = scopedClassName

export interface ToolTipProps {
    title?: string,
    mouseLeaveDelay?: number
}

const Tooltip: React.FC<ToolTipProps> = (props) => {
    const { mouseLeaveDelay } = props
    const [visible, setVisible] = useState(false)
    let timerId: any = null
    const onMouseEnter = () => {
        if (!visible) {
            setVisible(true)
        }
        if (timerId) {
            window.clearTimeout(timerId)
            timerId = null
        }
    }
    const onMouseLeave = () => {
        if (typeof mouseLeaveDelay === 'number' && !timerId) {
            timerId = setTimeout(() => {
                setVisible(false)
            }, mouseLeaveDelay * 1000)
        }

    }
    return (
        <div className={sc('')}>
            {
                visible && <span className='zeroUI-tooltip-content'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >{props.title || ''}</span>
            }
            <span className='zeroUI-tooltip-trigger' style={{ display: 'inline-block' }}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}>
                {
                    props.children
                }
            </span>
        </div>
    )
}

Tooltip.defaultProps = {
    mouseLeaveDelay: 1
}

export default Tooltip