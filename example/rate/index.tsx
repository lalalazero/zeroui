import React from 'react'
import DemoRenderer from '../DemoRenderer'

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
            await import('./02-半星.mdx'),
            await import('./03-禁用态.mdx'),
            await import('./04-不允许清除.mdx'),
            await import('./05-文案.mdx'),
            await import('./06-自定义图标.mdx'),
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
        const className = 'zeroUI-rate-example'
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
