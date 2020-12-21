import React, { CSSProperties } from 'react';
import RadioGroup from './RadioGroup';
import './style.scss';
export interface RadioProps {
    name?: string;
    value?: string;
    checked?: boolean;
    onChange?: (name: string, value: string, checked: boolean) => void;
    style?: CSSProperties;
    disabled?: boolean;
}
export interface RadioInterface extends React.FC<RadioProps> {
    Group: typeof RadioGroup;
}
declare const Radio: RadioInterface;
export default Radio;
