import React from 'react';
import RadioGroup from './RadioGroup';
import './style.scss';
export interface RadioProps {
    name?: string;
    checked?: boolean;
    onChange?: (name: string, checked: boolean) => void;
}
export interface RadioInterface extends React.FC<RadioProps> {
    Group: typeof RadioGroup;
}
declare const Radio: RadioInterface;
export default Radio;
