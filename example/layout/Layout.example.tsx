import React from 'react'
import { Content, Footer, Header, Layout, Sider } from '../../components'
import DemoCard from '../DemoCard'
import * as content01 from './01-基本布局.md'
import './Layout.example.scss'

const LayoutExample01 = () => {
    return (
        <div>
            <div className="layout-example-wrapper">
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div className="layout-example-wrapper">
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div className="layout-example-wrapper">
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div className="layout-example-wrapper">
                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}

const DemoCard01 = (
    <DemoCard markdown={content01.default}>
        <LayoutExample01 />
    </DemoCard>
)

export default function LayoutDemo() {
    return <div className="zeroUI-layout-example">{DemoCard01}</div>
}
