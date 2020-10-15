import React from 'react'
import { Col, Row } from '../../components'
import DemoCard from '../DemoCard'
import './style.scss'

export default class ButtonDemo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            Demos: [],
            api: '',
        }
        this.renderDemo = this.renderDemo.bind(this)
    }
    async componentDidMount() {
        this.renderDemo([
            await import('./01-基础类型.mdx'),
            await import('./02-图标按钮.mdx'),
            await import('./03-按钮大小.mdx'),
            await import('./04-加载中状态.mdx'),
            await import('./05-不可用状态.mdx'),
            await import('./06-按钮组.mdx'),
            await import('./07-幽灵按钮.mdx'),
            await import('./08-块级按钮.mdx'),
        ])
        const api = await import('./api.md')
        this.setState({
            api: api.default.apiContent,
        })
    }
    renderDemo(files: any[]) {
        const demos =
            files.reduce((acc, cur) => {
                const { LiveDemo, markdown } = cur as any
                const demo = () => (
                    <DemoCard markdown={markdown}>
                        <LiveDemo />
                    </DemoCard>
                )
                acc.push(demo)
                return acc
            }, []) || []

        this.setState({
            Demos: demos,
        })
    }
    render() {
        const { Demos, api } = this.state

        return (
            <div className="zeroUI-button-example">
                <Row>
                    {Demos.map((Demo: any, idx: any) => (
                        <Col lg={12} sm={24} key={idx}>
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
