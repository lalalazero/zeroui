import React from 'react';
import './style.scss';
export interface RateProps {
    defaultValue?: number;
    value?: number;
    disabled?: boolean;
}
declare const Rate: React.FC<RateProps>;
export default Rate;
