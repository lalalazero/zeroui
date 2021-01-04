import BadgeExample from './badge'
import ButtonDemo from './button'
import CardExample from './card'
import CheckboxExample from './checkbox'
import DialogExample from './dialog/Dialog.example'
import GridExample from './grid'
import IconExample from './icon/Icon.example'
import InputExample from './input'
import InputNumberExample from './input-number'
import LayoutExample from './layout'
import MenuExample from './menu'
import NotificationExample from './notification'
import PaginationExample from './pagination'
import RadioExample from './radio'
import RateExample from './rate'
import SelectExample from './select'
import SwitchExample from './switch'
import TooltipExample from './tooltip'
import TreeExample from './tree'

export const basicComponentsRoute = [
    {
        title: '通用',
        children: [
            {
                title: 'Icon 图标',
                path: '/icon',
                component: IconExample,
            },
            {
                title: 'Button 按钮',
                path: '/button',
                component: ButtonDemo,
            },
        ],
    },
    {
        title: '导航',
        children: [
            {
                title: 'Menu 导航菜单',
                path: '/menu',
                component: MenuExample,
            },
            {
                title: 'Pagination 分页',
                path: '/pagination',
                component: PaginationExample,
            },
        ],
    },
    {
        title: '数据录入',
        children: [
            {
                title: 'Input 输入框',
                path: '/input',
                component: InputExample,
            },
            {
                title: 'InputNumber 整数输入框',
                path: '/input-number',
                component: InputNumberExample,
            },
            {
                title: 'Select 选择框',
                path: '/select',
                component: SelectExample,
            },
            {
                title: 'Switch 开关',
                path: '/switch',
                component: SwitchExample,
            },
            {
                title: 'Checkbox 多选框',
                path: '/checkbox',
                component: CheckboxExample,
            },
            {
                title: 'Radio 单选框',
                path: '/radio',
                component: RadioExample,
            },
            {
                title: 'Rate 评分',
                path: '/rate',
                component: RateExample,
            },
        ],
    },
    {
        title: '数据展示',
        children: [
            {
                title: 'Badge 徽标数',
                path: '/badge',
                component: BadgeExample,
            },
            {
                title: 'Tooltip 文字提示',
                path: '/tooltip',
                component: TooltipExample,
            },
            {
                title: 'Card 卡片',
                path: '/card',
                component: CardExample,
            },
            {
                title: 'Tree 树',
                path: '/tree',
                component: TreeExample,
            },
        ],
    },
    {
        title: '反馈',
        children: [
            {
                title: 'Dialog 对话框',
                path: '/dialog',
                component: DialogExample,
            },
            {
                title: 'Notification 通知框',
                path: '/notification',
                component: NotificationExample,
            },
        ],
    },
    {
        title: '布局',
        children: [
            {
                title: 'Layout 布局',
                path: '/layout',
                component: LayoutExample,
            },
            {
                title: 'Grid 栅格',
                path: '/grid',
                component: GridExample,
            },
        ],
    },
]
