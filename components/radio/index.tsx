import React, { ChangeEventHandler, useState } from 'react'
import { classname } from '../_util/classes'
import RadioGroup from './RadioGroup'
import './style.scss'

const PREFIX = 'zeroUI-radio'

export interface RadioProps {
    name?: string
    checked?: boolean
    onChange?: (name: string, checked: boolean) => void
}

export interface RadioInterface extends React.FC<RadioProps> {
    Group: typeof RadioGroup
}

const Radio: RadioInterface = (props) => {
    const [checked, setChecked] = useState(false)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <span className={classname(PREFIX + '-wrapper')}>
            <input
                type="radio"
                checked={checked}
                className={classname(PREFIX)}
                onChange={handleChange}
            />
            <label htmlFor={props.name}>{props.children}</label>
        </span>
    )
}

Radio.Group = RadioGroup

export default Radio
