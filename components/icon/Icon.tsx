import React from 'react'
import './importIcons'
import './Icon.scss'
import '../icons/icons.js'

import { scopedClassMaker } from '../_util/classes'

const scopedClassName = scopedClassMaker('zeroUI-icon')
const sc = scopedClassName

export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return (
        <svg className={sc('', className)} {...restProps}>
            <use xlinkHref={`#icon-${name}`}></use>
        </svg>
    )
}

export default Icon;