import React from 'react'
import { Row, Col } from '../../components'
import DemoCard from '../DemoCard'
import './Grid.example.scss'
import * as content1 from './01-基础栅格.md'
import * as content2 from './02-gutter间隔.md'
import * as content3 from './03-左右偏移.md'

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

export default function () {
    return (
        <div className='zeroUI-grid-example'>
            {Card01}
            {Card02}
            {Card03}
        </div>
    )
}