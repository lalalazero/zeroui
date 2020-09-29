import React, { useContext, HTMLProps } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'
import GutterContext from './GutterContext'
import './Col.scss'

const scopedClassName = scopedClassMaker('zeroUI-col')
const sc = scopedClassName

interface ResponseProps {
    span?: number,
    offset?: number,
    push?: number,
    pull?: number,
    order?: number,
}

export interface ColProps extends HTMLProps<HTMLDivElement> {
    span?: number,
    offset?: number,
    push?: number,
    pull?: number,
    order?: number,
    xs?: number | ResponseProps,
    sm?: number | ResponseProps,
    md?: number | ResponseProps,
    lg?: number | ResponseProps,
    xl?: number | ResponseProps,
    xxl?: number | ResponseProps
}

const Col: React.FC<ColProps> = (props) => {
    const { className, style } = props
    const gutter = useContext(GutterContext)

    const cls1 = makeResponsiveCls(props)
    const cls2 = makeResponsiveCls2(props)

    const clsSwitch = makeClassSwitchs(Object.assign(cls2, cls1))
    const styleObj = gutter ? { paddingLeft: gutter / 2, paddingRight: gutter / 2 } : {}
    const mergeStyle = Object.assign({}, style, styleObj)
    return (
        <div className={sc(clsSwitch, className)} style={mergeStyle}>
            {props.children}
        </div>
    )
}

export default Col;

function makeResponsiveCls(props: ColProps) {
    const { xs, sm, md, lg, xl, xxl } = props
    let responsiveCls: { [key: string]: any } = {}
    if (typeof xs === 'number') {
        responsiveCls[`xs-span-${xs}`] = {
            useKey: true
        }
    } else {
        if (xs) {
            responsiveCls = { ...responsiveCls, ...makeResponsiveCls2(xs as ResponseProps, 'xs-') }
        }
    }
    if (typeof sm === 'number') {
        responsiveCls[`sm-span-${sm}`] = {
            useKey: true
        }
    } else {
        if (sm) {
            responsiveCls = { ...responsiveCls, ...makeResponsiveCls2(sm as ResponseProps, 'sm-') }
        }
    }
    if (typeof md === 'number') {
        responsiveCls[`md-span-${md}`] = {
            useKey: true
        }
    } else {
        if (md) {
            responsiveCls = { ...responsiveCls, ...makeResponsiveCls2(md as ResponseProps, 'md-') }
        }
    }
    if (typeof lg === 'number') {
        responsiveCls[`lg-span-${lg}`] = {
            useKey: true
        }
    } else {
        if (lg) {
            responsiveCls = { ...responsiveCls, ...makeResponsiveCls2(lg as ResponseProps, 'lg-') }
        }
    }

    if (typeof xl === 'number') {
        responsiveCls[`xl-span-${xl}`] = {
            useKey: true
        }
    } else {
        if (xl) {
            responsiveCls = { ...responsiveCls, ...makeResponsiveCls2(xl as ResponseProps, 'xl-') }
        }
    }

    if (typeof xxl === 'number') {
        responsiveCls[`xxl-span-${xxl}`] = {
            useKey: true
        }
    } else {
        if (xxl) {
            responsiveCls = { ...responsiveCls, ...makeResponsiveCls2(xxl as ResponseProps, 'xxl-') }
        }
    }
    return responsiveCls
}

function makeResponsiveCls2(props: ResponseProps, prefix = '') {
    const responsiveCls: { [key: string]: any } = {}
    const { span, offset, push, pull, order } = props
    if (span as number) {
        responsiveCls[`${prefix}span-${span}`] = {
            useKey: true
        }
    }
    if (offset as number) {
        responsiveCls[`${prefix}offset-${offset}`] = {
            useKey: true
        }
    }
    if (push as number) {
        responsiveCls[`${prefix}push-${push}`] = {
            useKey: true
        }
    }
    if (pull as number) {
        responsiveCls[`${prefix}pull-${pull}`] = {
            useKey: true
        }
    }
    if (order as number) {
        responsiveCls[`${prefix}order-${order}`] = {
            useKey: true
        }
    }

    return responsiveCls

}
