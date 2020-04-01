import React from 'react'
import {scopedClassMaker} from "../classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

const Layout: React.FunctionComponent = (props) => {
    return (
        <div className={sc('')}>{ props.children }</div>
    )
}

export default Layout