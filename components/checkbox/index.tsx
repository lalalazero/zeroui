import React, { useState } from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const prefix = 'zeroUI-checkbox'

interface CheckBoxProps {
    name?: string
    checked?: boolean
    onChange?: (name: string, checked: boolean) => void
    disabled?: boolean
}
const Checkbox: React.FC<CheckBoxProps> = (props = {}) => {
    const { disabled = false } = props
    const [checked, setChecked] = useState(
        props.checked === undefined || props.checked === null
            ? false
            : props.checked
    )

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const newCheck = event.target.checked
        setChecked(newCheck)
        props.onChange && props.onChange(props.name || '', newCheck)
    }

    return (
        <span
            className={classname(prefix + '-wrapper')}
            data-disabled={disabled.valueOf()}
        >
            <input
                type="checkbox"
                className={classname(prefix)}
                name={props.name}
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
            ></input>
            <label
                htmlFor={props.name}
                className={classname(prefix + '-label')}
            >
                {props.children}
            </label>
        </span>
    )
}

export default Checkbox
