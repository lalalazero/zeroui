import React from 'react'
import {scopedClassMaker} from "../classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

const Content: React.FunctionComponent = (props) => {
    return (
        <div className={sc('content')}>Content</div>
    )
}

export default Content