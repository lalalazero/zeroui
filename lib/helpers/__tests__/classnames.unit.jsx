import classnames from '../classnames'
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