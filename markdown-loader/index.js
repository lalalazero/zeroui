const md = require('markdown-it')()
function jsxFence(tokens, idx, options, env, self) {
    let token = tokens[idx]
    if (token.info === 'jsx') {
        return `<codeToken> ${token.content} </codeToken>`
    } else if(token.info === 'css') {
        return `<cssToken> ${token.content} </cssToken>`
    }
}

md.renderer.rules['fence'] = jsxFence

function stripSubject(content) {
    const result = content.match(/<(h2)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripDescription(content) {
    const result = content.match(/<(p)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripCss(content) {
    const result = content.match(/<(cssToken)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripDemo(content) {
    const result = content.match(/<(codeToken)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripExampleCode(content) {
    let demo = stripDemo(content)
    let css = stripCss(content)
    let index = demo.indexOf('export default')
    let name = demo.substring(index + 'export default'.length + 1)
    let code = demo.substring(0, index)
    let x = code + `\nReactDOM.render(<${name} />, MountNode)`
    let y = code + `\nReactDOM.render(<${name} />, document.getElementById('xxx'))`
    return {
        code: x,
        demo: y,
        css
    }
}

function render(resource) {
    let content = md.render(resource)
    if (content.indexOf('table') >= 0 && content.indexOf('API') >= 0) {
        let yyy = {
            apiContent: content
        }
        return `export default ${JSON.stringify(yyy)}`
    }
    let subject = stripSubject(content)
    let desc = stripDescription(content)
    let { code, demo, css } = stripExampleCode(content)

    let xxx = {
        subject,
        desc,
        demo,
        code,
        css
    }
    return `export default ${JSON.stringify(xxx)}`
}

module.exports = render