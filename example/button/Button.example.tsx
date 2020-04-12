import React from 'react'

import { Button } from '../../components'

const ButtonExample:React.FunctionComponent = () =>{
    return (
        <div>
            <p>使用 type 属性来定义 button 的样式</p>
            <Button>基本</Button>
            <Button type="primary">主要</Button>
            <Button type="dashed">虚线</Button>
            <Button type="text">无边框</Button>
            <Button type="danger">危险</Button>
        </div>
    )
}

export default ButtonExample