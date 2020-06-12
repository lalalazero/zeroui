## API

### Row


| 属性      | 说明    | 类型      | 可选值       | 默认值   | 是否必填 |
|---------- |-------- |---------- |-------------  |-------- | ---- |
| justify | flex 布局下的水平排列方式 | string | `start` `end` `center` `space-between` `space-around` | `start` | -- |
| align | flex 布局下的垂直对齐方式 | string | `top` `middle` `bottom` | `top` | -- |
| gutter | 栅格间隔 | number | -- | 0 | -- |


### Col
| 属性      | 说明    | 类型      | 可选值       | 默认值   | 是否必填 |
|---------- |-------- |---------- |-------------  |-------- | ---- |
| span | 栅格占位格数 | number | -- | -- | 是 |
| offset | 栅格左侧的间隔数，间隔内无法放置栅格 | number | -- | -- | -- |
| push | 栅格向右移动格数 | number | -- | -- | -- |
| pull | 栅格向左移动格数 | number | -- | -- | -- |