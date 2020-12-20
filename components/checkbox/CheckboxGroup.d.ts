import React from 'react';
import './style.scss';
export interface CheckboxGroupProps {
    options: {
        label: string;
        value: string;
    }[];
    onChange?: (name: string, value: string[]) => void;
    value?: string[];
    maxLen?: number;
    name?: string;
}
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
