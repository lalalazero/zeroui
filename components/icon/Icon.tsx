import React from 'react'
import { classname } from '../_util/classes'
// import './importIcons'
import './Icon.scss'
// import '../icons/icons.js'

export const ICONS = [
    'like',
    'edit',
    'copy',
    'info',
    'error',
    'loading',
    'alipay',
    'wechat',
    'code-open',
    'code-close',
    'left',
    'right',
    'down',
    'setting',
    'emptysearch',
    'filled-up',
    'filled-down',
    'filled-left',
    'filled-right',
    'download',
    'next-double',
    'prev-double',
    'search',
    'zoom-in',
    'zoom-out',
    'close',
    'rotate-left',
    'rotate-right',
    'check',
    'check-filled',
    'happy',
    'joy',
] as const

const scriptElement = document.createElement('script')
scriptElement.src = 'http://at.alicdn.com/t/font_1353479_2q42sxdhtgu.js'
document.body.appendChild(scriptElement)

const prefix = 'zeroUI-icon'

export type ICON = typeof ICONS[number]
export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: ICON
}
const Icon: React.FunctionComponent<IconProps> = ({
    className,
    name,
    ...restProps
}) => {
    return (
        <svg className={classname(className, prefix)} {...restProps}>
            <use xlinkHref={`#icon-${name}`}></use>
        </svg>
    )
}

export default Icon
