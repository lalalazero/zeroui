import React, { useMemo } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-steps'

const PREFIX_STEP = 'zeroUI-step'

export interface StepProps {
    title?: string
    desc?: string
}

const STATUS = {
    DEFAULT: 'default',
    FINISHED: 'finished',
    ACTIVE: 'active',
    WAITING: 'waiting',
}

const Step: React.FC<StepProps & { current?: number; idx: number }> = (
    props
) => {
    const status = useMemo(() => {
        if (props.current) {
            const delta = props.current - props.idx

            return delta === 0
                ? STATUS.ACTIVE
                : delta > 0
                ? STATUS.FINISHED
                : STATUS.WAITING
        }

        return STATUS.DEFAULT
    }, [props.current, props.idx])

    return (
        <div
            className={classname(
                `${PREFIX_STEP}`,
                `${PREFIX_STEP}-status-${status}`
            )}
        >
            <div className={classname(`${PREFIX_STEP}-icon`)}>
                <span>
                    {status === STATUS.FINISHED ? (
                        <Icon name="check"></Icon>
                    ) : (
                        props.idx
                    )}
                </span>
            </div>
            <div className={classname(`${PREFIX_STEP}-content`)}>
                <h4 className={classname(`${PREFIX_STEP}-title`)}>
                    {props.title || ''}
                </h4>
                <p className={classname(`${PREFIX_STEP}-desc`)}>
                    {props.desc || ''}
                </p>
            </div>
            <div className={classname(`${PREFIX_STEP}-line`)}></div>
        </div>
    )
}

export interface StepsProps {
    current?: number
    className?: string
}

export interface StepsInterface extends React.FC<StepsProps> {
    Step: typeof Step
}

const Steps: StepsInterface = (props) => {
    return (
        <div className={classname(PREFIX, props.className)}>
            {React.Children.map(props.children, (child: any, idx) =>
                React.cloneElement(child, {
                    current: props.current,
                    idx: idx + 1,
                })
            )}
        </div>
    )
}

Steps.Step = Step

export default Steps
