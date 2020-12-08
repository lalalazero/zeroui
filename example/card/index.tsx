import React from 'react'
import DemoRenderer from '../DemoRenderer'

export default class ButtonDemo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            demos: [],
            api: '',
        }
    }
    async componentDidMount() {
        const demos = [
            await import('./01-基本使用.mdx'),
            await import('./02-无边框.mdx'),
            await import('./03-简洁卡片.mdx'),
            await import('./04-栅格卡片.mdx'),
            await import('./05-网格内嵌卡片.mdx'),
        ] as any
        // const api = await import('./api.mdx')
        this.setState({
            // api: api.default.apiContent,
            demos,
        })
    }

    render() {
        const { demos, api } = this.state
        const className = 'zeroUI-card-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
            ></DemoRenderer>
        )
    }
}
