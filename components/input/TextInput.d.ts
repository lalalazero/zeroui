import React from 'react';
import './style.scss';
declare type EventHandler = (name: string, value: string) => void;
export interface TextInputProps {
    onChange?: EventHandler;
    onPressEnter?: () => void;
    onInput?: EventHandler;
    name: string;
    value?: string;
    size?: 'default' | 'large' | 'small';
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
