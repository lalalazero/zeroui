import React, { ReactNode } from 'react';
import './style.scss';
export interface StepProps {
    title?: string;
    desc?: string;
    icon?: ReactNode;
}
declare const Step: React.FC<StepProps & {
    current?: number;
    idx: number;
}>;
export interface StepsProps {
    current?: number;
    className?: string;
}
export interface StepsInterface extends React.FC<StepsProps> {
    Step: typeof Step;
}
declare const Steps: StepsInterface;
export default Steps;
