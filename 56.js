(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{122:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o,i=(o=t(0))&&o.__esModule?o:{default:o},c=t(3);var u=function(){return i.default.createElement("div",null,i.default.createElement(c.Button,{onClick:function(){c.notification.open({title:i.default.createElement("h4",null,"标题"),body:"通知内容"})}},"打开通知"))};e.LiveDemo=function(){return i.default.createElement(u,null)};e.markdown={subject:"基本用法",desc:"简单使用，打开后 5s 自动关闭",code:"import React from 'react'\nimport { Button, notification } from 'zero-ui-react'\n\nconst App = () => {\n    const onClick = () => {\n        notification.open({\n            title: <h4>标题</h4>,\n            body: '通知内容',\n        })\n    }\n    return (\n        <div>\n            <Button onClick={onClick}>打开通知</Button>\n        </div>\n    )\n}\n",css:""}}}]);