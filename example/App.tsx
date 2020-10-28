import React from 'react'
import ReactDOM from 'react-dom'
import { Input, Menu, Pagination } from '../components'
import './App.scss'

const { SubMenu, MenuGroup, MenuItem } = Menu

const App = () => {
    const [value, setValue] = React.useState('')
    const handleSearch = () => {
        console.log('handle search')
        setValue(value)
    }
    const handleChange = (name: string, value: string) => {
        console.log('handle change', name, value)
        setValue(value)
    }
    return (
        <div className="app app3">
            <p>
                <Input.TextInput
                    name="xxx"
                    value={value}
                    onPressEnter={handleSearch}
                    onChange={handleChange}
                ></Input.TextInput>
            </p>
            <p>
                <Input.TextInput
                    name="name"
                    size="large"
                    value={value}
                    onPressEnter={handleSearch}
                    onChange={handleChange}
                ></Input.TextInput>
            </p>
            <p>
                <Input.TextInput
                    name="name"
                    size="small"
                    value={value}
                    onPressEnter={handleSearch}
                    onChange={handleChange}
                ></Input.TextInput>
            </p>
        </div>
    )
}

const App3 = () => {
    const onPageChange = (pageNumber: number) => {
        console.log('pageNumber change..', pageNumber)
    }
    return (
        <div className="app">
            <Pagination total={200} simple onPageChange={onPageChange} />
            <Pagination total={200} />
        </div>
    )
}

const App2 = () => (
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
                    <SubMenu title="四级菜单">
                        <MenuItem key="12">小龙虾</MenuItem>
                        <MenuItem key="13">皮皮虾</MenuItem>
                        <MenuItem key="14">对对虾</MenuItem>
                    </SubMenu>
                </SubMenu>
            </SubMenu>
            <SubMenu title="二级菜单-2">
                <MenuItem key="15">小龙虾</MenuItem>
                <MenuItem key="16">皮皮虾</MenuItem>
                <MenuItem key="17">对对虾</MenuItem>
            </SubMenu>
            <MenuItem key="10">打球</MenuItem>
            <MenuItem key="11">跑步</MenuItem>
        </Menu>
        <Menu mode="vertical">
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
                    <SubMenu title="四级菜单">
                        <MenuItem key="12">小龙虾</MenuItem>
                        <MenuItem key="13">皮皮虾</MenuItem>
                        <MenuItem key="14">对对虾</MenuItem>
                    </SubMenu>
                </SubMenu>
            </SubMenu>
            <SubMenu title="二级菜单-2">
                <MenuItem key="15">小龙虾</MenuItem>
                <MenuItem key="16">皮皮虾</MenuItem>
                <MenuItem key="17">对对虾</MenuItem>
            </SubMenu>
            <MenuItem key="10">打球</MenuItem>
            <MenuItem key="11">跑步</MenuItem>
        </Menu>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))
