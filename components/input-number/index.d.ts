import React from 'react';
import './style.scss';
export declare const NumberInputTypeEnums: readonly ["default", "type2"];
export declare type NumberInputType = typeof NumberInputTypeEnums[number];
export interface NumberInputProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    value?: number;
    name?: string;
    onChange?: (name: string, value: number) => void;
    disabled?: boolean;
    type?: NumberInputType;
}
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
