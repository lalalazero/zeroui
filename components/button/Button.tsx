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
export type ButtonShape = 'circle' | 'round'
export type ButtonPosition = 'left' | 'right'

export interface ButtonProps {
    type?: ButtonType,
    icon?: string,
    position?: ButtonPosition,
    loading?: boolean,
    className?: string,
    shape?: ButtonShape
}

const Button: React.FunctionComponent<ButtonProps> = props => {
    const { type, icon, loading, className, shape, position, ...restProps } = props
    const clsSwithes = makeClassSwitchs({ type, shape, position })
    return (
        <button className={sc(clsSwithes, className)} {...restProps}>
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
    shape: 'round',
    position: 'left'
}
export default Button