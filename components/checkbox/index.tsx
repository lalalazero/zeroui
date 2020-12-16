import React, { useEffect, useState } from 'react'
import { classname } from '../_util/classes'
import CheckboxGroup from './CheckboxGroup'
import './style.scss'

const prefix = 'zeroUI-checkbox'

export interface CheckboxInterface extends React.FC<CheckBoxProps> {
    Group: typeof CheckboxGroup
}

interface CheckBoxProps {
    name?: string
    checked?: boolean
    onChange?: (name: string, checked: boolean) => void
    disabled?: boolean
    indeterminate?: boolean
}
const Checkbox: CheckboxInterface = (props = {}) => {
    const { disabled = false } = props
    const [checked, setChecked] = useState(
        props.checked === undefined || props.checked === null
            ? false
            : props.checked
    )

    useEffect(() => {
        if (typeof props.checked === 'boolean') {
            setChecked(props.checked)
        }
    }, [props.checked])

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
                ref={(ref) => {
                    if (ref && typeof props.indeterminate === 'boolean') {
                        ref.indeterminate = props.indeterminate
                    }
                }}
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

Checkbox.Group = CheckboxGroup

export default Checkbox
