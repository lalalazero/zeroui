import React, { useEffect, useState } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-rate'

export interface RateProps {
    defaultValue?: number
    value?: number
    disabled?: boolean
    allowHalf?: boolean
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
        setValue(index)
        if (value === index) {
            setValue(null)
            setRate(-1)
        }
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
                <Icon name="star" />
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

export default Rate
