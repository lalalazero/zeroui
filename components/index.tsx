import { Button, ButtonGroup } from './button/index'
import Dialog, { alert, confirm, modal } from './dialog/Dialog'
import Icon from './icon/Icon'
import './index.scss'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Layout from './layout/Layout'
import Sider from './layout/Sider'
import { notification } from './notification/Notification'

const message = {
    confirm,
    modal,
    alert,
}

export { default as Col } from './grid/Col'
export { default as Row } from './grid/Row'
export { default as Input } from './input/index'
export { default as Menu } from './menu/index'
export { default as Notification } from './notification/Notification'
export { default as Pagination } from './pagination'
export { default as Select } from './select/index'
export { default as Tooltip } from './tooltip/Tooltip'
export {
    Icon,
    Dialog,
    Layout,
    Content,
    Header,
    Footer,
    Sider,
    message,
    Button,
    ButtonGroup,
    notification,
}
