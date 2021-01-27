(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{99:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var l=t(o(0)),a=(t(o(4)),o(3));function t(e){return e&&e.__esModule?e:{default:e}}var c=function(){return l.default.createElement("div",{className:"col-with-bg height-diff"},l.default.createElement(a.Row,{align:"top",justify:"center",className:"row-padding-20"},l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4")),l.default.createElement(a.Row,{align:"middle",justify:"center",className:"row-padding-20"},l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4")),l.default.createElement(a.Row,{align:"bottom",justify:"center",className:"row-padding-20"},l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4"),l.default.createElement(a.Col,{span:4},"col-span-4")))};n.LiveDemo=function(){return l.default.createElement(c,null)};n.markdown={subject:"Flex 对齐",desc:"<code>Row</code> 本身使用 <code>flex</code> 布局，可以通过 <code>align</code> 设置子元素的垂直对齐方式，可选值为 <code>top</code> <code>middle</code> <code>botttom</code> 。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Row, Col } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="col-with-bg height-diff">\n            <Row align="top" justify="center" className="row-padding-20">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n            <Row align="middle" justify="center" className="row-padding-20">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n            <Row align="bottom" justify="center" className="row-padding-20">\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n                <Col span={4}>col-span-4</Col>\n            </Row>\n        </div>\n    )\n}\n',css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n    padding: 20px 0;\n    background: #ccc;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}\n.zeroUI-col:nth-child(1) {\n    height: 60px;\n}\n.zeroUI-col:nth-child(2) {\n    height: 110px;\n}\n.zeroUI-col:nth-child(3) {\n    height: 80px;\n}\n.zeroUI-col:nth-child(4) {\n    height: 100px;\n}"}}}]);