(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var u=o(t(0)),l=(o(t(5)),t(3));function o(e){return e&&e.__esModule?e:{default:e}}var a=l.MenuFC.MenuGroup,i=l.MenuFC.MenuItem,m=l.MenuFC.SubMenu,c=function(){return u.default.createElement("div",null,u.default.createElement(l.MenuFC,{defaultOpenKeys:["1-2","1-2-1","1-3"],defaultSelectedKeys:["1-2-1"],onOpenChange:function(e){console.log("open change..",e)},onSelect:function(e){console.log("handle select..",e)}},u.default.createElement(m,{title:"Navigation One",key:"1-1"},u.default.createElement(a,{title:"Item 1"},u.default.createElement(i,null,"Option 1"),u.default.createElement(i,null,"Option 2")),u.default.createElement(a,{title:"Item 2"},u.default.createElement(i,null,"Option 3"),u.default.createElement(i,null,"Option 4"))),u.default.createElement(m,{title:"Navigation Two",key:"1-2"},u.default.createElement(i,null,"Option 5"),u.default.createElement(i,null,"Option 6"),u.default.createElement(m,{title:"Submenu",key:"1-2-1"},u.default.createElement(i,null,"Option 7"),u.default.createElement(i,null,"Option 8"))),u.default.createElement(m,{title:"Navigation Three",key:"1-3"},u.default.createElement(i,null,"Option 9"),u.default.createElement(i,null,"Option 10"),u.default.createElement(i,null,"Option 11"),u.default.createElement(i,null,"Option 12"))))};n.LiveDemo=function(){return u.default.createElement(c,null)};n.markdown={subject:"内嵌菜单",desc:"竖直方向上打开",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { MenuFC } from \'zero-ui-react\'\n\nconst { MenuGroup, MenuItem, SubMenu } = MenuFC\n\nconst App = () => {\n    const handleOpenChange = (openKeys) => {\n        console.log(\'open change..\', openKeys)\n    }\n\n    const handleSelect = (selectedKeys) => {\n        console.log(\'handle select..\', selectedKeys)\n    }\n    return (\n        <div>\n            <MenuFC\n                defaultOpenKeys={[\'1-2\', \'1-2-1\', \'1-3\']}\n                defaultSelectedKeys={[\'1-2-1\']}\n                onOpenChange={handleOpenChange}\n                onSelect={handleSelect}\n            >\n                <SubMenu title="Navigation One" key="1-1">\n                    <MenuGroup title="Item 1">\n                        <MenuItem>Option 1</MenuItem>\n                        <MenuItem>Option 2</MenuItem>\n                    </MenuGroup>\n                    <MenuGroup title="Item 2">\n                        <MenuItem>Option 3</MenuItem>\n                        <MenuItem>Option 4</MenuItem>\n                    </MenuGroup>\n                </SubMenu>\n                <SubMenu title="Navigation Two" key="1-2">\n                    <MenuItem>Option 5</MenuItem>\n                    <MenuItem>Option 6</MenuItem>\n                    <SubMenu title="Submenu" key="1-2-1">\n                        <MenuItem>Option 7</MenuItem>\n                        <MenuItem>Option 8</MenuItem>\n                    </SubMenu>\n                </SubMenu>\n                <SubMenu title="Navigation Three" key="1-3">\n                    <MenuItem>Option 9</MenuItem>\n                    <MenuItem>Option 10</MenuItem>\n                    <MenuItem>Option 11</MenuItem>\n                    <MenuItem>Option 12</MenuItem>\n                </SubMenu>\n            </MenuFC>\n        </div>\n    )\n}\n',css:""}}}]);