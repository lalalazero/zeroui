import React from 'react'
import renderer from 'react-test-renderer';
import Button from '../../../lib/button/Button'

describe('button 测试', () => {
    it('是个div',()=>{
        const button = renderer.create(<Button></Button>)
        let tree = button.toJSON()
        expect(tree).toMatchSnapshot()
    })
})