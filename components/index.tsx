import Icon from './icon/Icon'
import Dialog, { confirm, modal, alert } from './dialog/Dialog'
import Button from './button/Button'
import Layout from './layout/Layout'
import Content from "./layout/Content"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Sider from "./layout/Sider"

import './index.scss'

const message = {
    confirm,
    modal,
    alert
}

export {
    Icon, Dialog, Button, Layout, Content, Header, Footer,
    Sider, message
}