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
                            <NavLink to="/button">
                                <p>Button 按钮</p>
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
                    </SubMenu>
                </Menu>
            </Fragment>
        )
    }
}
