import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Button } from '../components'
import './App.scss'

const { SubMenu, MenuGroup, MenuItem } = Menu

const App = () => (
    <div className="app">
        <Menu>
            <SubMenu title="SubMenu - 1" key="submunu-1">
                <MenuGroup title="吃货" key="group-1">
                    <MenuItem key="1">水果</MenuItem>
                    <MenuItem key="2">烧烤</MenuItem>
                    <MenuItem key="3">火锅</MenuItem>
                </MenuGroup>
                <MenuGroup title="饮料" key="group-2">
                    <MenuItem key="4">红茶</MenuItem>
                    <MenuItem key="5">绿茶</MenuItem>
                    <MenuItem key="6">奶茶</MenuItem>
                </MenuGroup>
            </SubMenu>
            <MenuItem key="7">打球</MenuItem>
            <MenuItem key="8">跑步</MenuItem>
        </Menu>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))