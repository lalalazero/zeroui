import React from 'react'

import { Button } from '../../components'
import DemoCard from '../DemoCard'
// @ts-ignore
import * as content from './01-基础类型.md'
const { code, demo, desc, subject } = content.default

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

export default function () {
    return (
        <DemoCard
            code={code}
            subject={subject}
            description={desc}
            demo={demo}
        >
            <ButtonExample />
        </DemoCard>
    )
}