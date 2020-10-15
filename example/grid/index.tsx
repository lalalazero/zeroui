import React from 'react'
import DemoRenderer from '../DemoRenderer'
import './style.scss'

export default class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            demos: [],
            api: '',
        }
    }
    async componentDidMount() {
        const demos = [
            await import('./01-基础栅格.mdx'),
            await import('./02-gutter间隔.mdx'),
            await import('./03-左右偏移.mdx'),
            await import('./04-栅格排序.mdx'),
            await import('./05-flex布局.mdx'),
            await import('./06-flex对齐.mdx'),
            await import('./07-flex排序.mdx'),
            await import('./08-响应式布局.mdx'),
        ]
        const api = await import('./api.mdx')
        this.setState({
            api: api.default.apiContent,
            demos,
        })
    }

    render() {
        const { demos, api } = this.state
        const className = 'zeroUI-grid-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
            ></DemoRenderer>
        )
    }
}
