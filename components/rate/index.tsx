import React from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-rate'

const Rate: React.FC<any> = () => {
    return (
        <div className={classname(PREFIX)}>
            <span>五星</span>
        </div>
    )
}

export default Rate
