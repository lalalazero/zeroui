import React from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-menu-sub'

const SubMenu: React.FC<any> = (props) => {
    return <div className={classname(PREFIX)}>{props.children}</div>
}

export default SubMenu
