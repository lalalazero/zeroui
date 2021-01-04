import React, { CSSProperties, useMemo } from 'react'
import { isNumber } from '../_util'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-badge'

export interface BadgeProps extends CSSProperties {
    count?: number
    className?: string
    showZero?: boolean
    overCount?: number
}

const Badge: React.FC<BadgeProps> = (props) => {
    const { className, children, showZero, overCount, count, ...style } = props

    const isSolo = !children

    const isCustom = !isNumber(count)

    const isOvered =
        isNumber(count) &&
        isNumber(overCount) &&
        (count as number) > (overCount as number)

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

    const shouldRenderIcon = count !== 0 || (count === 0 && showZero)

    return (
        <div className={classname(PREFIX + '-wrapper')}>
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
                        <span
                            className={
                                isCustom
                                    ? classname(PREFIX + '-custom', {
                                          [`${PREFIX}-over-max`]: isOvered,
                                      })
                                    : classname(PREFIX, {
                                          [`${PREFIX}-over-max`]: isOvered,
                                      })
                            }
                        >
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
