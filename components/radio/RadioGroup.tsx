import React, { ReactElement, useEffect, useState } from 'react'
import { classname } from '../_util/classes'
import Radio from './index'
import './style.scss'

const PREFIX = 'zeroUI-radio-group'

const DEFAULT_GROUP_NAME = 'zeroui-radio-group'

export interface RadioGroupProps {
    options: { label: string; value: string }[]
    name?: string
    onChange?: (checked: string) => void
    checked?: string
}

const RadioGroup: React.FC<RadioGroupProps> = (props = { options: [] }) => {
    const [checkedValue, setCheckedValue] = useState<string>('')
    const handleChange = (checkedItem: string, checked: boolean) => {
        if (checked) {
            setCheckedValue(checkedItem)
            props.onChange && props.onChange(checkedItem)
        }
    }

    useEffect(() => {
        setCheckedValue(props.checked || '')
    }, [props.checked])

    return (
        <div className={classname(PREFIX)}>
            {props.options.map((option) => (
                <Radio
                    key={option.value}
                    name={props.name || DEFAULT_GROUP_NAME}
                    checked={option.value === checkedValue}
                    onChange={(name, checked) =>
                        handleChange(option.value, checked)
                    }
                >
                    {option.label}
                </Radio>
            ))}
            {props.options.length === 0 &&
                React.Children.map(props.children, (child: ReactElement) =>
                    React.cloneElement(child, {
                        name: props.name || DEFAULT_GROUP_NAME,
                    })
                )}
        </div>
    )
}

export default RadioGroup
