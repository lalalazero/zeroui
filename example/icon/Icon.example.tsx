import copy from 'copy-to-clipboard'
import React from 'react'
import { Icon } from '../../components'
import { ICONS } from '../../components/icon/Icon'
import './Icon.example.scss'

const IconExample: React.FunctionComponent = () => {
    const onClick = (name: string): void => {
        const text = `<Icon name="${name}"></Icon>`
        copy(text)
        window.confirm(text + ' copied!')
    }
    return (
        <div className="icon-example">
            <p>内置的图标，点击可复制使用</p>
            <ul>
                {ICONS.map((name: any) => (
                    <li key={name} onClick={() => onClick(name)}>
                        <Icon name={name}></Icon>
                        <br />
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IconExample
