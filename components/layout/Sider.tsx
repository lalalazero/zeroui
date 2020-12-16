import React from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-layout'

type Props = React.HTMLAttributes<HTMLElement>
const Sider: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={classname(PREFIX + '-sider', className)} {...rest}>
            {props.children}
        </div>
    )
}

export default Sider
