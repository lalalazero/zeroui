import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import { Content, Footer, Header, Layout, Sider } from '../components'
import ButtonDemo from './button'
import CardExample from './card'
import CheckboxExample from './checkbox'
import ColorExample from './color/Color.example'
import DialogExample from './dialog/Dialog.example'
import './Example.scss'
import GridExample from './grid'
import IconExample from './icon/Icon.example'
import InputExample from './input'
import LayoutExample from './layout'
import logo from './logo.png'
import MenuExample from './menu'
import NotificationExample from './notification'
import PaginationExample from './pagination'
import SelectExample from './select'
import SiderNav from './SiderNav'
import SwitchExample from './switch'
import TooltipExample from './tooltip'

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
                        <Route path="/icon" component={IconExample}></Route>
                        <Route path="/input" component={InputExample}></Route>
                        <Route path="/select" component={SelectExample}></Route>
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
                        <Route
                            path="/pagination"
                            component={PaginationExample}
                        ></Route>
                        <Route
                            path="/notification"
                            component={NotificationExample}
                        ></Route>
                        <Route path="/card" component={CardExample}></Route>
                        <Route path="/switch" component={SwitchExample}></Route>
                        <Route
                            path="/checkbox"
                            component={CheckboxExample}
                        ></Route>
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
