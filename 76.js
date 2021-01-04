(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{137:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var a=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(0)),r=t(3);var c=function(){var e=[{title:"parent 1",key:"1",icon:a.default.createElement(r.Icon,{name:"happy"}),children:[{title:"parent 1-1",key:"1-1",children:[{title:"leaf",key:"1-1-1"},{title:"leaf",key:"1-1-2"}]},{title:a.default.createElement("span",{style:{color:"pink"}},"parent 1-2"),icon:a.default.createElement(r.Icon,{name:"joy"}),key:"1-2",children:[{title:"sss",key:"1-2-1"}]}]}],n=a.default.createElement(r.Icon,{name:"down"}),t=a.default.createElement(r.Icon,{name:"right"});return a.default.createElement("div",null,a.default.createElement(r.Tree,{treeData:e,checkable:!1,expandIcon:n,collapseIcon:t}))};n.LiveDemo=function(){return a.default.createElement(c,null)};n.markdown={subject:"自定义图标",desc:"自定义折叠和节点图标",code:"import React, { useState } from 'react'\nimport { Tree, Icon } from 'zero-ui-react'\n\nconst App = () => {\n    const treeData = [\n        {\n            title: 'parent 1',\n            key: '1',\n            icon: <Icon name=\"happy\" />,\n            children: [\n                {\n                    title: 'parent 1-1',\n                    key: '1-1',\n                    children: [\n                        {\n                            title: 'leaf',\n                            key: '1-1-1',\n                        },\n                        {\n                            title: 'leaf',\n                            key: '1-1-2',\n                        },\n                    ],\n                },\n                {\n                    title: <span style={{ color: 'pink' }}>parent 1-2</span>,\n                    icon: <Icon name=\"joy\" />,\n                    key: '1-2',\n                    children: [\n                        {\n                            title: 'sss',\n                            key: '1-2-1',\n                        },\n                    ],\n                },\n            ],\n        },\n    ]\n\n    const expandIcon = <Icon name=\"down\" />\n    const collapseIcon = <Icon name=\"right\" />\n\n    return (\n        <div>\n            <Tree\n                treeData={treeData}\n                checkable={false}\n                expandIcon={expandIcon}\n                collapseIcon={collapseIcon}\n            />\n        </div>\n    )\n}\n",css:""}}}]);