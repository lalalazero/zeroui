import React from 'react'
import {scopedClassMaker} from "../_util/classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName
type Props = React.HTMLAttributes<HTMLElement>

const Content: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={sc('content', className)} {...rest}>{ props.children }</div>
    )
}

export default Content