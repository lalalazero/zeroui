import React from 'react'
import { classname } from '../_util/classes'
import './ButtonGroup.scss'

const prefix = 'zeroUI-button-group'

const ButtonGroup: React.FunctionComponent<{ className?: string }> = ({
    className,
    ...rest
}) => {
    return <div className={classname(className, prefix)}>{rest.children}</div>
}

export default ButtonGroup
