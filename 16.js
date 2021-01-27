(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var d=u(n(0)),a=(u(n(4)),n(3));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(){return d.default.createElement("div",{className:"space-button"},d.default.createElement("div",null,d.default.createElement(a.Button,{type:"primary"},"主要"),d.default.createElement(a.Button,{disabled:!0,type:"primary"},"主要(禁用态)")),d.default.createElement("div",null,d.default.createElement(a.Button,null,"基本"),d.default.createElement(a.Button,{disabled:!0},"基本(禁用态)")),d.default.createElement("div",null,d.default.createElement(a.Button,{type:"dashed"},"虚线"),d.default.createElement(a.Button,{type:"dashed",disabled:!0},"虚线(禁用态)")),d.default.createElement("div",null,d.default.createElement(a.Button,{type:"text"},"无边框"),d.default.createElement(a.Button,{disabled:!0,type:"text"},"无边框(禁用态)")))};e.LiveDemo=function(){return d.default.createElement(l,null)};e.markdown={subject:"不可用状态",desc:"添加 <code>disabled</code> 属性即处于不可用状态。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="space-button">\n            <div>\n                <Button type="primary">主要</Button>\n                <Button disabled type="primary">\n                    主要(禁用态)\n                </Button>\n            </div>\n            <div>\n                <Button>基本</Button>\n                <Button disabled>基本(禁用态)</Button>\n            </div>\n            <div>\n                <Button type="dashed">虚线</Button>\n                <Button type="dashed" disabled>\n                    虚线(禁用态)\n                </Button>\n            </div>\n            <div>\n                <Button type="text">无边框</Button>\n                <Button disabled type="text">\n                    无边框(禁用态)\n                </Button>\n            </div>\n        </div>\n    )\n}\n',css:""}}}]);