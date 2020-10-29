import React from 'react'
import TextInput from '../input/TextInput'
import { scopedClassMaker } from '../_util/classes'
import './style.scss'

const scopedClassName = scopedClassMaker('zeroUI-select')
const sc = scopedClassName

interface OptionProps {
    title: string
    value: string
}

export interface SelectProps {
    name?: string
    value?: string
    option?: OptionProps[]
    multiple?: boolean
}

const Select: React.FC<SelectProps> = (props) => {
    const [inputValue, setInputValue] = React.useState('')
    const [poperVisible, setPoperVisible] = React.useState(false)
    const handleInput = React.useCallback((name: string, value: string) => {
        setInputValue(value)
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

    const onAddItem = () => {
        if (props.multiple) {
            return
        }
        setPoperVisible(false)
    }

    return (
        <div className={sc('')}>
            <TextInput
                name={props.name as string}
                value={inputValue}
                onInput={handleInput}
                icon="down"
                onFocus={openPoper}
                onBlur={closePoper}
            ></TextInput>
            {poperVisible && (
                <div className={sc('pop-wrapper')}>
                    <ul>
                        <li className={sc('option-item')} onClick={onAddItem}>
                            item 1
                        </li>
                        <li className={sc('option-item')} onClick={onAddItem}>
                            item 2
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

Select.defaultProps = {
    multiple: false,
    name: 'select',
}

export default Select
