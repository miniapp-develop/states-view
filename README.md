# 微信小程序 State View

一个简单的根据状态切换页面的小程序组件。

## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```shell script
npm install @mini-dev/states-view
```

index.json

```json
{
  "usingComponents": {
    "states-view": "@mini-dev/states-view/states-view",
    "state-view": "@mini-dev/states-view/state-view"
  }
}
```

index.wxml

```html
<states-view state="{{state}}">
    <state-view state="a" bind:stateChanged="onStateChanged">a</state-view>
    <state-view state="b">b</state-view>
    <state-view state="c">c</state-view>
    <state-view state="d" mode="hidden">d</state-view>
</states-view>
```

mode 属性[normal | hidden]，如果设置为 hidden，则对应的 state-view 内容只会显示或者隐藏，不会重新创建。

## 自定义状态页

```javascript
const {StateView} = require("@mini-dev/states-view")

StateView({
    created() {
        console.log('loading created');
    },
    methods: {
        onStateChanged(active) {
            console.log(`loading onStateChanged(${active})`);
        }
    }
});
```

## changelog

### 0.0.8 
1. 最低基础库 2.13.0.
2. 属性统一修改为 state.

