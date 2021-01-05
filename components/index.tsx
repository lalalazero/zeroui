import { alert, confirm, modal } from './dialog/Dialog'
import './index.scss'
const message = {
    confirm,
    modal,
    alert,
}
export { default as Badge } from './badge/index'
export { default as Breadcrumb } from './breadcrumb/index'
export { Button, ButtonGroup } from './button/index'
export { default as Card } from './card'
export { default as Checkbox } from './checkbox/index'
export { default as Dialog } from './dialog/Dialog'
export { default as Col } from './grid/Col'
export { default as Row } from './grid/Row'
export { default as Icon } from './icon/Icon'
export { default as TextInput } from './input'
export { default as NumberInput } from './input-number'
export { default as Content } from './layout/Content'
export { default as Footer } from './layout/Footer'
export { default as Header } from './layout/Header'
export { default as Layout } from './layout/Layout'
export { default as Sider } from './layout/Sider'
export { default as Menu } from './menu/index'
export { default as notification } from './notification/Notification'
export { default as Pagination } from './pagination'
export { default as Radio } from './radio/index'
export { default as Rate } from './rate/index'
export { default as Select } from './select/index'
export { default as Switch } from './switch/index'
export { default as Tooltip } from './tooltip/Tooltip'
export { default as Tree } from './tree/index'
export { message }
