import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-number-input'

export interface NumberInputProps {
    min?: number
    max?: number
    step?: number
    defaultValue?: number
    value?: number
    name?: string
    onChange?: (name: string, value: number) => void
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const number = parseInt(event.target.value)
        if (!isNaN(number)) {
            setValue(parseInt(event.target.value))
        }

        props.onChange && props.onChange(props.name || '', number)
    }

    const handlePlus = () => {
        const newValue = parseInt(value) + (props.step as number)
        if (!props.max || props.max >= newValue) {
            setValue(newValue)
        }
    }

    const handleMinus = () => {
        const newValue = parseInt(value) - (props.step as number)
        if (!props.min || props.min <= newValue) {
            setValue(newValue)
        }
    }

    const handleFocus = useCallback(() => setFakeFocused(true), [])

    const handleBlur = useCallback(() => {
        setFakeFocused(false)
    }, [])

    const plusDisable = props.max ? props.max <= value : false
    const minusDisable = props.min ? props.min >= value : false

    return (
        <span
            className={PREFIX + '-wrapper'}
            onFocus={handleFocus}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
        >
            <input
                ref={ref}
                type="number"
                name={props.name || ''}
                className={PREFIX}
                min={min}
                max={max}
                step={step}
                onChange={handleChange}
                value={value || ''}
                fake-focus={fakeFocused.toString()}
            />
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
        </span>
    )
}

NumberInput.defaultProps = {
    step: 1,
    defaultValue: 1,
}

export default NumberInput
