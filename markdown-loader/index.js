const md = require('markdown-it')()
function jsxFence(tokens, idx, options, env, self) {
    let token = tokens[idx]
    if(token.info === 'jsx') {
        return `<codeToken> ${token.content} </codeToken>`
    }
  };
  
md.renderer.rules['fence'] = jsxFence

function stripSubject(content) {
    const result = content.match(/<(h2)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripDescription(content) {
    const result = content.match(/<(p)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripDemo(content) {
    const result = content.match(/<(codeToken)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripExampleCode(content) {
    let demo = stripDemo(content)
    let index = demo.indexOf('export default')
    let name = demo.substring(index + 'export default'.length + 1)
    let code = demo.substring(0, index)
    let x = code + `\nReactDOM.render(<${name} />, MountNode)`
    let y = code + `\nReactDOM.render(<${name} />, document.getElementById('xxx'))`
    return {
        code: x,
        demo: y
    }
}

function render(resource) {
    let content = md.render(resource)
    let subject = stripSubject(content)
    let desc = stripDescription(content)
    let { code, demo } = stripExampleCode(content)
    
    let xxx = {
        subject,
        desc,
        demo,
        code,
    }
    return `export default ${JSON.stringify(xxx)}`
}

module.exports = render