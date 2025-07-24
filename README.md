# 微信小程序 State View

## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

安装

```bash
npm install @mini-dev/states-view
````

Tips: 安装完毕之后，记得使用 IDE 的 `工具 -> 构建 NPM` 命令同步 npm 模块。

index.json

```json
{
    "usingComponents": {
        "state-container": "@mini-dev/states-view/state-container",
        "state-item": "@mini-dev/states-view/state-item"
    }
}
```

index.wxml

```html

<state-container useWrap state="{{state}}" bind:change="xxx">
    <state-item state="a" bind:change="yyy">a</state-item>
    <state-item state="b">b</state-item>
    <state-item state="c">c</state-item>
    <state-item state="d" mode="hidden">d</state-item>
</state-container>
```

> mode 属性`[normal | hidden]`，如果设置为 `hidden`，则对应的 state-item 内容只会显示或者隐藏，不会重新创建。
> useWrap 属性`[true | false]`，如果设置为 `false`，则 state-container/state-item 不会包含外层自带的 view，因此会导致默认的样式以及 `mini-class` 不起作用。
> 如果 `mode` 为 `hidden` 时，state-item 的 `useWrap` 属性会失效，`mode` 属性的优先级高于 state-item 的 `useWrap` 属性。

index.js

```javascript
this.setData({
    state: 'd'
});

```

### 自定义状态页

示例：[./pages/components/loading](./pages/components/loading/index.js)

```javascript
import {StateItem} from "@mini-dev/states-view";

StateItem({
    created() {
        console.log('[loading]created');
    },
    methods: {
        onStateChanged(active) {
            console.log(`[loading]onStateChanged(${active})`);
        }
    }
});
```