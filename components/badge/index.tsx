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
                    {(count !== 0 || (count === 0 && showZero)) && (
                        <span
                            className={
                                isCustom
                                    ? classname(PREFIX + '-custom')
                                    : classname(PREFIX)
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
