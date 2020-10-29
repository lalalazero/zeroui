import React from 'react';
import './style.scss';
declare type EventHandler = (name: string, value: string) => void;
declare type FilterdProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name' | 'onInput' | 'size' | 'onKeyDown'>;
export interface TextInputProps extends FilterdProps {
    onChange?: EventHandler;
    onPressEnter?: () => void;
    onInput?: EventHandler;
    name: string;
    value?: string;
    size?: 'default' | 'large' | 'small';
    icon?: string | React.ComponentType<any>;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
