import Icon from './icon/Icon'

import Dialog, { confirm, modal, alert } from './dialog/Dialog'
import Layout from './layout/Layout'
import Content from "./layout/Content"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Sider from "./layout/Sider"
import { Button, ButtonGroup } from './button/index'

import './index.scss'

const message = {
    confirm,
    modal,
    alert
}

export {
    Icon, Dialog, Layout, Content, Header, Footer,
    Sider, message, Button, ButtonGroup
}
export { default as Row } from './grid/Row'
export { default as Col } from './grid/Col'
export { default as Tooltip } from './tooltip/Tooltip'
export { default as Menu } from './menu/Menu'

