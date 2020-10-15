import React from 'react'
import DemoRenderer from '../DemoRenderer'
import './style.scss'

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
            await import('./01-基础类型.mdx'),
            await import('./02-图标按钮.mdx'),
            await import('./03-按钮大小.mdx'),
            await import('./04-加载中状态.mdx'),
            await import('./05-不可用状态.mdx'),
            await import('./06-按钮组.mdx'),
            await import('./07-幽灵按钮.mdx'),
            await import('./08-块级按钮.mdx'),
        ]
        const api = await import('./api.md')
        this.setState({
            api: api.default.apiContent,
            demos,
        })
    }

    render() {
        const { demos, api } = this.state
        const className = 'zeroUI-button-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
            ></DemoRenderer>
        )
    }
}
