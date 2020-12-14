import React, {
    MouseEvent,
    MouseEventHandler,
    useEffect,
    useState,
} from 'react'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './style.scss'

interface SwitchProps {
    size?: 'default' | 'large' | 'small'
    name?: string
    checked?: boolean
    disabled?: boolean
    onClick?: (name: string, checked: boolean, Event: MouseEvent) => void
    onChange?: (name: string, checked: boolean) => void
    loading?: boolean
}
const sc = scopedClassMaker('zeroUI-switch')

const Switch: React.FC<SwitchProps> = (props) => {
    const {
        size = 'default',
        checked = false,
        name = '',
        disabled = false,
        loading = false,
    } = props || {}
    const [checkStatus, setCheckStatus] = useState(checked)

    useEffect(() => {
        setCheckStatus(checked)
    }, [checked])
    const clsSwitch = makeClassSwitchs({
        size,
        loading: {
            useKey: loading,
        },
    })

    const triggerChange = (newCheck: boolean) => {
        if (newCheck !== checkStatus) {
            props.onChange && props.onChange(name, newCheck)
        }
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        triggerChange(!checkStatus)
        props.onClick && props.onClick(name, checkStatus, event)
    }

    const isDisabled = disabled || loading

    return (
        <button
            className={sc(clsSwitch, '')}
            type="button"
            onClick={handleClick}
            aria-checked={checkStatus}
            disabled={isDisabled}
        >
            <span className={sc('handler')}></span>
        </button>
    )
}

Switch.defaultProps = {
    size: 'default',
}

export default Switch
