import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import './style.scss';
export interface CheckboxInterface extends React.FC<CheckBoxProps> {
    Group: typeof CheckboxGroup;
}
interface CheckBoxProps {
    name?: string;
    checked?: boolean;
    onChange?: (name: string, checked: boolean) => void;
    disabled?: boolean;
    indeterminate?: boolean;
}
declare const Checkbox: CheckboxInterface;
export default Checkbox;
