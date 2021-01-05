(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{97:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var a=r(t(0)),l=(r(t(5)),t(3));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,l=!1,r=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(t.push(u.value),!n||t.length!==n);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(){var e=u(a.default.useState(""),2),n=e[0],t=e[1],r=function(e,n){t(n)};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{style:{marginBottom:16}},a.default.createElement(l.TextInput,{placeholder:"large",size:"large",value:n,onChange:r})),a.default.createElement("div",{style:{marginBottom:16}},a.default.createElement(l.TextInput,{placeholder:"default",value:n,onChange:r})),a.default.createElement("div",{style:{marginBottom:16}},a.default.createElement(l.TextInput,{placeholder:"small",size:"small",value:n,onChange:r})))};n.LiveDemo=function(){return a.default.createElement(o,null)};n.markdown={subject:"尺寸大小",desc:"三种不同尺寸的输入框",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { TextInput } from \'zero-ui-react\'\n\nconst App = () => {\n    const [inputValue, setInputValue] = React.useState(\'\')\n    const onChange = (name, value) => {\n        setInputValue(value)\n    }\n    return (\n        <>\n            <div style={{ marginBottom: 16 }}>\n                <TextInput\n                    placeholder="large"\n                    size="large"\n                    value={inputValue}\n                    onChange={onChange}\n                ></TextInput>\n            </div>\n\n            <div style={{ marginBottom: 16 }}>\n                <TextInput\n                    placeholder="default"\n                    value={inputValue}\n                    onChange={onChange}\n                ></TextInput>\n            </div>\n            <div style={{ marginBottom: 16 }}>\n                <TextInput\n                    placeholder="small"\n                    size="small"\n                    value={inputValue}\n                    onChange={onChange}\n                ></TextInput>\n            </div>\n        </>\n    )\n}\n',css:""}}}]);