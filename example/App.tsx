import React from 'react'
import ReactDOM from 'react-dom'
import {
    Button,
    Input,
    Menu,
    notification,
    Pagination,
    Select,
} from '../components'
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
    const [selectedItem, setSelectedItem] = React.useState()
    const onSelect = (item: any) => {
        console.log('App 组件, 2')
        console.log('App 组件 onSelect', item)
        setSelectedItem(item)
    }
    const openNotification = () => {
        notification.open({
            title: '通知',
            body: '记得今天晚上看快乐8开奖',
        })
    }

    const options = [
        {
            title: '中国',
            value: 'cn',
        },
        {
            title: '美国',
            value: 'us',
        },
        {
            title: '日本',
            value: 'jp',
        },
        {
            title: '韩国',
            value: 'kr',
        },
    ]
    return (
        <div className="app app3">
            <div>
                <Button onClick={openNotification}>notification</Button>
            </div>

            <Button onClick={openNotification}>notification</Button>
            <p>
                <Input.TextInput
                    placeholder={'placeholer'}
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
            <div>
                <Select
                    value={selectedItem}
                    onSelect={onSelect}
                    options={options}
                ></Select>
            </div>
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
