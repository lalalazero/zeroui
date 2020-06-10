import React from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
import './Row.scss'

const scopedClassName = scopedClassMaker('zeroUI-row')
const sc = scopedClassName

const Row: React.FC<{ align?: 'left' | 'right' | 'center', gutter?: number }> = (props) => {
    const { align, gutter } = props
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
    const styleObj = gutter ? { marginLeft: - gutter / 2, marginRight: - gutter / 2} : {}
    return (
        <GutterContext.Provider value={gutter}>
            <div className={sc(clsSwitch)} style={styleObj}>
                { props.children }
            </div>
        </GutterContext.Provider>
        
    )
}

Row.defaultProps = {
    align: 'left'
}

export default Row;