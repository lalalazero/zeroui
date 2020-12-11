import React, { ReactNode } from 'react';
import { ICON } from '../icon/Icon';
import './style.scss';
declare type EventHandler = (name: string, value: string) => void;
declare type FilterdProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name' | 'onInput' | 'size' | 'onKeyDown' | 'prefix'>;
export interface TextInputProps extends FilterdProps {
    onChange?: EventHandler;
    onPressEnter?: () => void;
    onInput?: EventHandler;
    name: string;
    value?: string;
    size?: 'default' | 'large' | 'small';
    icon?: ICON | React.ComponentType<any>;
    prefix?: ReactNode;
    suffix?: ReactNode;
    label?: string;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
