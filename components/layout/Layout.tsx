import React, {ReactElement} from 'react'
import {scopedClassMaker} from "../_util/classes";
import './Layout.scss'
import Sider from "./Sider";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props

    const childrenArr = (props.children as Array<ReactElement>)

    const hasSider = !!(childrenArr.length &&
        childrenArr.reduce((result, node) =>
        result || node.type === Sider
    , false))
    return (
        <div className={sc({ hasSider }, className )} {...rest}>{ props.children }</div>
    )
}

export default Layout