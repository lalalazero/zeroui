(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{91:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(n,t,o):n[t]=e[t]}return n.default=e,n}(t(0)),c=t(3);var r=function(){var e=function(e,n){console.log("checkbox change: ",n)};return o.default.createElement("div",null,o.default.createElement(c.Checkbox,{onChange:e,disabled:!0},"单身狗"),o.default.createElement("span",{style:{marginLeft:10}}),o.default.createElement(c.Checkbox,{onChange:e,disabled:!0,checked:!0},"单身狗"))};n.LiveDemo=function(){return o.default.createElement(r,null)};n.markdown={subject:"不可用状态",desc:"checkbox 不可用",code:"import React, { useState } from 'react'\nimport { Checkbox } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, newCheck) => {\n        console.log('checkbox change: ', newCheck)\n    }\n    return (\n        <div>\n            <Checkbox onChange={handleChange} disabled>\n                单身狗\n            </Checkbox>\n            <span style={{ marginLeft: 10 }}></span>\n            <Checkbox onChange={handleChange} disabled checked>\n                单身狗\n            </Checkbox>\n        </div>\n    )\n}\n",css:""}}}]);