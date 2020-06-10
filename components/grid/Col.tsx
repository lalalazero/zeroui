import React, { useContext } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
import './Col.scss'

const scopedClassName = scopedClassMaker('zeroUI-col')
const sc = scopedClassName

const Col: React.FC<{ span: number }> = (props) => {
    const { span } = props
    const gutter = useContext(GutterContext)
    const clsSwitch = makeClassSwitchs({
        [`span-${span}`]: {
            useKey: true
        }
    })
    const styleObj = gutter ? { paddingLeft: gutter / 2, paddingRight: gutter / 2 } : {}
    return (    
        <div className={sc(clsSwitch)} style={styleObj}>
            { props.children }
        </div>
    )
}

export default Col;