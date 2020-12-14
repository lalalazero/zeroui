(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{71:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var l=a(o(0)),t=(a(o(4)),o(3));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(){return l.default.createElement("div",{className:"col-with-bg"},l.default.createElement(t.Row,null,l.default.createElement(t.Col,{span:6},"col-span-6"),l.default.createElement(t.Col,{span:6},"col-span-6"),l.default.createElement(t.Col,{span:6,offset:6},"col-span-6-offset-6")),l.default.createElement(t.Row,null,l.default.createElement(t.Col,{span:6},"col-span-6"),l.default.createElement(t.Col,{span:6,offset:6},"col-span-6-offset-6"),l.default.createElement(t.Col,{span:6},"col-span-6")))};n.LiveDemo=function(){return l.default.createElement(c,null)};n.markdown={subject:"左右偏移",desc:"利用 <code>offset</code> 实现向右偏移，比如 <code>offset={4}</code> 就是向右偏移了 4 个宽度（宽度总是 24 份等分）。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Row, Col } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div className=\"col-with-bg\">\n            <Row>\n                <Col span={6}>col-span-6</Col>\n                <Col span={6}>col-span-6</Col>\n                <Col span={6} offset={6}>\n                    col-span-6-offset-6\n                </Col>\n            </Row>\n            <Row>\n                <Col span={6}>col-span-6</Col>\n                <Col span={6} offset={6}>\n                    col-span-6-offset-6\n                </Col>\n                <Col span={6}>col-span-6</Col>\n            </Row>\n        </div>\n    )\n}\n",css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}"}}}]);