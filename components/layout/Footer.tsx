import React from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-layout'

type Props = React.HTMLAttributes<HTMLElement>

const Footer: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={classname(PREFIX + '-footer', className)} {...rest}>
            {props.children}
        </div>
    )
}

export default Footer
