import React, { KeyboardEvent, ReactNode, useEffect, useState } from 'react'
import Icon, { ICON } from '../icon/Icon'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-input'

type EventHandler = (name: string, value: string) => void

type FilterdProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'name' | 'onInput' | 'size' | 'onKeyDown' | 'prefix'
>

export interface TextInputProps extends FilterdProps {
    onChange?: EventHandler
    onPressEnter?: (event: KeyboardEvent) => void
    onInput?: EventHandler
    name: string
    value?: string
    defaultValue?: string
    size?: 'default' | 'large' | 'small'
    icon?: ICON | React.ComponentType<any>
    prefix?: ReactNode
    suffix?: ReactNode
    label?: string
    addonBefore?: ReactNode
    addonAfter?: ReactNode
}

const TextInput: React.FC<TextInputProps> = (
    props = {
        name: '',
        value: '',
        size: 'default',
    }
) => {
    const {
        name,
        size,
        icon,
        prefix = '',
        suffix = '',
        label = '',
        defaultValue = '',
        addonAfter,
        addonBefore,
        onPressEnter,
        ...rest
    } = props

    const [inputValue, setInputValue] = useState(props.value || '')

    useEffect(() => {
        if (defaultValue) {
            setInputValue(defaultValue)
        }
    }, [])

    useEffect(() => {
        setInputValue(props.value || '')
    }, [props.value])

    const classes = classname(PREFIX, `${PREFIX}-${size}`, {
        [`${PREFIX}-has-icon`]: !!icon,
    })
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        props.onChange && props.onChange(props.name, event.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler = (event) => {
        const { keyCode } = event
        if (keyCode === 13 || keyCode === 108) {
            onPressEnter && onPressEnter(event)
        }
    }
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
        props.onInput && props.onInput(props.name, event.target.value)
    }

    return (
        <span className={classname(PREFIX + '-wrapper')}>
            {label && <label htmlFor={props.name}>{label}</label>}
            {addonBefore}
            {prefix && (
                <span className={PREFIX + '-prefix-wrapper'}>
                    {typeof prefix === 'object' ? (
                        prefix
                    ) : (
                        <label>{prefix}</label>
                    )}
                </span>
            )}

            <input
                {...rest}
                className={classes}
                autoComplete="off"
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
                name={name}
            ></input>
            {icon && typeof icon === 'string' ? (
                <Icon name={icon}></Icon>
            ) : (
                <>{icon}</>
            )}
            {suffix && (
                <span className={PREFIX + '-suffix-wrapper'}>
                    {typeof suffix === 'object' ? (
                        suffix
                    ) : (
                        <label>{suffix}</label>
                    )}
                </span>
            )}
            {addonAfter}
        </span>
    )
}

TextInput.defaultProps = {
    name: '',
    value: '',
    size: 'default',
}

export default TextInput
