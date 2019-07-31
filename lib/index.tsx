import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon/Icon'

const fn: React.MouseEventHandler<SVGElement> = (e) => {
    console.log(e.target)
}
ReactDOM.render(
    <div>
        <Icon name="wechat"
            onClick={fn}
            onMouseEnter={() => { console.log('enter') }}
            onMouseLeave={() => { console.log('leave') }}
        ></Icon>
        <Icon name="alipay"></Icon>
    </div>, document.querySelector('#root'))