(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{130:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.markdown=a.LiveDemo=void 0;var n,t=(n=l(0))&&n.__esModule?n:{default:n},d=l(3);var o=function(){var e={display:"block"};return t.default.createElement("div",null,t.default.createElement("div",null,t.default.createElement("p",null,"单个禁用"),t.default.createElement(d.Radio,{disabled:!0},"单身狗")),t.default.createElement("div",null,"整组禁用",t.default.createElement(d.Radio.Group,{name:"radio-group",disabled:!0,checked:"B"},t.default.createElement(d.Radio,{value:"A",style:e},t.default.createElement("span",{style:{color:"red"}},"A")),t.default.createElement(d.Radio,{value:"B",style:e},t.default.createElement("span",{style:{color:"green"}},"B")),t.default.createElement(d.Radio,{value:"C",style:e},t.default.createElement("span",{style:{color:"blue"}},"C")),t.default.createElement(d.Radio,{value:"D",style:e},t.default.createElement("span",{style:{color:"purple"}},"D")))))};a.LiveDemo=function(){return t.default.createElement(o,null)};a.markdown={subject:"禁用态",desc:"单个禁用和整组禁用",code:"import React from 'react'\nimport { Radio } from 'zero-ui-react'\n\nconst App = () => {\n    const radioStyle = { display: 'block' }\n    return (\n        <div>\n            <div>\n                <p>单个禁用</p>\n                <Radio disabled>单身狗</Radio>\n            </div>\n            <div>\n                整组禁用\n                <Radio.Group name=\"radio-group\" disabled checked=\"B\">\n                    <Radio value={'A'} style={radioStyle}>\n                        <span style={{ color: 'red' }}>A</span>\n                    </Radio>\n                    <Radio value={'B'} style={radioStyle}>\n                        <span style={{ color: 'green' }}>B</span>\n                    </Radio>\n                    <Radio value={'C'} style={radioStyle}>\n                        <span style={{ color: 'blue' }}>C</span>\n                    </Radio>\n                    <Radio value={'D'} style={radioStyle}>\n                        <span style={{ color: 'purple' }}>D</span>\n                    </Radio>\n                </Radio.Group>\n            </div>\n        </div>\n    )\n}\n",css:""}}}]);