// enzeme 的初始化测试
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({adapter: new Adapter()})