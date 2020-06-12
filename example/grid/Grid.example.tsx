import React from 'react'
import { Row, Col } from '../../components'
import DemoCard from '../DemoCard'
import './Grid.example.scss'
import * as content1 from './01-基础栅格.md'
import * as content2 from './02-gutter间隔.md'
import * as content3 from './03-左右偏移.md'
import * as content4 from './04-栅格排序.md'
import * as content5 from './05-flex布局.md'
import * as content6 from './06-flex对齐.md'
import * as content7 from './07-flex排序.md'
import * as apiContent from './api.md'

const GridExample01 = () => {
    return (
        <div className="col-with-bg">
            <Row>
                <Col span={12}>col-span-12</Col>
                <Col span={12}>col-span-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
            </Row>
            <Row>
                <Col span={6}>col-span-6</Col>
                <Col span={6}>col-span-6</Col>
                <Col span={6}>col-span-6</Col>
                <Col span={6}>col-span-6</Col>
            </Row>
        </div>
    )
}

const GridExample02 = () =>{
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
            </Row>
        </div>
    )
}

const GridExample03 = () => {
    return (
        <div className="col-with-bg">
            <Row>
                <Col span={6} >col-span-6</Col>
                <Col span={6} >col-span-6</Col>
                <Col span={6} offset={6}>col-span-6-offset-6</Col>
            </Row>
            <Row>
                <Col span={6} >col-span-6</Col>
                <Col span={6} offset={6}>col-span-6-offset-6</Col>
                <Col span={6} >col-span-6</Col>
            </Row>
        </div>
    )
}

const GridExample04 = () => {
    return (
        <div className="col-with-bg">
            <Row>
                <Col span={18} push={6}>col-1 col-span-18-push-6</Col>
                <Col span={6} pull={18}>col-2 col-span-6-pull-18</Col>
            </Row>
        </div>
    )
}

const GridExample05 = () => {
    return (
        <div className='col-with-bg'>
            <Row justify="start" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="center" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="end" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="space-between" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="space-around" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
        </div>
    )
}

const GridExample06 = () => {
    return (
        <div className="col-with-bg height-diff">
            <Row align="top" justify="center" className='row-padding-20'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row align="middle" justify="center" className='row-padding-20'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row align="bottom" justify="center" className='row-padding-20'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
        </div>
    )
}

const GridExample07 = () => {
    return (
        <div className='col-with-bg'>
            <Row>
                <Col span={6} order={4}>col-1 span-6 order-4</Col>
                <Col span={6} order={3}>col-2 span-6 order-3</Col>
                <Col span={6} order={2}>col-3 span-6 order-2</Col>
                <Col span={6} order={1}>col-4 span-6 order-1</Col>
            </Row>
        </div>
    )
}

const Card01 = (
    <DemoCard
        markdown={content1.default}
    >
        <GridExample01 />
    </DemoCard>
)

const Card02 = (
    <DemoCard
        markdown={content2.default}
    >
        <GridExample02 />
    </DemoCard>
)

const Card03 = (
    <DemoCard markdown={content3.default}>
        <GridExample03 />
    </DemoCard>
)

const Card04 = (
    <DemoCard markdown={content4.default}>
        <GridExample04 />
    </DemoCard>
)

const Card05 = (
    <DemoCard markdown={content5.default}>
        <GridExample05 />
    </DemoCard>
)

const Card06 = (
    <DemoCard markdown={content6.default}>
        <GridExample06 />
    </DemoCard>
)

const Card07 = (
    <DemoCard markdown={content7.default}>
        <GridExample07 />
    </DemoCard>
)

export default function () {
    return (
        <div className='zeroUI-grid-example'>
            {Card01}
            {Card02}
            {Card03}
            {Card04}
            {Card05}
            {Card06}
            {Card07}
            <div className='api-container'>
                <div dangerouslySetInnerHTML={{ __html: apiContent.default.apiContent }}></div>
            </div>
        </div>
    )
}