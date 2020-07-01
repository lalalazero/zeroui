import React, { useState } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import './Tooltip.scss'
import { tuple } from '../_util/type'

const scopedClassName = scopedClassMaker('zeroUI-tooltip-wrapper')
const sc = scopedClassName

const TooltipPlacements = tuple('top','bottom','left','right')
export type TooltipPlacementType = typeof TooltipPlacements[number]


export interface ToolTipProps {
    title?: string,
    mouseLeaveDelay?: number,
    placement?: TooltipPlacementType
}

const Tooltip: React.FC<ToolTipProps> = (props) => {
    const { mouseLeaveDelay, placement } = props
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
    const clsSwitches = makeClassSwitchs({ placement })
    return (
        <div className={sc(clsSwitches, '')}>
            {
                visible && <div className='zeroUI-tooltip-content-wrapper'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <span className='zeroUI-tooltip-content'>
                        {props.title || ''}
                    </span>
                </div>
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
    mouseLeaveDelay: 0.3,
    placement: 'top'
}

export default Tooltip