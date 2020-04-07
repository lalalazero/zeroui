import React from 'react'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'
import Icon from '../../../components/icon/Icon'
describe('icon 测试', () => {
    it('name = wechat', () => {
        const icon = renderer.create(<Icon name="wechat"></Icon>)
        let tree = icon.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('onClick event', () => {
        let n = 1
        const fn = () => {
            n = 2
        }
        const component = mount(<Icon name="alipay" onClick={fn}></Icon>)
        component.find('svg').simulate('click')
        expect(n).toEqual(2)
    })
    it('onClick event, jest.fn() 测试', () => {
        let fn = jest.fn()
        let fn2 = jest.fn()
        const component = mount(<Icon name="alipay" onClick={fn}></Icon>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })
})