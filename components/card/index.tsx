import React, { HTMLAttributes, ReactNode } from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-card')
const sc = scopedClassName
const gridClass = scopedClassMaker('zeroUI-card-grid')

export interface CardProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'size'> {
    title?: ReactNode
    size?: 'small'
    bordered?: boolean
    hoverable?: boolean
}

export interface CardGridProps {
    hoverable?: boolean
    style?: React.CSSProperties
}

const Grid: React.FC<CardGridProps> = (props) => {
    const { hoverable = true, children, style } = props
    const clsSwithes = makeClassSwitchs({
        hoverable: {
            useKey: hoverable,
        },
    })
    return (
        <div className={gridClass(clsSwithes, '')} style={style}>
            {children}
        </div>
    )
}

export interface CardInterface extends React.FC<CardProps> {
    Grid: typeof Grid
}

const Card: CardInterface = (props) => {
    const {
        title,
        children,
        size = '',
        bordered = true,
        hoverable = false,
        ...rest
    } = props

    const isContainGrid = () => {
        let containGrid = false
        React.Children.forEach(children, (element: JSX.Element) => {
            if (element && element.type && element.type === Grid) {
                containGrid = true
            }
        })

        return containGrid
    }

    const clsSwithes = makeClassSwitchs({
        size,
        noborder: {
            useKey: !bordered,
        },
        hoverable: {
            useKey: hoverable,
        },
        'has-grid': {
            useKey: isContainGrid(),
        },
    })
    return (
        <div className={sc(clsSwithes, '')} {...rest}>
            {title && <div className={sc('title-panel')}>{title}</div>}

            <div className={sc('content-panel')}>{children}</div>
        </div>
    )
}

Card.Grid = Grid

export default Card
