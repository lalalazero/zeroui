import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './components/icon/Icon.example'
import ButtonExample from './components/button/Button.example'
import DialogExample from './components/dialog/Dialog.example'
import LayoutExample from './components/layout/Layout.example'


ReactDOM.render(
    <Router>
        <div>
            <header>
                <div className="logo">
                    ZeroUI
        </div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/dialog">Dialog</Link>
                        </li>
                        <li>
                            <Link to="/layout">Layout</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </main>
            </div>
        </div>
    </Router>, document.querySelector('#root'))