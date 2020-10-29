import React from 'react';
import './style.scss';
interface OptionProps {
    title: string;
    value: string;
}
export interface SelectProps {
    name?: string;
    value?: string | OptionProps;
    options: OptionProps[];
    multiple?: boolean;
    onSelect?: (item: OptionProps) => void;
}
declare const Select: React.FC<SelectProps>;
export default Select;
