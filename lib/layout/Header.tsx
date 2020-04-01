import React from 'react'
import {scopedClassMaker} from "../classes";

const scopedClassName = scopedClassMaker('zeroUI-layout')
const sc = scopedClassName

const Header: React.FunctionComponent = (props) => {
    return (
        <div className={sc('header')}>Header</div>
    )
}

export default Header