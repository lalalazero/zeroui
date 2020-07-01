import React from 'react'
import { Tooltip, Button, Row, Col } from '../../components'
import DemoCard from '../DemoCard'
import './Tooltip.example.scss'
import * as content01 from './01-基本用法.md'
import * as content02 from './02-4个方位.md'
import * as apiContent from './api.md'

const TooltipExample01 = () => {
    return (
        <div>
            <Tooltip title="prompt text">
                <Button>Tooltip will show on mouse enter.</Button>
            </Tooltip>

        </div>
    )
}

const TooltipExample02 = () => {
    return (
        <div className="tooltip-example-02">
            <div className='box-1'>
                <Tooltip title="propmt text" placement="top">
                    <Button>TOP</Button>
                </Tooltip>
            </div>
            <div className='box-2'>
                <Tooltip title="propmt text" placement="left" style={{ width: '80px' }}>
                    <Button>LEFT</Button>
                </Tooltip>
                <Tooltip title="propmt text" placement="right" style={{ width: '80px'}}>
                    <Button>RIGHT</Button>
                </Tooltip>
            </div>
            <div className='box-3'>
                <Tooltip title="propmt text" placement="bottom">
                    <Button>BOTTOM</Button>
                </Tooltip>
            </div>
            
        </div>
    )
}

const Card01 = (
    <DemoCard markdown={content01.default}>
        <TooltipExample01 />
    </DemoCard>
)

const Card02 = (
    <DemoCard markdown={content02.default}>
        <TooltipExample02 />
    </DemoCard>
)




export default function () {
    return (
        <div className="zeroUI-tooltip-example">
            <Row>
                <Col lg={12} sm={24}>
                    {Card01}
                </Col>
                <Col lg={12} sm={24}>
                    {Card02}
                </Col>
            </Row>
            <div className='api-container'>
                <div dangerouslySetInnerHTML={{ __html: apiContent.default.apiContent }}></div>
            </div>
        </div>
    )

}