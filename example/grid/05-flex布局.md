## Flex 布局

`Row` 本身使用 `flex` 布局，可以通过 `justify` 设置子元素的排列方式，可选值为 `start` `center` `end` `space-between` `space-around` 。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'zero-ui-react'

const GridExample = () =>{
    return (
        <div>
            <Row justify="start" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="center" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="end" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="space-between" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
            </Row>
            <Row justify="space-around" className='row-padding-10'>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
                <Col span={4}>col-span-4</Col>
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
.row-padding-10 {
    padding: 10px 0;
    background: #ccc;
}
```