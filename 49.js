(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var u=l(t(0)),a=(l(t(5)),t(3));function l(e){return e&&e.__esModule?e:{default:e}}var o=a.MenuFC.MenuGroup,i=a.MenuFC.MenuItem,r=a.MenuFC.SubMenu,m=function(){return u.default.createElement("div",null,u.default.createElement(a.MenuFC,{type:"horizontal"},u.default.createElement(i,null,"Navigation One"),u.default.createElement(i,null,"Navigation Two"),u.default.createElement(r,{title:"Navigation Three"},u.default.createElement(o,{title:"Item 1"},u.default.createElement(i,null,"Option 1"),u.default.createElement(i,null,"Option 2")),u.default.createElement(o,{title:"Item 2"},u.default.createElement(i,null,"Option 3"),u.default.createElement(i,null,"Option 4"))),u.default.createElement(i,{title:"Navigation Four"},u.default.createElement("a",{href:"https://github.com/lalalazero/zeroui"},"Link - ZEROUI"))))};n.LiveDemo=function(){return u.default.createElement(m,null)};n.markdown={subject:"水平菜单",desc:"水平的顶部导航菜单",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { MenuFC } from \'zero-ui-react\'\n\nconst { MenuGroup, MenuItem, SubMenu } = MenuFC\n\nconst App = () => {\n    return (\n        <div>\n            <MenuFC type="horizontal">\n                <MenuItem>Navigation One</MenuItem>\n                <MenuItem>Navigation Two</MenuItem>\n                <SubMenu title="Navigation Three">\n                    <MenuGroup title="Item 1">\n                        <MenuItem>Option 1</MenuItem>\n                        <MenuItem>Option 2</MenuItem>\n                    </MenuGroup>\n                    <MenuGroup title="Item 2">\n                        <MenuItem>Option 3</MenuItem>\n                        <MenuItem>Option 4</MenuItem>\n                    </MenuGroup>\n                </SubMenu>\n                <MenuItem title="Navigation Four">\n                    <a href="https://github.com/lalalazero/zeroui">\n                        Link - ZEROUI\n                    </a>\n                </MenuItem>\n            </MenuFC>\n        </div>\n    )\n}\n',css:""}}}]);