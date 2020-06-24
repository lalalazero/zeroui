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
    it('renders ok',()=>{
        const button = renderer.create(<Button>button</Button>)
        let tree = button.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('可以设置icon', () => {
        const wrapper = mount(<Button icon="wechat">button</Button>)
        
    })
})