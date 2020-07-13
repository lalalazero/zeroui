import React from 'react'
import copy from 'copy-to-clipboard';
import { Icon } from '../../components'
import './Icon.example.scss'
const IconExample: React.FunctionComponent = () => {
    const ICONS = [
        'like',
        'edit',
        'copy',
        'info',
        'error',
        'loading',
        'alipay',
        'wechat',
        'code-open',
        'code-close',
        'left',
        'right',
        'down',
        'setting',
        'emptysearch',
        'filled-up',
        'filled-down',
        'download',
        'next-double',
        'prev-double',
        'search',
        'zoom-in',
        'zoom-out',
        'close',
        'rotate-left',
        'rotate-right',
    ]
    const onClick = (name: string): void => {
        const text = `<Icon name="${name}"></Icon>`
        copy(text)
        window.confirm(text + ' copied!')
    }
    return (
        <div className='icon-example'>
            <p>内置的图标，点击可复制使用</p>
            <ul>
                {
                    ICONS.map(name => (<li key={name} onClick={() => onClick(name)}><Icon name={name}></Icon><br /><span>{name}</span></li>))
                }
            </ul>
        </div>
    )
}

export default IconExample