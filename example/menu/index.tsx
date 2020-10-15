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
        const demos = [await import('./01-内嵌菜单.mdx')]
        // const api = await import('./api.mdx')
        this.setState({
            // api: api.default.apiContent,
            demos,
        })
    }

    render() {
        const { demos, api } = this.state
        const className = 'zeroUI-menu-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
            ></DemoRenderer>
        )
    }
}
