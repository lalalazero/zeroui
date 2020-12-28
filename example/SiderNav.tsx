import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '../components'

const { MenuItem, SubMenu } = Menu

export default class SiderNav extends Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Menu>
                    <MenuItem>
                        <NavLink to="/color">
                            <p>色彩搭配</p>
                        </NavLink>
                    </MenuItem>

                    <SubMenu title="组件">
                        <MenuItem>
                            <NavLink to="/icon">
                                <p>Icon 图标</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/input">
                                <p>Input 输入框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/input-number">
                                <p>InputNumber 数字输入框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/button">
                                <p>Button 按钮</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/select">
                                <p>Select 选择框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/dialog">
                                <p>Dialog 对话框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/layout">
                                <p>Layout 布局</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/grid">
                                <p>Grid 栅格</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/tooltip">
                                <p>Tooltip 文字提示</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/menu">
                                <p>Menu 导航菜单</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/pagination">
                                <p>Pagination 分页菜单</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/notification">
                                <p>Notification 通知框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/card">
                                <p>Card 卡片</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/switch">
                                <p>Switch 开关</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/checkbox">
                                <p>Checkbox 多选框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/radio">
                                <p>Radio 单选框</p>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/tree">
                                <p>Tree 树</p>
                            </NavLink>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </Fragment>
        )
    }
}
