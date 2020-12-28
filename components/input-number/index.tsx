import React from 'react'

const PREFIX = 'zeroUI-number-input'

const NumberInput: React.FC<any> = () => {
    return (
        <span className={PREFIX + '-wrapper'}>
            <input type="number" />
        </span>
    )
}

export default NumberInput
