import React, { useEffect, useRef, useState } from 'react'
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
    const ref = useRef<HTMLInputElement>(null)
    const { disabled = false } = props
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (typeof props.checked === 'boolean') {
            setChecked(props.checked)
            if (ref.current) {
                ref.current.checked = props.checked
            }
        }
    })

    useEffect(() => {
        if (typeof props.indeterminate === 'boolean' && ref.current) {
            ref.current.indeterminate = props.indeterminate
        }
    }, [props.indeterminate])

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
                ref={ref}
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

Checkbox.Group = CheckboxGroup

export default Checkbox
