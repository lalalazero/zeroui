import React, { useEffect, useState } from 'react'
import { classname } from '../_util/classes'
import Checkbox from './index'
import './style.scss'

const PREFIX = 'zeroUI-checkbox-group'

export interface CheckboxGroupProps {
    options: { label: string; value: string }[]
    onChange?: (name: string, value: string[]) => void
    value?: string[]
    maxLen?: number
    name?: string
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (
    props = { value: [], options: [] }
) => {
    const [checkedMap, setCheckedMap] = useState<{ [key: string]: boolean }>({})

    useEffect(() => {
        if (props.value) {
            const checked = props.value.reduce((acc: any, cur) => {
                acc[cur] = true
                return acc
            }, {})
            setCheckedMap(checked)
        }
    }, [props.value])

    const handleChange = (optionValue: string, checked: boolean) => {
        const newCheck = {
            ...checkedMap,
            [optionValue]: checked,
        }
        if (props.maxLen) {
            if (
                Object.entries(newCheck).filter(([_, value]) => value === true)
                    .length > props.maxLen
            ) {
                setCheckedMap({ ...checkedMap })
                return
            }
        }
        setCheckedMap(newCheck)

        if (props.onChange) {
            const checkedValues = Object.entries(newCheck)
                .filter((entry) => entry[1])
                .map((entry) => entry[0])

            props.onChange(props.name || '', checkedValues)
        }
    }

    return (
        <div className={classname(PREFIX)}>
            {props.options.map((option) => {
                return (
                    <Checkbox
                        key={option.value}
                        checked={checkedMap[option.value] || false}
                        onChange={(name, checked) =>
                            handleChange(option.value, checked)
                        }
                    >
                        {option.label}
                    </Checkbox>
                )
            })}
        </div>
    )
}

export default CheckboxGroup
