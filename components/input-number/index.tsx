import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Button, Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-number-input'

export const NumberInputTypeEnums = ['default', 'type2'] as const

export type NumberInputType = typeof NumberInputTypeEnums[number]

export interface NumberInputProps {
    min?: number
    max?: number
    step?: number
    defaultValue?: number
    value?: number
    name?: string
    onChange?: (name: string, value: number) => void
    disabled?: boolean
    type?: NumberInputType
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
    const { min, max, step } = props
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        props.defaultValue !== undefined && setValue(props.defaultValue)
    }, [])

    useEffect(() => {
        props.value !== undefined && setValue(props.value)
    }, [props.value])

    const [value, setValue] = useState<any>()
    const [fakeFocused, setFakeFocused] = useState(false)

    const isInValidRange = (number: number) => {
        let isLessThanMax = true
        let isGreaterThanMin = true
        if (typeof props.max === 'number') {
            isLessThanMax = number <= props.max
        }

        if (typeof props.min === 'number') {
            isGreaterThanMin = number >= props.min
        }

        return isLessThanMax && isGreaterThanMin
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleInputBlur = (event: ChangeEvent<HTMLInputElement>) => {
        let number: any = parseInt(event.target.value)
        if (!isNaN(number)) {
            if (!isInValidRange(number)) {
                let deltaMax = 0
                let deltaMin = 0
                if (typeof props.max === 'number') {
                    deltaMax = props.max
                } else if (typeof props.min === 'number') {
                    deltaMin = props.min
                }

                if (Math.abs(deltaMax - number) > Math.abs(deltaMin - number)) {
                    number = props.min
                } else {
                    number = props.max
                }
            }
        }
        setValue(number)
        props.onChange && props.onChange(props.name || '', number)
    }

    const handlePlus = () => {
        if (props.disabled) return

        const newValue = parseInt(value) + (props.step as number)
        if (typeof props.max !== 'number' || props.max >= newValue) {
            setValue(newValue)
            props.onChange && props.onChange(props.name || '', newValue)
        }
    }

    const handleMinus = () => {
        if (props.disabled) return

        const newValue = parseInt(value) - (props.step as number)
        if (typeof props.min !== 'number' || props.min <= newValue) {
            setValue(newValue)

            props.onChange && props.onChange(props.name || '', newValue)
        }
    }

    const handleFocus = useCallback(() => {
        props.type === 'default' && setFakeFocused(true)
    }, [props.type])

    const handleBlur = useCallback(() => {
        props.type === 'default' && setFakeFocused(false)
    }, [])

    const plusDisable =
        props.disabled ||
        (typeof props.max === 'number' ? props.max <= value : false)
    const minusDisable =
        props.disabled ||
        (typeof props.min === 'number' ? props.min >= value : false)

    const defaultHandler = (
        <span className={PREFIX + '-handler-lane'}>
            <span
                className={classname(
                    PREFIX + '-handler-plus',
                    PREFIX + '-handler',
                    {
                        [`${PREFIX}-handler-disabled`]: plusDisable,
                    }
                )}
                onClick={handlePlus}
            >
                <Icon name="filled-up" />
            </span>
            <span
                className={classname(
                    PREFIX + '-handler-minus',
                    PREFIX + '-handler',
                    {
                        [`${PREFIX}-handler-disabled`]: minusDisable,
                    }
                )}
                onClick={handleMinus}
            >
                <Icon name="filled-down" />
            </span>
        </span>
    )

    const type2Handler = {
        left: (
            <Button
                size="small"
                type="text"
                style={{ marginRight: 5 }}
                onClick={handleMinus}
                disabled={minusDisable}
            >
                <Icon name="minus" />
            </Button>
        ),
        right: (
            <Button
                size="small"
                type="text"
                style={{ marginLeft: 5 }}
                onClick={handlePlus}
                disabled={plusDisable}
            >
                <Icon name="plus" />
            </Button>
        ),
    }

    return (
        <span
            className={classname(PREFIX + '-wrapper', {
                [`${PREFIX}-wrapper-disabled`]: props.disabled === true,
            })}
            onFocus={handleFocus}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
        >
            {props.type === 'type2' && type2Handler.left}
            <input
                ref={ref}
                type="number"
                name={props.name || ''}
                className={PREFIX}
                min={min}
                max={max}
                step={step}
                onChange={handleChange}
                onBlur={handleInputBlur}
                value={value || ''}
                fake-focus={fakeFocused.toString()}
                disabled={props.disabled}
            />
            {props.type === 'default' && defaultHandler}
            {props.type === 'type2' && type2Handler.right}
        </span>
    )
}

NumberInput.defaultProps = {
    step: 1,
    defaultValue: 1,
    type: 'default',
}

export default NumberInput
