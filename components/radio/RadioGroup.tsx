import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { classname } from '../_util/classes'
import Radio from './index'
import './style.scss'

const PREFIX = 'zeroUI-radio-group'

const DEFAULT_GROUP_NAME = 'zeroui-radio-group'

export interface RadioGroupProps {
    options: { label: string; value: string }[]
    name?: string
    onChange?: (name: string, checked: string) => void
    checked?: string
}

const RadioGroup: React.FC<RadioGroupProps> = (props = { options: [] }) => {
    const [checkedValue, setCheckedValue] = useState<string>('')
    const handleChange = (
        name: string,
        checkedItem: string,
        checked: boolean
    ) => {
        if (checked) {
            setCheckedValue(checkedItem)
            props.onChange && props.onChange(props.name || '', checkedItem)
        }
    }

    useEffect(() => {
        setCheckedValue(props.checked || '')
    }, [props.checked])

    const customRadio = useMemo(() => {
        if (!props.options || props.options.length === 0) {
            return React.Children.map(props.children, (child: ReactElement) => {
                return React.cloneElement(child, {
                    name: props.name || DEFAULT_GROUP_NAME,
                    onChange: handleChange,
                    checked: child.props.value === checkedValue,
                })
            })
        }

        return ''
    }, [props.options, checkedValue])

    return (
        <div className={classname(PREFIX)}>
            {props.options &&
                props.options.map((option) => (
                    <Radio
                        key={option.value}
                        value={option.value}
                        name={props.name || DEFAULT_GROUP_NAME}
                        checked={option.value === checkedValue}
                        onChange={handleChange}
                    >
                        {option.label}
                    </Radio>
                ))}
            {customRadio}
        </div>
    )
}

export default RadioGroup
