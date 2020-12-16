import React, { HTMLProps } from 'react'
import { classname } from '../_util/classes'
import GutterContext from './GutterContext'
import './Row.scss'

const prefix = 'zeroUI-row'

export interface RowProps extends HTMLProps<HTMLDivElement> {
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
    gutter?: number
    align?: 'top' | 'middle' | 'bottom'
    direction?: 'horizontal' | 'vertical'
}

const Row: React.FC<RowProps> = (props) => {
    const {
        justify,
        gutter,
        className,
        style,
        align,
        direction = 'horizontal',
        ...restProps
    } = props

    const classes = classname(
        className,
        prefix,
        `${prefix}-justify-${justify}`,
        `${prefix}-align-${align}`,
        `${prefix}-direction-${direction}`
    )
    const styleObj = gutter
        ? { marginLeft: -gutter / 2, marginRight: -gutter / 2 }
        : {}
    const mergeStyle = Object.assign({}, style, styleObj)
    return (
        <GutterContext.Provider value={gutter}>
            <div {...restProps} className={classes} style={mergeStyle}>
                {props.children}
            </div>
        </GutterContext.Provider>
    )
}

Row.defaultProps = {
    justify: 'start',
    align: 'top',
}

export default Row
