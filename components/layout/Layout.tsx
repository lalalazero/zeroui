import React, { ReactElement } from 'react'
import { classname } from '../_util/classes'
import './Layout.scss'
import Sider from './Sider'

const PREFIX = 'zeroUI-layout'

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props

    const childrenArr = props.children as Array<ReactElement>

    const hasSider = !!(
        childrenArr.length &&
        childrenArr.reduce(
            (result, node) => result || node.type === Sider,
            false
        )
    )

    const classes = classname(className, PREFIX, {
        [`${PREFIX}-has-sider`]: hasSider,
    })
    return (
        <div className={classes} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout
