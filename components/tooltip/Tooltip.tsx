import React, { CSSProperties, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-tooltip'

export const TooltipPlacement = ['top', 'bottom', 'left', 'right'] as const

export type TooltipPlacementType = typeof TooltipPlacement[number]

export interface ToolTipProps {
    title?: string
    mouseLeaveDelay?: number
    mouseEnteryDelay?: number
    placement?: TooltipPlacementType
    getPopupContainer?: () => HTMLElement
    triggerStyle?: CSSProperties
    triggerClass?: string
    popperStyle?: CSSProperties
    popperClass?: string
    trigger?: 'hover' | 'click'
}

const Tooltip: React.FC<ToolTipProps> = (props) => {
    const { mouseLeaveDelay, placement, triggerClass, popperClass } = props
    const [visible, setVisible] = useState(true)
    const triggerRef = useRef<HTMLDivElement>(null)
    const popperRef = useRef<HTMLDivElement>(null)
    const [timerId, setTimerId] = useState<any>(null)

    // useEffect(() => {
    //     if (
    //         typeof window !== 'undefined' &&
    //         triggerRef &&
    //         triggerRef.current &&
    //         popperRef &&
    //         popperRef.current
    //     ) {
    //         document.body.appendChild(triggerRef.current)
    //         const tooltipDiv = popperRef.current
    //         const propmtSpan = triggerRef.current
    //         const {
    //             width,
    //             height,
    //             left,
    //             top,
    //         } = tooltipDiv.getBoundingClientRect()
    //         const map = {
    //             top: {
    //                 left: window.scrollX + left,
    //                 top: window.scrollY + top,
    //             },
    //             bottom: {
    //                 left: window.scrollX + left,
    //                 top: window.scrollY + top + height,
    //             },
    //             left: {
    //                 left: window.scrollX + left,
    //                 top: window.scrollY + top,
    //             },
    //             right: {
    //                 left: window.scrollX + left + width,
    //                 top: window.scrollY + top,
    //             },
    //         }
    //         propmtSpan.style.left = map[placement!].left + 'px'
    //         propmtSpan.style.top = map[placement!].top + 'px'
    //     }
    //     return () => {
    //         timerId && window.clearTimeout(timerId)
    //     }
    // }, [])

    const onMouseEnter = () => {
        // if (!visible) {
        //     setVisible(true)
        // }
        // if (timerId && typeof window !== 'undefined') {
        //     window.clearTimeout(timerId)
        //     setTimerId(null)
        // }
    }
    const onMouseLeave = () => {
        // if (
        //     typeof mouseLeaveDelay === 'number' &&
        //     !timerId &&
        //     typeof window !== 'undefined'
        // ) {
        //     setTimerId(
        //         window.setTimeout(() => {
        //             setVisible(false)
        //         }, mouseLeaveDelay * 1000)
        //     )
        // }
    }

    const popperClasses = useMemo(() => {
        return classname(
            popperClass,
            `${PREFIX}-popper`,
            `${PREFIX}-popper-${placement}`
        )
    }, [popperClass])

    const triggerClasses = useMemo(() => {
        return classname(triggerClass, `${PREFIX}-trigger`)
    }, [triggerClass])

    const triggerStyles: CSSProperties = useMemo(() => {
        return {
            ...props.triggerStyle,
            display: 'inline-block',
            position: 'relative',
        }
    }, [props.triggerStyle])

    const popperStyles: CSSProperties = useMemo(() => {
        return {
            ...props.popperStyle,
            visibility: visible ? 'visible' : 'hidden',
            display: 'inline-block',
        }
    }, [props.popperStyle, visible])

    const popperContainer = useMemo(() => {
        if (props.getPopupContainer && props.getPopupContainer()) {
            return props.getPopupContainer()
        }

        return triggerRef.current
    }, [triggerRef.current, props.getPopupContainer])

    const popperContent = useMemo(() => {
        return (
            <div className={popperClasses} ref={popperRef} style={popperStyles}>
                {props.title}
            </div>
        )
    }, [props.title, popperClasses, popperStyles])
    return (
        <>
            <div
                className={triggerClasses}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
                style={triggerStyles}
                ref={triggerRef}
            >
                {props.children}
            </div>
            {popperContainer &&
                ReactDOM.createPortal(popperContent, popperContainer)}
        </>
    )
}

Tooltip.defaultProps = {
    mouseLeaveDelay: 0.3,
    placement: 'top',
}

export default Tooltip
