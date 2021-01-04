import React, { ReactNode, useEffect, useState } from 'react'
import { Icon, Tooltip } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-rate'

export interface RateProps {
    defaultValue?: number
    value?: number
    disabled?: boolean
    allowHalf?: boolean
    allowClear?: boolean
    tooltips?: string[]
    charactor?: string | ((index: number) => ReactNode)
    onChange?: (name: string, value: number | null) => void
    name?: string
}

const Rate: React.FC<RateProps> = (props) => {
    const [rate, setRate] = useState<number>(0)
    const [value, setValue] = useState<any>(null)

    const handleMouseEnter = (index: number) => {
        if (props.disabled) return
        setRate(index)
    }

    useEffect(() => {
        if (props.defaultValue !== undefined) {
            setValue(props.defaultValue)
        }
    }, [])

    useEffect(() => {
        if (props.value !== undefined) {
            setValue(props.value)
        }
    }, [props.value])

    const handleMouseLeave = () => {
        setRate(0)
    }

    const handleRate = (index: number) => {
        if (props.disabled) return
        let newValue: number | null = index
        if (value === index && props.allowClear) {
            newValue = null
            setRate(-1)
        }

        setValue(newValue)
        props.onChange && props.onChange(props.name || '', newValue)
    }

    const renderIcon = (idx: number) => {
        return props.charactor ? (
            typeof props.charactor === 'string' ? (
                <span className={classname(PREFIX + '-custom-icon')}>
                    {props.charactor}
                </span>
            ) : (
                <span className={classname(PREFIX + '-custom-icon')}>
                    {props.charactor(idx)}
                </span>
            )
        ) : (
            <Icon name="star" />
        )
    }

    const stars = new Array(5).fill(1).map((item, idx) => {
        const stared = rate !== 0 ? rate >= idx + 1 : value >= idx + 1
        return (
            <span
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx + 1)}
                onClick={() => handleRate(idx + 1)}
                className={classname(PREFIX + '-star', {
                    [`${PREFIX}-star-full`]: rate !== -1 && stared,
                    [`${PREFIX}-disabled`]: props.disabled,
                })}
            >
                {props.tooltips
                    ? props.tooltips[idx] && (
                          <Tooltip title={props.tooltips[idx]}>
                              {renderIcon(idx)}
                          </Tooltip>
                      )
                    : renderIcon(idx)}
            </span>
        )
    })

    const halfStars = new Array(5).fill(1).map((item, idx) => {
        const stared = rate !== 0 ? rate >= idx + 1 : value >= idx + 1
        return (
            <span
                key={idx}
                className={PREFIX + '-half-wrapper'}
                // onMouseEnter={() => handleMouseEnter(idx + 1)}
                // onClick={() => handleRate(idx + 1)}
                // className={classname(PREFIX + '-star', {
                //     [`${PREFIX}-star-full`]: rate !== -1 && stared,
                // })}
            >
                <span
                    onMouseEnter={() => handleMouseEnter(idx + 1)}
                    className={classname(
                        PREFIX + '-star',
                        PREFIX + '-star-first',
                        {
                            [`${PREFIX}-star-full`]: true, //rate !== -1 && stared,
                        }
                    )}
                >
                    <Icon name="star" />
                </span>
                <span
                    className={classname(
                        PREFIX + '-star',
                        PREFIX + '-star-second',
                        {
                            [`${PREFIX}-star-full`]: true, //rate !== -1 && stared,
                        }
                    )}
                >
                    <Icon name="star" />
                </span>
            </span>
        )
    })

    return (
        <div className={classname(PREFIX)} onMouseLeave={handleMouseLeave}>
            {!props.allowHalf && stars}
            {props.allowHalf && halfStars}
        </div>
    )
}

Rate.defaultProps = {
    allowClear: true,
    allowHalf: false,
    disabled: false,
}
export default Rate
