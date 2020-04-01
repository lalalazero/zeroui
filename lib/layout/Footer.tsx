import React from 'react'
import {scopedClassMaker} from "../classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

const Footer: React.FunctionComponent = (props) => {
    return (
        <div className={sc('footer')}>Footer</div>
    )
}

export default Footer