import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import { Content, Footer, Header, Layout, Sider } from '../components'
import colorExample from './color/Color.example'
import './Example.scss'
import logo from './logo.png'
import { basicComponentsRoute } from './route'
import SiderNav from './SiderNav'

export const ExampleContext = createContext<any>(null)

const ExampleApp = () => {
    const [activeMenu, setActiveMenu] = useState('/button')

    useEffect(() => {
        const hash = location.hash.split('#')[1]
        if (hash !== '/') {
            setActiveMenu(hash !== '/' ? hash : '/button')
        } else {
            location.hash = '/button'
        }
    }, [])

    return (
        <Router>
            <ExampleContext.Provider value={activeMenu}>
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

                                <Route
                                    path="/color"
                                    component={colorExample}
                                ></Route>
                            </div>
                        </Content>
                    </Layout>
                    <Footer className="example-footer">
                        <p>
                            {/*<img src={logo} className="logo" alt="logo"/>*/}
                            <a href="https://github.com/lalalazero">
                                lalalazero
                            </a>
                            <span>
                                {' '}
                                implemented with React hooks and typescript
                            </span>
                        </p>
                    </Footer>
                </Layout>
            </ExampleContext.Provider>
        </Router>
    )
}

ReactDOM.render(<ExampleApp />, document.querySelector('#root'))
