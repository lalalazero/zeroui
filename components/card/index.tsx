import React, { HTMLAttributes, ReactNode } from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const cardPrefix = 'zeroUI-card'
const gridPrefix = 'zeroUI-card-grid'

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

    const classes = classname(gridPrefix, {
        [`${gridPrefix}-hoverable`]: hoverable,
    })
    return (
        <div className={classes} style={style}>
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

    const classes = classname(cardPrefix, `${cardPrefix}-${size}`, {
        [`${cardPrefix}-noborder`]: !bordered,
        [`${cardPrefix}-hoverable`]: hoverable,
        [`${cardPrefix}-has-grid`]: isContainGrid(),
    })

    return (
        <div className={classes} {...rest}>
            {title && (
                <div className={classname(cardPrefix + '-title-panel')}>
                    {title}
                </div>
            )}

            <div className={classname(cardPrefix + '-content-panel')}>
                {children}
            </div>
        </div>
    )
}

Card.Grid = Grid

export default Card
