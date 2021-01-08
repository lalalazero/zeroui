(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var c=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};c.get||c.set?Object.defineProperty(t,n,c):t[n]=e[n]}return t.default=e,t}(n(0)),r=n(3);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],c=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(c=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);c=!0);}catch(e){r=!0,i=e}finally{try{c||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(){var e=i((0,c.useState)(!1),2),t=e[0],n=e[1],o=function(){n(!t)};return c.default.createElement("div",null,c.default.createElement(r.Switch,{onClick:o,checked:t,size:"large"}),c.default.createElement(r.Switch,{onClick:o,checked:t}),c.default.createElement(r.Switch,{onClick:o,checked:t,size:"small"}))};t.LiveDemo=function(){return c.default.createElement(o,null)};t.markdown={subject:"不同大小",desc:"支持三种不同大小设置",code:"import React, { useState } from 'react'\nimport { Switch } from 'zero-ui-react'\n\nconst App = () => {\n    const [checked, setChecked] = useState(false)\n    const onClick = () => {\n        setChecked(!checked)\n    }\n    return (\n        <div>\n            <Switch onClick={onClick} checked={checked} size=\"large\"></Switch>\n            <Switch onClick={onClick} checked={checked}></Switch>\n            <Switch onClick={onClick} checked={checked} size=\"small\"></Switch>\n        </div>\n    )\n}\n",css:""}}}]);