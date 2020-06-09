
import React, { useState } from 'react'
import { Button, ButtonGroup } from '../../components'
import DemoCard from '../DemoCard'
import './Button.example.scss'
import * as content1 from './01-基础类型.md'
import * as content2 from './02-图标按钮.md'
import * as content3 from './03-按钮大小.md'
import * as content4 from './04-加载中状态.md'
import * as content5 from './05-不可用状态.md'
import * as content6 from './06-按钮组.md'
import * as content7 from './07-幽灵按钮.md'
import * as content8 from './08-块级按钮.md'
import * as apiContent from './api.md'

const ButtonExample01 = () => {
    return (
        <div className="space-button">
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
        <div className="space-button">
            <Button icon="search" shape="circle" type="primary"></Button>
            <Button icon='search' shape='circle'></Button>
            <Button icon="search" type="primary">Search</Button>
            <Button icon='search' position="right">Search</Button>
        </div>
    )
}

const ButtonExample03 = () => {
    return (
        <div className="space-button">
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
    const [loadign1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)
    return (
        <div className="space-button">
            <Button loading={loadign1} onClick={() => { setLoading1(!loadign1) }}>Loading</Button>
            <Button type="primary" loading={loading2} onClick={() => setLoading2(!loading2)} position="right">Loading</Button>
            <Button loading={loading3} onClick={() => { setLoading3(!loading3) }} shape="circle" icon="search"></Button>
            <Button loading={loading4} onClick={() => setLoading4(!loading4)} type="primary" icon="search" shape="circle"></Button>
        </div>
    )
}

const ButtonExample05 = () => {
    return (
        <div className="space-button">
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

const ButtonExample06 = () => {
    return (
        <div className="space-button-group">
            <ButtonGroup>
                <Button>取消</Button>
                <Button>确定</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button disabled>左</Button>
                <Button disabled>中</Button>
                <Button disabled>右</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button icon="left" type="primary">上一页</Button>
                <Button icon="right" type="primary" position="right">下一页</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button icon="download" type="primary"></Button>
                <Button icon="like" type="primary"></Button>
            </ButtonGroup>
        </div>
    )
}

const ButtonExample07 = () => {
    return (
        <div className="space-button" style={{ background: '#ccc', padding: '20px 0' }}>
            <Button ghost type="primary">主要</Button>
            <Button ghost>基本</Button>
            <Button ghost type="dashed">虚线</Button>
            <Button ghost type="text">无边框</Button>
            <Button ghost type="danger">危险</Button>
        </div>
    )
}
const ButtonExample08 = () => {
    return (
        <div className="space-button">
            <div>
                <Button block type="primary">主要</Button>
            </div>
            <div>
                <Button block>基本</Button>
            </div>
            <div>
                <Button block type="dashed">虚线</Button>
            </div>
            <div>
                <Button block type="text">无边框</Button>
            </div>
            <div>
                <Button block type="danger">危险</Button>
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
const Card06 = (
    <DemoCard
        code={content6.default.code}
        subject={content6.default.subject}
        description={content6.default.desc}
        demo={content6.default.demo}
    >
        <ButtonExample06 />
    </DemoCard>
)
const Card07 = (
    <DemoCard
        code={content7.default.code}
        subject={content7.default.subject}
        description={content7.default.desc}
        demo={content7.default.demo}
    >
        <ButtonExample07 />
    </DemoCard>
)
const Card08 = (
    <DemoCard
        code={content8.default.code}
        subject={content8.default.subject}
        description={content8.default.desc}
        demo={content8.default.demo}
    >
        <ButtonExample08 />
    </DemoCard>
)


export default function () {
    return (
        <div className='zeroUI-button-example'>
            <div>
                {Card01}
                {Card02}
                {Card03}
                {Card04}
                {Card05}
                {Card06}
                {Card07}
                {Card08}
            </div>
            <div className='api-container'>
                <div dangerouslySetInnerHTML={{ __html: apiContent.default.apiContent }}></div>
            </div>

        </div>
    )
}