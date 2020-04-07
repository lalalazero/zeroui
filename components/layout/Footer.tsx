import React from 'react'
import {scopedClassMaker} from "../_util/classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={sc('footer', className)} {...rest}>{ props.children }</div>
    )
}

export default Footer