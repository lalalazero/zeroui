import React from 'react'
import { scopedClassMaker } from '../_util/classes'
import './ButtonGroup.scss'

const scopedClassName = scopedClassMaker('zeroUI-button-group')
const sc = scopedClassName

const ButtonGroup: React.FunctionComponent<{ className?: string }> = ({ className, ...rest }) => {
    return (
        <div className={sc('', className)}>
            { rest.children }
        </div>
    )
}

export default ButtonGroup