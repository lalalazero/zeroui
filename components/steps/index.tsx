import React from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-steps'

const Steps: React.FC<any> = (props) => {
    return <div className={classname(PREFIX)}>{props.children}</div>
}

export default Steps
