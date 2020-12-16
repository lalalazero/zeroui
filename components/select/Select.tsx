import React, { useEffect } from 'react'
import TextInput from '../input/TextInput'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroUI-select'

interface OptionProps {
    title: string
    value: string
}

export interface SelectProps {
    name?: string
    value?: string | OptionProps
    options: OptionProps[]
    multiple?: boolean
    onSelect?: (item: OptionProps) => void
}

const Select: React.FC<SelectProps> = (props) => {
    const [selectedItem, setSelectedItem] = React.useState(props.value || '')
    const [poperVisible, setPoperVisible] = React.useState(false)
    const timerId = React.useRef<any>()
    useEffect(() => {
        setSelectedItem(props.value || '')
    }, [props.value])
    const inputValue = React.useMemo(() => {
        if (typeof selectedItem === 'string') {
            return selectedItem
        } else {
            return selectedItem.title
        }
    }, [selectedItem])
    const handleInput = React.useCallback((name: string, value: string) => {
        setSelectedItem(value)
    }, [])

    const openPoper = React.useCallback(() => {
        setPoperVisible(true)
    }, [])

    const closePoper = React.useCallback(() => {
        if (props.multiple) {
            return
        }
        setPoperVisible(false)
    }, [])

    const onBlur = () => {
        if (timerId.current) {
            clearTimeout(timerId.current)
        }
        timerId.current = setTimeout(() => {
            closePoper()
        }, 300)
    }

    const onSelectItem = (item: OptionProps) => {
        setPoperVisible(false)
        props.onSelect && props.onSelect(item)
    }

    const isSelected = React.useCallback(
        (item) => {
            if (typeof selectedItem === 'object') {
                return item.value === selectedItem.value
            }
            return false
        },
        [selectedItem]
    )

    return (
        <div className={classname(PREFIX)}>
            <TextInput
                name={props.name as string}
                value={inputValue}
                onInput={handleInput}
                icon="down"
                onFocus={openPoper}
                onBlur={onBlur}
            ></TextInput>
            <div
                className={classname(PREFIX + '-pop-wrapper')}
                pop-visible={poperVisible.toString()}
            >
                <ul>
                    {props.options.map((item) => (
                        <li
                            className={classname(PREFIX + '-option-item')}
                            data-selected={`${isSelected(item)}`}
                            key={item.value}
                            onClick={() => onSelectItem(item)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Select.defaultProps = {
    multiple: false,
    name: 'select',
    options: [],
}

export default Select
