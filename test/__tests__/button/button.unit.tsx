import React from 'react'
import renderer from 'react-test-renderer';
import { Button } from '../../../components/index'

describe('button 测试', () => {
    it('是个div',()=>{
        const button = renderer.create(<Button>button</Button>)
        let tree = button.toJSON()
        expect(tree).toMatchSnapshot()
    })
})