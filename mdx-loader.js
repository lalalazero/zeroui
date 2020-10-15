const md = require('markdown-it')()
const babel = require('@babel/core')

function jsxFence(tokens, idx) {
    let token = tokens[idx]
    if (token.info === 'jsx') {
        return `<codeToken> ${token.content} </codeToken>`
    } else if (token.info === 'css') {
        return `<cssToken> ${token.content} </cssToken>`
    }
}

md.renderer.rules['fence'] = jsxFence

function stripSubject(content) {
    const result = content.match(/<(h2)>([\s\S]+)<\/\1>/)
    return result && result[2] ? result[2].trim() : ''
}

function stripDescription(content) {
    const result = content.match(/<(p)>([\s\S]+)<\/\1>/)
    return result && result[2] ? result[2].trim() : ''
}

function stripCss(content) {
    const result = content.match(/<(cssToken)>([\s\S]+)<\/\1>/)
    return result && result[2] ? result[2].trim() : ''
}

function stripDemo(content) {
    const result = content.match(/<(codeToken)>([\s\S]+)<\/\1>/)
    return result && result[2] ? result[2].trim() : ''
}

function stripExampleCode(content) {
    let demo = stripDemo(content)
    let css = stripCss(content)
    let index = demo.indexOf('export default')
    let code = demo.substring(0, index)
    return {
        code: code,
        demo,
        css,
    }
}

function render(resource) {
    let content = md.render(resource)
    if (content.indexOf('table') >= 0 && content.indexOf('API') >= 0) {
        let a = {
            apiContent: content,
        }
        return `export default ${JSON.stringify(a)}`
    }
    let subject = stripSubject(content)
    let desc = stripDescription(content)
    let { code, demo, css } = stripExampleCode(content)

    let markdown = {
        subject,
        desc,
        code,
        css,
    }

    let demo2 = demo.replace(/zero-ui-react/, `../../components`)
    demo2 += '\n'
    demo2 = demo2.replace(
        /export default App/,
        'export const LiveDemo = () => <App />'
    )

    const app = `
        ${demo2}
        export const markdown = ${JSON.stringify(markdown)}
    `
    return babel.transformSync(app).code
}

module.exports = render
