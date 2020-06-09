import React from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import './Col.scss'

const scopedClassName = scopedClassMaker('zeroUI-col')
const sc = scopedClassName

const Col: React.FC<{ span: number }> = (props) => {
    const { span } = props
    const clsSwitch = makeClassSwitchs({
        [`span-${span}`]: {
            useKey: true
        }
    })
    return (
        <div className={sc(clsSwitch)}>
            {props.children}
        </div>
    )
}

export default Col;