(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{50:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o=a(n(0)),u=(a(n(3)),n(2));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){return o.default.createElement("div",{style:{background:"#ccc",padding:"20px 0"},className:"space-button"},o.default.createElement(u.Button,{ghost:!0,type:"primary"},"主要"),o.default.createElement(u.Button,{ghost:!0},"基本"),o.default.createElement(u.Button,{ghost:!0,type:"dashed"},"虚线"),o.default.createElement(u.Button,{ghost:!0,type:"text"},"无边框"),o.default.createElement(u.Button,{ghost:!0,type:"danger"},"危险"))};e.LiveDemo=function(){return o.default.createElement(r,null)};e.markdown={subject:"幽灵按钮",desc:"幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Button } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div\n            style={{ background: '#ccc', padding: '20px 0' }}\n            className=\"space-button\"\n        >\n            <Button ghost type=\"primary\">\n                主要\n            </Button>\n            <Button ghost>基本</Button>\n            <Button ghost type=\"dashed\">\n                虚线\n            </Button>\n            <Button ghost type=\"text\">\n                无边框\n            </Button>\n            <Button ghost type=\"danger\">\n                危险\n            </Button>\n        </div>\n    )\n}\n",css:""}}}]);