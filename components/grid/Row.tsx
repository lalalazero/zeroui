import React, { CSSProperties, HTMLProps } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
import './Row.scss'

const scopedClassName = scopedClassMaker('zeroUI-row')
const sc = scopedClassName

interface RowProps extends HTMLProps<HTMLDivElement> {
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around', 
    gutter?: number
}

const Row: React.FC<RowProps> = (props) => {
    const { justify, gutter, className, ...restProps } = props
    const clsSwitch = makeClassSwitchs({
        [`justify-${justify}`]: {
            useKey: true
        }
    })
    const styleObj = gutter ? { marginLeft: - gutter / 2, marginRight: - gutter / 2} : {}
    return (
        <GutterContext.Provider value={gutter}>
            <div {...restProps} className={sc(clsSwitch, className)} style={styleObj} >
                { props.children }
            </div>
        </GutterContext.Provider>
        
    )
}

Row.defaultProps = {
    justify: 'start'
}

export default Row;