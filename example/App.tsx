import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Button } from '../components'
import './App.scss'

const { SubMenu, MenuGroup, MenuItem } = Menu

const App = () => (
    <div className="app">
        <Menu>
            <SubMenu title="二级菜单">
                <MenuGroup title="吃货">
                    <MenuItem key="1">水果</MenuItem>
                    <MenuItem key="2">烧烤</MenuItem>
                    <MenuItem key="3">火锅</MenuItem>
                </MenuGroup>
                <MenuGroup title="饮料">
                    <MenuItem key="4">红茶</MenuItem>
                    <MenuItem key="5">绿茶</MenuItem>
                    <MenuItem key="6">奶茶</MenuItem>
                </MenuGroup>
                <SubMenu title="三级菜单">
                    <MenuItem key="7">小龙虾</MenuItem>
                    <MenuItem key="8">皮皮虾</MenuItem>
                    <MenuItem key="9">对对虾</MenuItem>
                </SubMenu>
            </SubMenu>
            <MenuItem key="10">打球</MenuItem>
            <MenuItem key="11">跑步</MenuItem>
        </Menu>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))