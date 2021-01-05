(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{98:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var r=a(t(0)),u=(a(t(5)),t(3));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,u=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){u=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(u)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(){var e=o(r.default.useState(""),2),n=e[0],t=e[1];return r.default.createElement(u.TextInput,{placeholder:"enter your name",value:n,onChange:function(e,n){t(n)}})};n.LiveDemo=function(){return r.default.createElement(c,null)};n.markdown={subject:"基本用法",desc:"基本的文本输入框。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { TextInput } from 'zero-ui-react'\n\nconst App = () => {\n    const [inputValue, setInputValue] = React.useState('')\n    const onChange = (name, value) => {\n        setInputValue(value)\n    }\n    return (\n        <TextInput\n            placeholder={'enter your name'}\n            value={inputValue}\n            onChange={onChange}\n        ></TextInput>\n    )\n}\n",css:""}}}]);