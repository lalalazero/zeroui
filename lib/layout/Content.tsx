import React from 'react'
import {scopedClassMaker} from "../classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName
interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={sc('content', className)} {...rest}>{ props.children }</div>
    )
}

export default Content