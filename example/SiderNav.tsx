import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '../components'
import MenuGroup from '../components/menu/MenuGroup'
import { basicComponentsRoute } from './route'

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

                    <SubMenu title="基础组件">
                        {basicComponentsRoute.map((group, idx) => (
                            <MenuGroup title={group.title} key={idx}>
                                {group.children.map((menu) => (
                                    <MenuItem key={menu.path}>
                                        <NavLink to={menu.path}>
                                            <p>{menu.title}</p>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </MenuGroup>
                        ))}
                    </SubMenu>
                </Menu>
            </Fragment>
        )
    }
}
