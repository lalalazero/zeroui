(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{121:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}(t(0)),c=t(3);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){c=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(){var e=o((0,r.useState)(!1),2),n=e[0],t=e[1];return r.default.createElement("div",null,r.default.createElement(c.Switch,{checked:n,onChange:function(e,n){t(n)}}))};n.LiveDemo=function(){return r.default.createElement(a,null)};n.markdown={subject:"基本用法",desc:"状态切换开关",code:"import React, { useState } from 'react'\nimport { Switch } from 'zero-ui-react'\n\nconst App = () => {\n    const [checked, setChecked] = useState(false)\n    const onClick = () => {\n        setChecked(!checked)\n    }\n\n    const handleChange = (name, newCheck) => {\n        setChecked(newCheck)\n    }\n    return (\n        <div>\n            <Switch checked={checked} onChange={handleChange}></Switch>\n        </div>\n    )\n}\n",css:""}}}]);