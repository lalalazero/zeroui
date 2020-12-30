import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import { Content, Footer, Header, Layout, Sider } from '../components'
import './Example.scss'
import logo from './logo.png'
import { basicComponentsRoute } from './route'
import SiderNav from './SiderNav'

ReactDOM.render(
    <Router>
        <Layout className="example-layout">
            <Header className="example-header">
                <NavLink to="/icon">
                    <img src={logo} className="logo" alt="logo" />
                    <span>ZEROUI</span>
                </NavLink>
                {/*<p>a set of delightful UI components implemented with React Hooks and typescript</p>*/}
            </Header>
            <Layout className="example-main">
                <Sider className="example-sider">
                    <SiderNav />
                </Sider>
                <Content className="example-content-wrapper">
                    <div className="example-content">
                        <div id="mountNode"></div>
                        {basicComponentsRoute
                            .map((group) => group.children)
                            .flat(1)
                            .map((item: any, idx) => (
                                <Route
                                    key={idx}
                                    path={item.path}
                                    component={item.component}
                                ></Route>
                            ))}
                    </div>
                </Content>
            </Layout>
            <Footer className="example-footer">
                <p>
                    {/*<img src={logo} className="logo" alt="logo"/>*/}
                    <a href="https://github.com/lalalazero">lalalazero</a>
                    <span> implemented with React hooks and typescript</span>
                </p>
            </Footer>
        </Layout>
    </Router>,

    document.querySelector('#root')
)
