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
            await import('./01-基本用法.mdx'),
            await import('./02-完全受控.mdx'),
            await import('./03-自定义tree.mdx'),
            await import('./04-异步加载.mdx'),
            await import('./05-限制高度滚动.mdx'),
        ]
        // const api = await import('./api.mdx')
        this.setState({
            // api: api.default.apiContent,
            demos,
            // apiCode: api.default.apiCode,
        })
    }

    render() {
        const { demos, api, apiCode } = this.state
        const className = 'zeroUI-tree-example'
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
