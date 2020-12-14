import React, { MouseEvent } from 'react';
import './style.scss';
interface SwitchProps {
    size?: 'default' | 'large' | 'small';
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onClick?: (name: string, checked: boolean, Event: MouseEvent) => void;
    onChange?: (name: string, checked: boolean) => void;
    loading?: boolean;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
