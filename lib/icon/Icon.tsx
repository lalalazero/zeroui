import React from 'react'
import './importIcons'
import './Icon.scss'
import { scopedClassMaker } from '../helpers/classes'

const scopedClassName = scopedClassMaker('zeroUI-icon')
const sc = scopedClassName

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return (
        <svg className={sc('', className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}

export default Icon;