(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{83:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var r=a(t(0)),u=(a(t(4)),t(3));function a(n){return n&&n.__esModule?n:{default:n}}function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,u=!1,a=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){u=!0,a=n}finally{try{r||null==c.return||c.return()}finally{if(u)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(){var n=o(r.default.useState(""),2),e=n[0],t=n[1];return r.default.createElement(u.Input.TextInput,{placeholder:"enter your name",value:e,onChange:function(n,e){t(e)}})};e.LiveDemo=function(){return r.default.createElement(c,null)};e.markdown={subject:"基本用法",desc:"基本的文本输入框。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Input } from 'zero-ui-react'\n\nconst App = () => {\n    const [inputValue, setInputValue] = React.useState('')\n    const onChange = (name, value) => {\n        setInputValue(value)\n    }\n    return (\n        <Input.TextInput\n            placeholder={'enter your name'}\n            value={inputValue}\n            onChange={onChange}\n        ></Input.TextInput>\n    )\n}\n",css:""}}}]);