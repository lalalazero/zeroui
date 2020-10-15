import React from 'react'
import { Col, Row } from '../components'
import DemoCard from './DemoCard'
export default class DemoRenderer extends React.Component<
    { className?: string; demos: any[]; api: any; layout?: any },
    any
> {
    constructor(props: any) {
        super(props)
        this.state = {
            Demos: [],
            api: '',
        }
    }

    render() {
        const { demos = [], api = '' } = this.props
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
        const { className, layout = { lg: 12, sm: 24 } } = this.props
        const colStyle =
            typeof layout === 'number' ? { span: layout } : { ...layout }
        return (
            <div className={className}>
                <Row>
                    {Demos.map((Demo: any, idx: any) => (
                        <Col {...colStyle} key={idx}>
                            <Demo />
                        </Col>
                    ))}
                </Row>
                <div className="api-container">
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
