import React from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
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
        <GutterContext.Consumer>
            {
                (gutter) => {
                    let styleObj = gutter ? { paddingLeft: gutter / 2, paddingRight: gutter / 2 } : {}
                    return (
                        <div className={sc(clsSwitch)} style={styleObj}>
                            { props.children }
                        </div>
                    )
                }
            }
            
        </GutterContext.Consumer>
        
    )
}

export default Col;