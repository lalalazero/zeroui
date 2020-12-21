import React, {
    ChangeEventHandler,
    CSSProperties,
    useEffect,
    useRef,
    useState,
} from 'react'
import { classname } from '../_util/classes'
import RadioGroup from './RadioGroup'
import './style.scss'

const PREFIX = 'zeroUI-radio'

export interface RadioProps {
    name?: string
    value?: string
    checked?: boolean
    onChange?: (name: string, value: string, checked: boolean) => void
    style?: CSSProperties
    disabled?: boolean
}

export interface RadioInterface extends React.FC<RadioProps> {
    Group: typeof RadioGroup
}

const Radio: RadioInterface = (props) => {
    const ref = useRef<HTMLInputElement>(null)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (typeof props.checked === 'boolean') {
            setChecked(props.checked)
            if (ref.current) {
                ref.current.checked = props.checked
            }
        }
    }, [props.checked])

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newCheck = event.target.checked
        setChecked(newCheck)
        props.onChange &&
            props.onChange(props.name || '', props.value || '', newCheck)
    }

    return (
        <span className={classname(PREFIX + '-wrapper')} style={props.style}>
            <input
                ref={ref}
                type="radio"
                checked={checked}
                className={classname(PREFIX)}
                onChange={handleChange}
                name={props.name}
                data-checked={checked}
                disabled={props.disabled}
            />
            <label htmlFor={props.name} className={PREFIX + '-label'}>
                {props.children}
            </label>
        </span>
    )
}

Radio.Group = RadioGroup

export default Radio
