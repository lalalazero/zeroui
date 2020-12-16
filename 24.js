(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{78:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var r=c(o(0)),l=(c(o(4)),o(3));function c(e){return e&&e.__esModule?e:{default:e}}var t=function(){return r.default.createElement("div",{className:"col-with-bg"},r.default.createElement(l.Row,null,r.default.createElement(l.Col,{span:6,order:4},"col-1 span-6 order-4"),r.default.createElement(l.Col,{span:6,order:3},"col-2 span-6 order-3"),r.default.createElement(l.Col,{span:6,order:2},"col-3 span-6 order-2"),r.default.createElement(l.Col,{span:6,order:1},"col-4 span-6 order-1")))};n.LiveDemo=function(){return r.default.createElement(t,null)};n.markdown={subject:"Flex 排序",desc:"通过 <code>flex</code> 布局的 <code>order</code> 属性来改变元素的排列顺序。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Row, Col } from 'zero-ui-react'\nconst App = () => {\n    return (\n        <div className=\"col-with-bg\">\n            <Row>\n                <Col span={6} order={4}>\n                    col-1 span-6 order-4\n                </Col>\n                <Col span={6} order={3}>\n                    col-2 span-6 order-3\n                </Col>\n                <Col span={6} order={2}>\n                    col-3 span-6 order-2\n                </Col>\n                <Col span={6} order={1}>\n                    col-4 span-6 order-1\n                </Col>\n            </Row>\n        </div>\n    )\n}\n",css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}"}}}]);