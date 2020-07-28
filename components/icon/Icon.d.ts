import React from 'react';
import './Icon.scss';
export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
