import React from 'react';
import './style.scss';
export interface RadioGroupProps {
    options: {
        label: string;
        value: string;
    }[];
    name?: string;
    onChange?: (name: string, checked: string) => void;
    checked?: string;
    disabled?: boolean;
}
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
