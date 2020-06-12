## Flex 排序

通过 `flex` 布局的 `order` 属性来改变元素的排列顺序。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'zero-ui-react'
const GridExample = () =>{
    return (
        <div>
            <Row>
                <Col span={6} order={4}>col-1 span-6 order-4</Col>
                <Col span={6} order={3}>col-2 span-6 order-3</Col>
                <Col span={6} order={2}>col-3 span-6 order-2</Col>
                <Col span={6} order={1}>col-4 span-6 order-1</Col>
            </Row>
        </div>
    )
}
export default GridExample
```

```css
.zeroUI-row {
    margin: 20px 0;
    color: #fff;
}
.zeroUI-col {
    height: 40px;
    line-height: 40px;
    text-align: center;
    
}
.zeroUI-col:nth-child(even) {
    background-color: #87e8de;
}
.zeroUI-col:nth-child(odd) {
    background-color: #36cfc9;
}
```