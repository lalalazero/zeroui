(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{81:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var r=d(t(0)),a=(d(t(5)),t(3));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement("div",{style:{background:"#ccc",padding:20}},r.default.createElement(a.Card,{title:"无边框卡片",bordered:!1},r.default.createElement("p",null,"卡片内容"),r.default.createElement("p",null,"卡片内容"),r.default.createElement("p",null,"卡片内容"),r.default.createElement("p",null,"卡片内容")))};n.LiveDemo=function(){return r.default.createElement(c,null)};n.markdown={subject:"无边框",desc:"在深色背景下去掉边框",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Card } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div style={{ background: '#ccc', padding: 20 }}>\n            <Card title={'无边框卡片'} bordered={false}>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n            </Card>\n        </div>\n    )\n}\n",css:""}}}]);