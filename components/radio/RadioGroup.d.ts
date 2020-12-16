import React from 'react';
import './style.scss';
export interface RadioGroupProps {
    options: {
        label: string;
        value: string;
    }[];
}
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
