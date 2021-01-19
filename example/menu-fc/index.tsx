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
            await import('./01-内嵌菜单.mdx'),
            // await import('./02-垂直菜单.mdx'),
            // await import('./03-水平菜单.mdx'),
            // await import('./04-天花板菜单.mdx'),
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
        const className = 'zeroUI-menu-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
                apiCode={apiCode}
                colCount={1}
            ></DemoRenderer>
        )
    }
}
