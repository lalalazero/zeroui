import React from 'react'
import { Col, Row } from '../components'
import DemoCard, { RenderCode } from './DemoCard'

export interface Props {
    className?: string
    demos: any[]
    api: any
    apiCode?: any
    colCount?: number
}
export default class DemoRenderer extends React.Component<Props, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            Demos: [],
            api: '',
            apiCode: '',
        }
    }

    renderColumns() {
        const { demos = [], colCount = 2 } = this.props
        const Demos =
            demos.reduce((acc, cur) => {
                const { LiveDemo, markdown } = cur as any
                const demo = () => (
                    <DemoCard markdown={markdown}>
                        <LiveDemo />
                    </DemoCard>
                )
                acc.push(demo)
                return acc
            }, []) || []

        if (colCount === 2) {
            const leftDemos = Demos.filter(
                (_: any, idx: number) => idx % 2 === 0
            )
            const rightDemos = Demos.filter(
                (_: any, idx: number) => idx % 2 !== 0
            )
            return (
                <Row>
                    <Col span={12}>
                        <Row direction="vertical">
                            {leftDemos.map((Demo: any, idx: any) => (
                                <Col key={idx} span={24}>
                                    <Demo />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row direction="vertical">
                            {rightDemos.map((Demo: any, idx: any) => (
                                <Col key={idx} span={24}>
                                    <Demo />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row>
                    <Col span={24}>
                        {Demos.map((Demo: any, idx: any) => (
                            <Demo key={idx} />
                        ))}
                    </Col>
                </Row>
            )
        }
    }

    renderApiCode = (apiCode: string) => {
        if (apiCode && apiCode.trim()) {
            return (
                <>
                    <h2>使用方式</h2>
                    <div className="demo-code">
                        <RenderCode code={apiCode} />
                    </div>
                </>
            )
        }
        return ''
    }

    render() {
        const { className, api, apiCode } = this.props
        return (
            <div className={className}>
                {this.renderColumns()}
                <div className="api-container">
                    {this.renderApiCode(apiCode)}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: api,
                        }}
                    ></div>
                </div>
            </div>
        )
    }
}
