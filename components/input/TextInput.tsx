import React, { ReactNode, useEffect, useState } from 'react'
import Icon from '../icon/Icon'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-input')
const sc = scopedClassName

type EventHandler = (name: string, value: string) => void

type FilterdProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'name' | 'onInput' | 'size' | 'onKeyDown' | 'prefix'
>

export interface TextInputProps extends FilterdProps {
    onChange?: EventHandler
    onPressEnter?: () => void
    onInput?: EventHandler
    name: string
    value?: string
    size?: 'default' | 'large' | 'small'
    icon?: string | React.ComponentType<any>
    prefix?: ReactNode
    suffix?: ReactNode
    label?: string
}

const TextInput: React.FC<TextInputProps> = (
    props = {
        name: '',
        value: '',
        size: 'default',
    }
) => {
    const [inputValue, setInputValue] = useState(props.value || '')
    useEffect(() => {
        setInputValue(props.value || '')
    }, [props.value])
    const {
        name,
        size,
        icon,
        onPressEnter,
        onInput,
        prefix = '',
        suffix = '',
        label = '',
        ...rest
    } = props
    const clsSwitchObj = makeClassSwitchs({
        size,
        'has-icon': {
            useKey: !!icon,
        },
    })
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        props.onChange && props.onChange(props.name, event.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler = (event) => {
        const { keyCode } = event
        if (keyCode === 13 || keyCode === 108) {
            onPressEnter && onPressEnter()
        }
    }
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
        onInput && onInput(props.name, event.target.value)
    }

    return (
        <span className={sc('wrapper')}>
            {label && <label htmlFor={props.name}>{label}</label>}
            {prefix ? (
                typeof prefix === 'object' ? (
                    prefix
                ) : (
                    <label>{prefix}</label>
                )
            ) : null}
            <input
                {...rest}
                className={sc(clsSwitchObj)}
                autoComplete="off"
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
                name={name}
            ></input>
            {icon && typeof icon === 'string' ? (
                <Icon name={icon as string}></Icon>
            ) : (
                <>{icon}</>
            )}
            {suffix ? (
                typeof suffix === 'object' ? (
                    suffix
                ) : (
                    <label>{suffix}</label>
                )
            ) : null}
        </span>
    )
}

TextInput.defaultProps = {
    name: '',
    value: '',
    size: 'default',
}

export default TextInput