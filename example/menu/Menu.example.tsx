import React from 'react'
import { Menu } from '../../components'
import DemoCard from '../DemoCard'
import * as content01 from './01-内嵌菜单.md'

const { MenuGroup, MenuItem, SubMenu } = Menu

const MenuExample01 = () => {
    return (
        <div>
            <Menu>
                <SubMenu title="Navigation One">
                    <MenuGroup title="Item 1">
                        <MenuItem>Option 1</MenuItem>
                        <MenuItem>Option 2</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="Item 2">
                        <MenuItem>Option 3</MenuItem>
                        <MenuItem>Option 4</MenuItem>
                    </MenuGroup>
                </SubMenu>
                <SubMenu title="Navigation Two">
                    <MenuItem>Option 5</MenuItem>
                    <MenuItem>Option 6</MenuItem>
                    <SubMenu title="Submenu">
                        <MenuItem>Option 7</MenuItem>
                        <MenuItem>Option 8</MenuItem>
                    </SubMenu>
                </SubMenu>
                <SubMenu title="Navigation Three">
                    <MenuItem>Option 9</MenuItem>
                    <MenuItem>Option 10</MenuItem>
                    <MenuItem>Option 11</MenuItem>
                    <MenuItem>Option 12</MenuItem>
                </SubMenu>
            </Menu>
        </div>
    )
}

const DemoCard01 = (
    <DemoCard markdown={content01.default}>
        <MenuExample01 />
    </DemoCard>
)

export default function MenuDemo() {
    return <div className="zeroUI-menu-example">{DemoCard01}</div>
}
