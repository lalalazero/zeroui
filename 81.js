(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{143:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}(t(0)),a=t(3);var l=function(){var e=[{title:"parent 1",key:"1",children:[{title:"parent 1-1",key:"1-1",children:[{title:"leaf",key:"1-1-1"},{title:"leaf",key:"1-1-2"}]},{title:r.default.createElement("span",{style:{color:"pink"}},"parent 1-2"),key:"1-2",children:[{title:"sss",key:"1-2-1"}]}]}];return r.default.createElement("div",null,r.default.createElement(a.Tree,{treeData:e,checkable:!1,defaultExpandKeys:["1","1-1"]}))};n.LiveDemo=function(){return r.default.createElement(l,null)};n.markdown={subject:"限制高度滚动",desc:"限制高度滚动(待完成)",code:"import React, { useState } from 'react'\nimport { Tree } from 'zero-ui-react'\n\nconst App = () => {\n    const treeData = [\n        {\n            title: 'parent 1',\n            key: '1',\n            children: [\n                {\n                    title: 'parent 1-1',\n                    key: '1-1',\n                    children: [\n                        {\n                            title: 'leaf',\n                            key: '1-1-1',\n                        },\n                        {\n                            title: 'leaf',\n                            key: '1-1-2',\n                        },\n                    ],\n                },\n                {\n                    title: <span style={{ color: 'pink' }}>parent 1-2</span>,\n                    key: '1-2',\n                    children: [\n                        {\n                            title: 'sss',\n                            key: '1-2-1',\n                        },\n                    ],\n                },\n            ],\n        },\n    ]\n\n    return (\n        <div>\n            <Tree\n                treeData={treeData}\n                checkable={false}\n                defaultExpandKeys={['1', '1-1']}\n            />\n        </div>\n    )\n}\n",css:""}}}]);