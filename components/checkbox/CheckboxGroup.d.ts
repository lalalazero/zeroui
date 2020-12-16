import React from 'react';
import './style.scss';
interface CheckboxGroupProps {
    options: {
        label: string;
        value: string;
    }[];
    onChange?: (value: string[]) => void;
    value?: string[];
}
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
