import React from 'react';
import './style.scss';
interface CheckBoxProps {
    name?: string;
    checked?: boolean;
    onChange?: (name: string, checked: boolean) => void;
    disabled?: boolean;
}
declare const Checkbox: React.FC<CheckBoxProps>;
export default Checkbox;
