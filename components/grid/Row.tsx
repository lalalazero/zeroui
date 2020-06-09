import React from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import './Row.scss'

const scopedClassName = scopedClassMaker('zeroUI-row')
const sc = scopedClassName

const Row: React.FC<{ align?: 'left' | 'right' | 'center' }> = (props) => {
    const { align } = props
    const clsSwitch = makeClassSwitchs({
        'align-left': {
            useKey: align === 'left'
        },
        'align-center': {
            useKey: align === 'center'
        },
        'align-right': {
            useKey: align === 'right'
        }
    })
    return (
        <div className={sc(clsSwitch)}>
            {props.children}
        </div>
    )
}

Row.defaultProps = {
    align: 'left'
}

export default Row;