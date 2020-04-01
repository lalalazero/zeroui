import React from 'react'

import Layout from "./Layout";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from './Content'

export default function () {
    return (
        <div className="layout-example">
            <Layout>
                <Header><h1>header</h1></Header>
                <Layout>
                    <Sider>
                        <ul>
                            <li>menu1</li>
                            <li>menu2</li>
                            <li>menu3</li>
                        </ul>
                    </Sider>
                    <Content>
                        <p>段落1</p>
                        <p>段落2</p>
                        <p>段落3</p>
                    </Content>
                </Layout>
                <Footer>
                    <div>footer</div>
                </Footer>
            </Layout>
        </div>
    )
}