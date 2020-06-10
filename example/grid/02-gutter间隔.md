## 区块间隔

栅格常常需要和间隔进行配合，通过 `Row` 的 `gutter` 属性，轻松创建平均布局。`gutter` 建议设置为 16+8n , n 为自然数。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'zero-ui-react'

const GridExample = () =>{
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
            </Row>
        </div>
    )
}
export default GridExample
```

```css
.gutter-div {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #87e8de;
}
```