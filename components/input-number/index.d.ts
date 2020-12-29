import React from 'react';
import './style.scss';
export interface NumberInputProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    value?: number;
    name?: string;
    onChange?: (name: string, value: number) => void;
}
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
