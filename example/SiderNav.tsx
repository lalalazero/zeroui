import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '../components'
import { ExampleContext } from './Example'
import { basicComponentsRoute } from './route'

const { MenuItem, SubMenu, MenuGroup } = Menu

const SideNav: React.FC<{}> = () => {
    const activeMenu = useContext(ExampleContext)
    return (
        <Fragment>
            <Menu
                defaultSelectedKeys={['/button']}
                defaultOpenKeys={['components']}
                selectedKeys={[activeMenu]}
            >
                <MenuItem>
                    <NavLink to="/color">
                        <p>色彩搭配</p>
                    </NavLink>
                </MenuItem>

                <SubMenu title="基础组件" key={'components'}>
                    {basicComponentsRoute.map((group, gIdx) => (
                        <MenuGroup title={group.title} key={gIdx}>
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

export default SideNav
