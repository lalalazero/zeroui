import React, { CSSProperties, HTMLProps } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
import './Row.scss'

const scopedClassName = scopedClassMaker('zeroUI-row')
const sc = scopedClassName

export interface RowProps extends HTMLProps<HTMLDivElement> {
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around', 
    gutter?: number,
    align?: 'top' | 'middle' | 'bottom'
}

const Row: React.FC<RowProps> = (props) => {
    const { justify, gutter, className, style, align, ...restProps } = props
    const clsSwitch = makeClassSwitchs({
        [`justify-${justify}`]: {
            useKey: true
        },
        [`align-${align}`]: {
            useKey: true
        }
    })
    const styleObj = gutter ? { marginLeft: - gutter / 2, marginRight: - gutter / 2} : {}
    const mergeStyle = Object.assign({}, style, styleObj)
    return (
        <GutterContext.Provider value={gutter}>
            <div {...restProps} className={sc(clsSwitch, className)} style={mergeStyle} >
                { props.children }
            </div>
        </GutterContext.Provider>
        
    )
}

Row.defaultProps = {
    justify: 'start'
}

export default Row;