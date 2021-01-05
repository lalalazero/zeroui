import React from 'react'
import DemoRenderer from '../DemoRenderer'
import './style.scss'

export default class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            demos: [],
            api: '',
            apiCode: '',
        }
    }
    async componentDidMount() {
        const demos = [
            await import('./01-基本使用.mdx'),
            await import('./02-独立使用.mdx'),
            await import('./03-封顶数字.mdx'),
            await import('./04-小红点.mdx'),
            await import('./05-自定义位置.mdx'),
            await import('./06-状态点.mdx'),
        ]
        const api = await import('./api.mdx')
        this.setState({
            api: api.default.apiContent,
            demos,
            apiCode: api.default.apiCode,
        })
    }

    render() {
        const { demos, api, apiCode } = this.state
        const className = 'zeroUI-badge-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
                apiCode={apiCode}
                colCount={2}
            ></DemoRenderer>
        )
    }
}
