import React from 'react'

import { Tooltip, Button, Row, Col } from '../../components'
import DemoCard from '../DemoCard'
import * as content01 from './01-基本用法.md'

const TooltipExample01 = () => {
    return (
        <div>
            <Tooltip title="prompt text">
                <Button>Tooltip will show on mouse enter.</Button>
            </Tooltip>

        </div>
    )
}
const TooltipExample02 = () => (
    <Tooltip title="pr">
        <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
)
const TooltipExample03 = () => (
    <Tooltip title="Tooltip will show on mouse enter.Tooltip will show on mouse enter.Tooltip will show on mouse enter.Tooltip will show on mouse enter.Tooltip will show on mouse enter.Tooltip will show on mouse enter.prompt text">
        <span>tooltip will show on mouse enter</span>
    </Tooltip>
)

const Card01 = (
    <DemoCard markdown={content01.default}>
        <TooltipExample01 />
    </DemoCard>
)


const Card02 = (
    <DemoCard markdown={content01.default}>
        <TooltipExample02 />
    </DemoCard>
)


const Card03 = (
    <DemoCard markdown={content01.default}>
        <TooltipExample03 />
    </DemoCard>
)

export default function () {
    return (
        <div className="zeroUI-tooltip-example">
            <Row>
                <Col lg={12} sm={24}>
                    {Card01}
                    {Card03}
                </Col>
                <Col lg={12} sm={24}>
                    {Card02}
                </Col>
            </Row>
        </div>
    )

}