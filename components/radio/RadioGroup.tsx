import React, { useState } from 'react'
import { classname } from '../_util/classes'
import Radio from './index'
import './style.scss'

const PREFIX = 'zeroUI-radio-group'

export interface RadioGroupProps {
    options: { label: string; value: string }[]
}

const RadioGroup: React.FC<RadioGroupProps> = (props = { options: [] }) => {
    const [checkedValue, setCheckedValue] = useState<string>('')
    const handleChange = (checkedItem: string, checked: boolean) => {
        if (checked) {
            setCheckedValue(checkedItem)
        }
    }
    return (
        <div className={classname(PREFIX)}>
            {props.options.map((option) => (
                <Radio
                    key={option.value}
                    checked={option.value === checkedValue}
                    onChange={(name, checked) =>
                        handleChange(option.value, checked)
                    }
                >
                    {option.label}
                </Radio>
            ))}
        </div>
    )
}

export default RadioGroup
