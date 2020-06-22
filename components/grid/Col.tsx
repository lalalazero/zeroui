import React, { useContext, HTMLProps } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
import './Col.scss'

const scopedClassName = scopedClassMaker('zeroUI-col')
const sc = scopedClassName

export interface ColProps extends HTMLProps<HTMLDivElement> {
    span?: number,
    offset?: number,
    push?: number,
    pull?: number,
    order?: number,
    xs?: number | ColProps,
    sm?: number | ColProps,
    md?: number | ColProps,
    lg?: number | ColProps,
    xl?: number | ColProps,
    xxl?: number | ColProps
}

const Col: React.FC<ColProps> = (props) => {
    const { span, offset, push, pull, className, style, order,
        xs, sm, md, lg, xl, xxl, ...rest } = props
    const gutter = useContext(GutterContext)
    const clsSwitch = makeClassSwitchs({
        [`span-${span}`]: {
            useKey: true
        },
        [`offset-${offset}`]: {
            useKey: true
        },
        [`push-${push}`]: {
            useKey: true
        },
        [`pull-${pull}`]: {
            useKey: true
        },
        [`order-${order}`]: {
            useKey: true
        },
        [`xs-span-${xs}`]: {
            useKey: true
        },
        [`sm-span-${sm}`]: {
            useKey: true
        },
        [`md-span-${md}`]: {
            useKey: true
        },
        [`lg-span-${lg}`]: {
            useKey: true
        },
        [`xl-span-${xl}`]: {
            useKey: true
        },
        [`xxl-span-${xxl}`]: {
            useKey: true
        }
    })
    const styleObj = gutter ? { paddingLeft: gutter / 2, paddingRight: gutter / 2 } : {}
    const mergeStyle = Object.assign({}, style, styleObj)
    return (
        <div {...rest} className={sc(clsSwitch, className)} style={mergeStyle}>
            {props.children}
        </div>
    )
}

export default Col;