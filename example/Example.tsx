import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import { Content, Footer, Header, Layout, Sider } from '../components'
import ButtonDemo from './button'
import ColorExample from './color/Color.example'
import DialogExample from './dialog/Dialog.example'
import './Example.scss'
import GridExample from './grid/Grid.example'
import IconExample from './icon/Icon.example'
import LayoutExample from './layout/Layout.example'
import logo from './logo.png'
import MenuExample from './menu/Menu.example'
import SiderNav from './SiderNav'
import TooltipExample from './tooltip/Tooltip.example'

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
                        <Route path="/icon" component={IconExample}></Route>
                        <Route path="/button" component={ButtonDemo}></Route>
                        <Route path="/dialog" component={DialogExample}></Route>
                        <Route path="/layout" component={LayoutExample}></Route>
                        <Route path="/color" component={ColorExample}></Route>
                        <Route path="/grid" component={GridExample}></Route>
                        <Route
                            path="/tooltip"
                            component={TooltipExample}
                        ></Route>
                        <Route path="/menu" component={MenuExample}></Route>
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