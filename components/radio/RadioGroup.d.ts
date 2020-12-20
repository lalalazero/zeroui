import React from 'react';
import './style.scss';
export interface RadioGroupProps {
    options: {
        label: string;
        value: string;
    }[];
    name?: string;
    onChange?: (checked: string) => void;
    checked?: string;
}
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
