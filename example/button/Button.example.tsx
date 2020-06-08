
import React from 'react'
import { Button } from '../../components'
import DemoCard from '../DemoCard'
import './Button.example.scss'
import * as content1 from './01-基础类型.md'
import * as content2 from './02-图标按钮.md'
import * as content3 from './03-按钮大小.md'
import * as content4 from './04-加载中状态.md'
import * as content5 from './05-不可用状态.md'

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

const ButtonExample03 = () => {
    return (
        <div>
            <p>大尺寸按钮</p>
            <div>
                <Button size="large">基本</Button>
                <Button type="primary" size="large">主要</Button>
                <Button type="dashed" size="large">虚线</Button>
                <Button type="text" size="large">无边框</Button>
                <Button type="danger" size="large">危险</Button>
                <Button icon="search" shape="circle" type="primary" size="large"></Button>
                <Button icon='search' shape='circle' size="large"></Button>
                <Button icon="search" type="primary" size="large">Search</Button>
                <Button icon='search' position="right" size="large">Search</Button>
            </div>
            <p>默认尺寸按钮</p>
            <div>
                <Button>基本</Button>
                <Button type="primary">主要</Button>
                <Button type="dashed" >虚线</Button>
                <Button type="text" >无边框</Button>
                <Button type="danger" >危险</Button>
                <Button icon="search" shape="circle" type="primary" ></Button>
                <Button icon='search' shape='circle' ></Button>
                <Button icon="search" type="primary" >Search</Button>
                <Button icon='search' position="right" >Search</Button>
            </div>
            <p>小尺寸按钮</p>
            <div>
                <Button size="small">基本</Button>
                <Button type="primary" size="small">主要</Button>
                <Button type="dashed" size="small">虚线</Button>
                <Button type="text" size="small">无边框</Button>
                <Button type="danger" size="small">危险</Button>
                <Button icon="search" shape="circle" type="primary" size="small"></Button>
                <Button icon='search' shape='circle' size="small"></Button>
                <Button icon="search" type="primary" size="small">Search</Button>
                <Button icon='search' position="right" size="small">Search</Button>
            </div>
            
        </div>
    )
}


const ButtonExample04 = () => {
    return (
        <div>
            <Button loading>Loading</Button>
            <Button type="primary" loading position="right">Loading</Button>
            <Button loading shape="circle"></Button>
            <Button loading type="primary" shape="circle"></Button>
        </div>
    )
}

const ButtonExample05 = () => {
    return (
        <div>
            <div>   
                <Button type="primary">主要</Button>
                <Button disabled type="primary">主要(禁用态)</Button>
            </div>
            <div>   
                <Button>基本</Button>
                <Button disabled>基本(禁用态)</Button>
            </div>
            <div>   
                <Button type="dashed">虚线</Button>
                <Button type="dashed" disabled>虚线(禁用态)</Button>
            </div>
            <div>   
                <Button type="text">无边框</Button>
                <Button disabled type="text">无边框(禁用态)</Button>
            </div>
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
const Card03 = (
    <DemoCard
        code={content3.default.code}
        subject={content3.default.subject}
        description={content3.default.desc}
        demo={content3.default.demo}
    >
        <ButtonExample03 />
    </DemoCard>
)
const Card04 = (
    <DemoCard
        code={content4.default.code}
        subject={content4.default.subject}
        description={content4.default.desc}
        demo={content4.default.demo}
    >
        <ButtonExample04 />
    </DemoCard>
)
const Card05 = (
    <DemoCard
        code={content5.default.code}
        subject={content5.default.subject}
        description={content5.default.desc}
        demo={content5.default.demo}
    >
        <ButtonExample05 />
    </DemoCard>
)



export default function () {
    return (
        <div className='zeroUI-button-example'>
            {Card01}
            {Card02}
            {Card03}
            {Card04}
            {Card05}
        </div>
    )
}