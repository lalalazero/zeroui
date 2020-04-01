import React from 'react'
import {scopedClassMaker} from "../classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

const Sider: React.FunctionComponent = (props) => {
    return (
        <div className={sc('sider')}>Sider</div>
    )
}

export default Sider