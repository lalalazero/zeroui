
import React from 'react'
import { Button } from '../../components'
import DemoCard from '../DemoCard'
import './Button.example.scss'
import * as content1 from './01-基础类型.md'
import * as content2 from './02-图标按钮.md'

const ButtonExample01 = () => {
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

const Card01 = (
    <DemoCard
        code={content1.default.code}
        subject={content1.default.subject}
        description={content1.default.desc}
        demo={content1.default.demo}
    >
        <ButtonExample01 />
    </DemoCard>
)


const ButtonExample02 = () => {
    return (
        <div>
            <Button icon="search" shape="circle" type="primary"></Button>
            <Button icon='search' shape='circle'></Button>
            <Button icon="search" type="primary">Search</Button>
            <Button icon='search' position="right">Search</Button>
        </div>
    )
}

const Card02 = (
    <DemoCard
        code={content2.default.code}
        subject={content2.default.subject}
        description={content2.default.desc}
        demo={content2.default.demo}
    >
        <ButtonExample02 />
    </DemoCard>
)

export default function () {
    return (
        <div className='zeroUI-button-example'>
            {Card01}
            {Card02}
        </div>
    )
}