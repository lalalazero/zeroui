const babel = require('@babel/core')

function render(resouce) {
    let result = babel.transformSync(resouce)
    return result.code
}

module.exports = render
