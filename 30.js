(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{85:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var r=a(t(0)),u=(a(t(4)),t(3));function a(n){return n&&n.__esModule?n:{default:n}}function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,u=!1,a=void 0;try{for(var o,l=n[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){u=!0,a=n}finally{try{r||null==l.return||l.return()}finally{if(u)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var n=o(r.default.useState(""),2),e=n[0],t=n[1];return r.default.createElement(u.Input.TextInput,{label:"Name: ",value:e,onChange:function(n,e){t(e)}})};e.LiveDemo=function(){return r.default.createElement(l,null)};e.markdown={subject:"标签、前缀和后缀",desc:"为输入框添加额外的信息。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Input } from 'zero-ui-react'\n\nconst App = () => {\n    const [inputValue, setInputValue] = React.useState('')\n    const onChange = (name, value) => {\n        setInputValue(value)\n    }\n    return (\n        <Input.TextInput\n            label=\"Name: \"\n            value={inputValue}\n            onChange={onChange}\n        ></Input.TextInput>\n    )\n}\n",css:""}}}]);