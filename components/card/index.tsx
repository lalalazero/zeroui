import React, { ReactNode } from 'react'
import { scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-card')
const sc = scopedClassName

export interface CardProps {
    title?: ReactNode
}

const Card: React.FC<any> = (props) => {
    return (
        <div className={sc('')}>
            <div className={sc('title-panel')}>{props.title}</div>
            <div className={sc('content-panel')}>{props.children}</div>
        </div>
    )
}

export default Card
