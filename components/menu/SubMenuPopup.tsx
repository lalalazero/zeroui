import React, { Component, Fragment } from 'react'
import { scopedClassMaker, makeClassSwitchs } from '../_util/classes'


const scopedClassName = scopedClassMaker('zeroUI-menu-popup')
const sc = scopedClassName

export default class SubMenuPopup extends Component<{}>{
    constructor(props: {}){
        super(props)
    }

    render(){
        return <div className={sc('')}>
            {
                this.props.children
            }
        </div>
    }
}