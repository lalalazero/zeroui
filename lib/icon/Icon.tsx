import React from 'react'
import './importIcons'
import './Icon.scss'
import classnames from '../helpers/classnames'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return (
        <svg className={classnames('zeroUI-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}

export default Icon;