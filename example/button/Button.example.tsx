import React from 'react'

import { Button } from '../../components'

const ButtonExample = () => {
    return (
        <div>
            <Button>基本</Button>
            <Button type="primary">主要</Button>
            <Button type="dashed">虚线</Button>
            <Button type="text">无边框</Button>
            <Button type="danger">危险</Button>
        </div>
    )
}

export default ButtonExample