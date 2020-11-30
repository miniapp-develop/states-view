# 微信小程序 State View


## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)


index.json

```json
{
  "usingComponents": {
    "states-view": "mini-app-states-view/states-view/index",
    "state-view": "mini-app-states-view/state-view/index"
  }
}
```

index.wxml

```html
<states-view state="{{state}}" bind:statesChanged="onStatesChanged">
    <state-view state="a" bind:stateChanged="onStateChanged">a</state-view>
    <state-view state="b">b</state-view>
    <state-view state="c">c</state-view>
    <state-view state="d">d</state-view>
</states-view>
```

index.js

```javascript
this.setData({
    state: 'd'
});

```