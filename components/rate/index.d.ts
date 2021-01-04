import React, { ReactNode } from 'react';
import './style.scss';
export interface RateProps {
    defaultValue?: number;
    value?: number;
    disabled?: boolean;
    allowHalf?: boolean;
    allowClear?: boolean;
    tooltips?: string[];
    charactor?: string | ((index: number) => ReactNode);
    onChange?: (name: string, value: number | null) => void;
    name?: string;
}
declare const Rate: React.FC<RateProps>;
export default Rate;
