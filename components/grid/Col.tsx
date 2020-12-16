import React, { HTMLProps, useContext } from 'react'
import { classname } from '../_util/classes'
import './Col.scss'
import GutterContext from './GutterContext'

const prefix = 'zeroUI-col'

interface ResponseProps {
    span?: number
    offset?: number
    push?: number
    pull?: number
    order?: number
}

export interface ColProps extends HTMLProps<HTMLDivElement> {
    span?: number
    offset?: number
    push?: number
    pull?: number
    order?: number
    xs?: number | ResponseProps
    sm?: number | ResponseProps
    md?: number | ResponseProps
    lg?: number | ResponseProps
    xl?: number | ResponseProps
    xxl?: number | ResponseProps
}

const Col: React.FC<ColProps> = (props) => {
    const { className, style } = props
    const gutter = useContext(GutterContext)

    const cls1 = makeResponsiveCls(props)
    const cls2 = makeResponsiveCls2(props)

    const classes = classname(className, prefix, cls1, cls2)

    const styleObj = gutter
        ? { paddingLeft: gutter / 2, paddingRight: gutter / 2 }
        : {}
    const mergeStyle = Object.assign({}, style, styleObj)
    return (
        <div className={classes} style={mergeStyle}>
            {props.children}
        </div>
    )
}

export default Col

function makeResponsiveCls(props: ColProps) {
    const { xs, sm, md, lg, xl, xxl } = props
    let responsiveCls: { [key: string]: any } = {}
    if (typeof xs === 'number') {
        responsiveCls[`${prefix}-xs-span-${xs}`] = true
    } else {
        if (xs) {
            responsiveCls = {
                ...responsiveCls,
                ...makeResponsiveCls2(xs as ResponseProps, 'xs-'),
            }
        }
    }
    if (typeof sm === 'number') {
        responsiveCls[`${prefix}-sm-span-${sm}`] = true
    } else {
        if (sm) {
            responsiveCls = {
                ...responsiveCls,
                ...makeResponsiveCls2(sm as ResponseProps, 'sm-'),
            }
        }
    }
    if (typeof md === 'number') {
        responsiveCls[`${prefix}-md-span-${md}`] = true
    } else {
        if (md) {
            responsiveCls = {
                ...responsiveCls,
                ...makeResponsiveCls2(md as ResponseProps, 'md-'),
            }
        }
    }
    if (typeof lg === 'number') {
        responsiveCls[`${prefix}-lg-span-${lg}`] = true
    } else {
        if (lg) {
            responsiveCls = {
                ...responsiveCls,
                ...makeResponsiveCls2(lg as ResponseProps, 'lg-'),
            }
        }
    }

    if (typeof xl === 'number') {
        responsiveCls[`${prefix}-xl-span-${xl}`] = true
    } else {
        if (xl) {
            responsiveCls = {
                ...responsiveCls,
                ...makeResponsiveCls2(xl as ResponseProps, 'xl-'),
            }
        }
    }

    if (typeof xxl === 'number') {
        responsiveCls[`${prefix}-xxl-span-${xxl}`] = true
    } else {
        if (xxl) {
            responsiveCls = {
                ...responsiveCls,
                ...makeResponsiveCls2(xxl as ResponseProps, 'xxl-'),
            }
        }
    }
    return responsiveCls
}

function makeResponsiveCls2(props: ResponseProps, type = '') {
    const responsiveCls: { [key: string]: any } = {}
    const { span, offset, push, pull, order } = props
    if (span as number) {
        responsiveCls[`${prefix}-${type}span-${span}`] = true
    }
    if (offset as number) {
        responsiveCls[`${prefix}-${type}offset-${offset}`] = true
    }
    if (push as number) {
        responsiveCls[`${prefix}-${type}push-${push}`] = true
    }
    if (pull as number) {
        responsiveCls[`${prefix}-${type}pull-${pull}`] = true
    }
    if (order as number) {
        responsiveCls[`${prefix}-${type}order-${order}`] = true
    }

    return responsiveCls
}
