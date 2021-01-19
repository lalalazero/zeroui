import React from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-menu-item'

const MenuItem: React.FC<any> = (props) => {
    return <div className={classname(PREFIX)}>{props.children}</div>
}

export default MenuItem
