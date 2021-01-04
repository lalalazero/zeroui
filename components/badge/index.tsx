import React, { CSSProperties, useMemo } from 'react'
import { isNumber } from '../_util'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-badge'

export const BadgeStatus = [
    'success',
    'warning',
    'default',
    'processing',
    'error',
] as const

export interface BadgeProps extends Omit<CSSProperties, 'offset'> {
    count?: number
    className?: string
    showZero?: boolean
    overCount?: number
    dot?: boolean
    offset?: [number | string, number | string]
    status?: typeof BadgeStatus[number]
    color?: string
    text?: string
}

const Badge: React.FC<BadgeProps> = (props) => {
    const {
        className,
        children,
        showZero,
        overCount,
        count,
        dot,
        status = '',
        text = '',
        color = '',
        offset = [],
        ...style
    } = props

    const isSolo = !children

    const isCustom = !isNumber(count)

    const offsetRight = offset[0]
    const offsetTop = offset[1]

    const offsetStyle = { right: offsetRight, top: offsetTop }

    const isOvered =
        isNumber(count) &&
        isNumber(overCount) &&
        (count as number) > (overCount as number)

    const isStatusDot = status || text || color

    const getCount = useMemo(() => {
        if (isNumber(count)) {
            const countNum = count as number
            const max = overCount as number

            if (countNum < max) {
                return countNum
            }

            if (countNum > max) {
                return max + '+'
            }
        }

        return count
    }, [props.showZero, props.count, props.overCount])

    const shouldRenderIcon =
        count !== undefined && count !== null
            ? count !== 0 || (count === 0 && showZero)
            : false

    const badgeClassName = useMemo(() => {
        const cls1 = classname(PREFIX + '-custom', {
            [`${PREFIX}-over-max`]: isOvered,
        })
        const cls2 = classname(PREFIX, {
            [`${PREFIX}-over-max`]: isOvered,
        })
        return isCustom ? cls1 : cls2
    }, [isCustom])

    const renderStatusDot = useMemo(() => {
        return (
            <>
                <span
                    className={classname(
                        PREFIX + '-status-dot',
                        `${PREFIX}-status-dot-${status}`,
                        className
                    )}
                    style={color ? { backgroundColor: color } : undefined}
                ></span>
                {text && <span style={{ marginLeft: 5 }}>{text}</span>}
            </>
        )
    }, [color, text, status])

    return isStatusDot ? (
        renderStatusDot
    ) : (
        <div
            className={classname(PREFIX + '-wrapper', {
                [`${PREFIX}-dot`]: dot,
            })}
        >
            {isSolo ? (
                <span
                    className={classname(PREFIX + '-solo', className)}
                    {...style}
                >
                    {getCount}
                </span>
            ) : (
                <>
                    {shouldRenderIcon && (
                        <span className={badgeClassName} style={offsetStyle}>
                            {getCount}
                        </span>
                    )}

                    {children}
                </>
            )}
        </div>
    )
}

Badge.defaultProps = {
    showZero: false,
    overCount: 99,
}
export default Badge
