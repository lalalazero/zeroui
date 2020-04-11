import classnames, { scopedClassMaker }  from '../../../components/_util/classes'

describe('classnames 测试', () => {
    it('接受1个 classname', () => {
        const result = classnames('a')
        expect(result).toEqual('a')
    })
    it('接受2个 classnames', () => {
        expect(classnames('a', 'b')).toEqual('a b')
    })
    it('接受 undefined', () => {
        expect(classnames('a', undefined)).toEqual('a')
    })
    it('什么都不传', () => {
        expect(classnames()).toEqual('')
    })
})

describe('scopedClassMaker 测试', () => {
    it('接受字符串或者对象', (done) => {
        const sc = scopedClassMaker('zeroUI-layout')
        expect(sc('')).toEqual('zeroUI-layout')
        expect(sc('header')).toEqual('zeroUI-layout-header')
        expect(sc({ hasSider: true })).toEqual('zeroUI-layout zeroUI-layout-has-sider')
        expect(sc({ hasSider: true, active: true })).toEqual('zeroUI-layout zeroUI-layout-has-sider zeroUI-layout-active')

        expect(sc('', 'userclass')).toEqual('zeroUI-layout userclass')
        expect(sc('header', 'userclass')).toEqual('zeroUI-layout-header userclass')
        expect(sc({ hasSider: true }, 'userclass')).toEqual('zeroUI-layout zeroUI-layout-has-sider userclass')
        done()

    })
})