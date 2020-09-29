import React, { Component } from 'react'
import { scopedClassMaker } from '../_util/classes'

const scopedClassName = scopedClassMaker('zeroUI-menu-popup')
const sc = scopedClassName

export default class SubMenuPopup extends Component<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super(props)
    }

    render() {
        return <div className={sc('')}>{this.props.children}</div>
    }
}
