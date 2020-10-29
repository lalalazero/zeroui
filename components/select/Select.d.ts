import React from 'react';
import './style.scss';
interface OptionProps {
    title: string;
    value: string;
}
export interface SelectProps {
    name?: string;
    value?: string;
    option?: OptionProps[];
    multiple?: boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
