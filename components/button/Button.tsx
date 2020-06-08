import React from 'react';
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import { Icon } from '../index'
import './Button.scss'
import { tuple } from "../_util/type";

const scopedClassName = scopedClassMaker('zeroUI-button')
const sc = scopedClassName

const ButtonTypes = tuple('normal', 'primary', 'dashed',
    'text', 'danger');
export type ButtonType = typeof ButtonTypes[number];
export type ButtonShape = 'circle'
export type ButtonPosition = 'left' | 'right'
export type ButtonSize = 'large' | 'small' | 'default'

export interface ButtonProps {
    type?: ButtonType,
    icon?: string,
    position?: ButtonPosition,
    loading?: boolean,
    className?: string,
    shape?: ButtonShape,
    size?: ButtonSize,
    disabled?: boolean,
    ghost?: boolean,
    block?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = props => {
    const { type, icon, loading, className, shape, position, size, disabled, ghost, block, ...restProps } = props
    const clsSwithes = makeClassSwitchs({
        type, shape, position, size,
        'loading': {
            useKey: loading
        },
        'disabled': {
            useKey: disabled
        },
        'ghost': {
            useKey: ghost
        },
        'block': {
            useKey: block
        },
        'circleLarge': {
            useKey: shape === 'circle' && size === 'large'
        },
        'circleSmall': {
            useKey: shape === 'circle' && size === 'small'
        }
    })
    const nativeProps = { disabled, ...restProps }
    return (
        <button className={sc(clsSwithes, className)}  {...nativeProps}>
            {
                loading ? <Icon name='loading'></Icon> : ''
            }
            {
                icon ? <Icon name={icon}></Icon> : ''
            }
            <div className={sc('content')}>
                {props.children}
            </div>
        </button>
    )
}

Button.defaultProps = {
    type: 'normal',
    position: 'left'
}
export default Button