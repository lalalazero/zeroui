import React, { HTMLAttributes, ReactNode } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-card')
const sc = scopedClassName

export interface CardProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'size'> {
    title?: ReactNode
    size?: 'small'
}

const Card: React.FC<CardProps> = (props) => {
    const { title, children, size = '', ...rest } = props

    const clsSwithes = makeClassSwitchs({
        size,
    })
    return (
        <div className={sc(clsSwithes, '')} {...rest}>
            <div className={sc('title-panel')}>{title}</div>
            <div className={sc('content-panel')}>{children}</div>
        </div>
    )
}

export default Card
