import React, { HTMLAttributes } from 'react';
import { ICON } from '../icon/Icon';
import './Button.scss';
declare const ButtonTypes: ["normal", "primary", "dashed", "text", "danger"];
export declare type ButtonType = typeof ButtonTypes[number];
export declare type ButtonShape = 'circle';
export declare type ButtonPosition = 'left' | 'right';
export declare type ButtonSize = 'large' | 'small' | 'default';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    icon?: ICON;
    position?: ButtonPosition;
    loading?: boolean;
    className?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    disabled?: boolean;
    ghost?: boolean;
    block?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
