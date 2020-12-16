import React, { HTMLAttributes } from 'react'
import { ICON } from '../icon/Icon'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import { tuple } from '../_util/type'
import './Button.scss'

const ButtonTypes = tuple('normal', 'primary', 'dashed', 'text', 'danger')
export type ButtonType = typeof ButtonTypes[number]
export type ButtonShape = 'circle'
export type ButtonPosition = 'left' | 'right'
export type ButtonSize = 'large' | 'small' | 'default'

const prefix = 'zeroUI-button'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType
    icon?: ICON
    position?: ButtonPosition
    loading?: boolean
    className?: string
    shape?: ButtonShape
    size?: ButtonSize
    disabled?: boolean
    ghost?: boolean
    block?: boolean
    onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const {
        type,
        icon,
        loading,
        className,
        shape,
        onClick,
        position,
        size,
        disabled,
        ghost,
        block,
        ...restProps
    } = props

    const nativeProps = { disabled, ...restProps }
    const classes = classname(
        className,
        prefix,
        `${prefix}-${type}`,
        `${prefix}-${position}`,
        `${prefix}-${shape}`,
        `${prefix}-${size}`,
        {
            [`${prefix}-loading`]: loading,
            [`${prefix}-disabled`]: disabled,
            [`${prefix}-ghost`]: ghost,
            [`${prefix}-block`]: block,
            [`${prefix}-circle-large`]: shape === 'circle' && size === 'large',
            [`${prefix}-circle-small`]: shape === 'circle' && size === 'small',
        }
    )

    return (
        <button onClick={onClick} className={classes} {...nativeProps}>
            {loading ? <Icon name="loading"></Icon> : ''}
            {icon && !loading ? <Icon name={icon}></Icon> : ''}
            <div className={classname(prefix + '-content')}>
                {props.children}
            </div>
        </button>
    )
}

Button.defaultProps = {
    type: 'normal',
    position: 'left',
}
export default Button
