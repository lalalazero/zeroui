import React, { ReactNode, useMemo } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-steps'

const PREFIX_STEP = 'zeroUI-step'

export interface StepProps {
    title?: string
    desc?: string
    icon?: ReactNode
}

const STATUS = {
    DEFAULT: 'default',
    FINISHED: 'finished',
    ACTIVE: 'active',
    WAITING: 'waiting',
}

interface InternalStepProps {
    current?: number
    idx: number
    onChange?: (idx: number) => void
}

const Step: React.FC<StepProps & InternalStepProps> = (props) => {
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

    const handleChange = () => {
        if (props.onChange) {
            props.onChange(props.idx)
        }
    }

    return (
        <div
            className={classname(
                `${PREFIX_STEP}`,
                `${PREFIX_STEP}-status-${status}`,
                {
                    [`${PREFIX_STEP}-clickable`]: !!props.onChange,
                }
            )}
            onClick={handleChange}
        >
            <div className={classname(`${PREFIX_STEP}-icon`)}>
                {props.icon ? (
                    props.icon
                ) : (
                    <span>
                        {status === STATUS.FINISHED ? (
                            <Icon name="check"></Icon>
                        ) : (
                            props.idx
                        )}
                    </span>
                )}
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
    onChange?: (newStep: number) => void
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
                    onChange: props.onChange,
                })
            )}
        </div>
    )
}

Steps.Step = Step

export default Steps
