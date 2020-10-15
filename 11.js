(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var a=o(n(0)),l=(o(n(3)),n(2));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(l.Row,{gutter:16},a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6")),a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6")),a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6")),a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6"))),a.default.createElement(l.Row,{gutter:32},a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6")),a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6")),a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6")),a.default.createElement(l.Col,{span:6},a.default.createElement("div",{className:"gutter-div"},"col-span-6"))))};t.LiveDemo=function(){return a.default.createElement(d,null)};t.markdown={subject:"区块间隔",desc:"栅格常常需要和间隔进行配合，通过 <code>Row</code> 的 <code>gutter</code> 属性，轻松创建平均布局。<code>gutter</code> 建议设置为 16+8n , n 为自然数。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Row, Col } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div>\n            <Row gutter={16}>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n            </Row>\n            <Row gutter={32}>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n                <Col span={6}>\n                    <div className="gutter-div">col-span-6</div>\n                </Col>\n            </Row>\n        </div>\n    )\n}\n',css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.gutter-div {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    background-color: #87e8de;\n}"}}}]);