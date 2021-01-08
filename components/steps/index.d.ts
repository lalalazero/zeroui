import React, { ReactNode } from 'react';
import './style.scss';
export interface StepProps {
    title?: string;
    desc?: string;
    icon?: ReactNode;
}
interface InternalStepProps {
    current?: number;
    idx: number;
    onChange?: (idx: number) => void;
}
declare const Step: React.FC<StepProps & InternalStepProps>;
export interface StepsProps {
    current?: number;
    className?: string;
    onChange?: (newStep: number) => void;
}
export interface StepsInterface extends React.FC<StepsProps> {
    Step: typeof Step;
}
declare const Steps: StepsInterface;
export default Steps;
