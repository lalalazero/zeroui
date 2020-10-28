import React from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-input')
const sc = scopedClassName

type EventHandler = (name: string, value: string) => void

// type FilterdProps = Omit<
//     InputHTMLAttributes<HTMLInputElement>,
//     'onChange' | 'name' | 'onInput'
// >

export interface TextInputProps {
    onChange?: EventHandler
    onPressEnter?: () => void
    onInput?: EventHandler
    name: string
    value?: string
    size?: 'default' | 'large' | 'small'
}

const TextInput: React.FC<TextInputProps> = (
    props = {
        name: '',
        value: '',
        size: 'default',
    }
) => {
    const { name, value, size } = props
    const clsSwitchObj = makeClassSwitchs({
        size,
    })
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        props.onChange && props.onChange(props.name, event.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler = (event) => {
        const { keyCode } = event
        if (keyCode === 13 || keyCode === 108) {
            props.onPressEnter && props.onPressEnter()
        }
    }
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        props.onInput && props.onInput(props.name, event.target.value)
    }
    return (
        <input
            className={sc(clsSwitchObj)}
            autoComplete="off"
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            name={name}
        ></input>
    )
}

TextInput.defaultProps = {
    name: '',
    value: '',
    size: 'default',
}

export default TextInput
