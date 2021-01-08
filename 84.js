(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{148:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var c=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var c=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};c.get||c.set?Object.defineProperty(n,t,c):n[t]=e[t]}return n.default=e,n}(t(0)),r=t(3);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],c=!0,r=!1,l=void 0;try{for(var a,s=e[Symbol.iterator]();!(c=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);c=!0);}catch(e){r=!0,l=e}finally{try{c||null==s.return||s.return()}finally{if(r)throw l}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(){var e=[{title:"parent 1",key:"1",children:[{title:"parent 1-1",key:"1-1",children:[{title:"leaf",key:"1-1-1"},{title:"leaf",key:"1-1-2"}]},{title:c.default.createElement("span",{style:{color:"pink"}},"parent 1-2"),key:"1-2",children:[{title:"sss",key:"1-2-1"}]}]}],n=l((0,c.useState)(["1-1-1"]),2),t=n[0],a=n[1],s=l((0,c.useState)(["1-1-1"]),2),o=s[0],d=s[1],i=l((0,c.useState)(["1","1-2"]),2),y=i[0],p=i[1];return c.default.createElement("div",null,c.default.createElement(r.Tree,{treeData:e,onCheck:function(e,n,t){console.log("handleCheck..",e),d(e)},onSelect:function(e,n){console.log("handleSelect..",e),a(e)},onExpand:function(e,n){console.log("handleExpand..",e),p(e)},selectedKeys:t,checkedKeys:o,expandKeys:y}))};n.LiveDemo=function(){return c.default.createElement(a,null)};n.markdown={subject:"完全受控",desc:"完全受控示例",code:"import React, { useState } from 'react'\nimport { Tree } from 'zero-ui-react'\n\nconst App = () => {\n    const treeData = [\n        {\n            title: 'parent 1',\n            key: '1',\n            children: [\n                {\n                    title: 'parent 1-1',\n                    key: '1-1',\n                    children: [\n                        {\n                            title: 'leaf',\n                            key: '1-1-1',\n                        },\n                        {\n                            title: 'leaf',\n                            key: '1-1-2',\n                        },\n                    ],\n                },\n                {\n                    title: <span style={{ color: 'pink' }}>parent 1-2</span>,\n                    key: '1-2',\n                    children: [\n                        {\n                            title: 'sss',\n                            key: '1-2-1',\n                        },\n                    ],\n                },\n            ],\n        },\n    ]\n\n    const [selectedKeys, setSelectedKeys] = useState(['1-1-1'])\n    const [checkedKeys, setCheckedKeys] = useState(['1-1-1'])\n    const [expandKeys, setExpandKeys] = useState(['1', '1-2'])\n\n    const handleCheck = (checkedKeys, checkItem, event) => {\n        console.log('handleCheck..', checkedKeys)\n        setCheckedKeys(checkedKeys)\n    }\n\n    const handleSelect = (selectedKeys, node) => {\n        console.log('handleSelect..', selectedKeys)\n        setSelectedKeys(selectedKeys)\n    }\n\n    const handleExpand = (expandKeys, node) => {\n        console.log('handleExpand..', expandKeys)\n        setExpandKeys(expandKeys)\n    }\n\n    return (\n        <div>\n            <Tree\n                treeData={treeData}\n                onCheck={handleCheck}\n                onSelect={handleSelect}\n                onExpand={handleExpand}\n                selectedKeys={selectedKeys}\n                checkedKeys={checkedKeys}\n                expandKeys={expandKeys}\n            />\n        </div>\n    )\n}\n",css:""}}}]);