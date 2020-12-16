import React, { Component } from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-menu-popup'

export default class SubMenuPopup extends Component<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super(props)
    }

    render() {
        return <div className={classname(PREFIX)}>{this.props.children}</div>
    }
}
