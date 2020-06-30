import React from 'react'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'
import { Button, ButtonGroup } from '../../../components/index'
import mountTest from '../../mountTest'

describe('button 测试', () => {
    mountTest(Button)
    mountTest(() => <Button size="large"></Button>)
    mountTest(() => <Button size="small"></Button>)
    mountTest(ButtonGroup)
    it('renders ok', () => {
        const button = renderer.create(<Button>button</Button>)
        let tree = button.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('可以设置icon', () => {
        const wrapper = renderer.create(<Button icon="wechat">button</Button>)
        let tree = wrapper.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('可以设置loading', () => {
        const wrapper = renderer.create(<Button icon="wechat" loading={true}></Button>)
        let tree = wrapper.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('图标可以设置在右侧', () => {
        const wrapper = mount(<Button icon="wechat" position='right'>button</Button>)
        expect(wrapper.find('.zeroUI-button-right')).toHaveLength(1)
    })

    it('正常状态可以click', () => {
        const fn = jest.fn()
        const wrapper = mount(<Button onClick={fn}>Button</Button>)
        wrapper.simulate('click')
        expect(fn).toHaveBeenCalled()
    })

    it('disabled时不可以click', () => {
        const fn = jest.fn()
        const wrapper = mount(<Button onClick={fn} disabled>Button</Button>)
        wrapper.simulate('click')
        expect(fn).not.toHaveBeenCalled()
    })
})