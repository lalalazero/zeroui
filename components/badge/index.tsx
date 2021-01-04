import React from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-badge'

const Badge: React.FC<any> = (props) => {
    return <div className={classname(PREFIX)}>{props.children}</div>
}

export default Badge
