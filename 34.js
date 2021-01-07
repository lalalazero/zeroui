(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{98:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var o=c(a(0)),l=(c(a(5)),a(3));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(){return o.default.createElement("div",{className:"col-with-bg"},o.default.createElement(l.Row,{justify:"start",className:"row-padding-10"},o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4")),o.default.createElement(l.Row,{justify:"center",className:"row-padding-10"},o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4")),o.default.createElement(l.Row,{justify:"end",className:"row-padding-10"},o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4")),o.default.createElement(l.Row,{justify:"space-between",className:"row-padding-10"},o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4")),o.default.createElement(l.Row,{justify:"space-around",className:"row-padding-10"},o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4"),o.default.createElement(l.Col,{span:4},"col-span-4")))};n.LiveDemo=function(){return o.default.createElement(s,null)};n.markdown={subject:"Flex 布局",desc:"<code>Row</code> 本身使用 <code>flex</code> 布局，可以通过 <code>justify</code> 设置子元素的排列方式，可选值为 <code>start</code> <code>center</code> <code>end</code> <code>space-between</code> <code>space-around</code> 。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Row, Col } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="col-with-bg">\n            <Row justify="start" className="row-padding-10">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n            <Row justify="center" className="row-padding-10">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n            <Row justify="end" className="row-padding-10">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n            <Row justify="space-between" className="row-padding-10">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n            <Row justify="space-around" className="row-padding-10">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n        </div>\n    )\n}\n',css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}\n.row-padding-10 {\n    padding: 10px 0;\n    background: #ccc;\n}"}}}]);