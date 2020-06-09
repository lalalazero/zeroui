import React from 'react'
import { Row, Col } from '../../components'

export default function () {
    return (
        <div className='zeroUI-grid-example'>
            <Row>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
            </Row>
            <Row>
                <Col span={12}>col-span-12</Col>
                <Col span={12}>col-span-12</Col>
            </Row>
        </div>
    )
}