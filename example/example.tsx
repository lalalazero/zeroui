import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import IconExample from './icon/Icon.example'
import ButtonExample from './button/Button.example'
import DialogExample from './dialog/Dialog.example'
import LayoutExample from './layout/Layout.example'
import './example.scss'
import logo from './logo.png'

import { Layout, Header, Content, Footer, Sider } from '../components'

ReactDOM.render(
    <Router>
        <Layout className='example-layout'>
            <Header className='example-header'>
                <NavLink to='/icon'>
                    <img src={logo} className="logo" alt="logo"/><span>ZEROUI</span>
                </NavLink>
                {/*<p>a set of delightful UI components implemented with React Hooks and typescript</p>*/}
            </Header>
            <Layout className='example-main'>
                <Sider className='example-sider'>
                    <p><span>组件</span></p>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon 图标</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button 按钮</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog 对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout 布局</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className='example-content'>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </Content>
            </Layout>
            <Footer className='example-footer'>
                <p>zeroUI component footer</p>
            </Footer>
        </Layout>

    </Router>, document.querySelector('#root'))