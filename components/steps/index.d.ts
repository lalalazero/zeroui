import React from 'react';
import './style.scss';
export interface StepProps {
    title?: string;
    desc?: string;
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
