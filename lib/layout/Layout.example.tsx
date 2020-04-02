import React from 'react'

import Layout from "./Layout";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from './Content'

export default function () {
    return (
        <div className="layout-example">
            <Layout className="hi" style={{ height: '500px' }}>
                <Header><h2>Header 2</h2></Header>
                <Content><p>content content</p></Content>
                <Footer><p>footer</p></Footer>
            </Layout>
            <p style={{ margin: '10px 0'}}>============</p>
            <Layout className="hi" style={{ height: '500px' }}>
                <Header><h1>header</h1></Header>
                <Layout>
                    <Sider>
                        <p>Sider</p>
                        <ul>
                            <li>menu1</li>
                            <li>menu2</li>
                            <li>menu3</li>
                        </ul>
                    </Sider>
                    <Content style={{ border: '1px solid red' }} className='xxx content'>
                        <p>Content</p>
                        <p>段落1</p>
                        <p>段落2</p>
                        <p>段落3</p>
                    </Content>
                </Layout>
                <Footer>
                    <div>footer</div>
                </Footer>
            </Layout>
            <p style={{ margin: '10px 0'}}>============</p>
            <Layout className="hi" style={{ height: '500px' }}>
                <Header><h2>Header 2</h2></Header>
                <Layout>
                    <Content><p>content content</p></Content>
                    <Sider><p>sider</p></Sider>
                </Layout>
                <Footer><p>footer</p></Footer>
            </Layout>
            <p style={{ margin: '10px 0'}}>============</p>
            <Layout className="hi" style={{ height: '500px' }}>
                <Sider><p>sider</p></Sider>
                <Layout>
                    <Header><h2>Header 2</h2></Header>
                    <Content><p>content content</p></Content>
                    <Footer><p>footer</p></Footer>
                </Layout>
            </Layout>
        </div>
    )
}