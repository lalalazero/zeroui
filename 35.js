(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{99:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var t=a(o(0)),r=(a(o(5)),o(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(){return t.default.createElement(r.NumberInput,{min:1,max:10,onChange:function(e,n){console.log("change..",n)}})};n.LiveDemo=function(){return t.default.createElement(u,null)};n.markdown={subject:"整数输入框",desc:"基本的数字输入",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { NumberInput } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, value) => {\n        console.log('change..', value)\n    }\n    return <NumberInput min={1} max={10} onChange={handleChange}></NumberInput>\n}\n",css:""}}}]);