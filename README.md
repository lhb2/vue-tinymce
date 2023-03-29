
![vue-tinymce](assets/vu-tinymce-logo.png)

# vue-tinymce

[![npm version](https://img.shields.io/npm/v/@lhb2/vue-tinymce.svg)](https://www.npmjs.com/package/@lhb2/vue-tinymce)
![vue](https://img.shields.io/npm/dependency-version/@lhb2/vue-tinymce/peer/vue)
![tinymce](https://img.shields.io/npm/dependency-version/@lhb2/vue-tinymce/peer/tinymce)
[![NPM downloads](http://img.shields.io/npm/dm/@lhb2/vue-tinymce.svg)](https://www.npmjs.com/package/@lhb2/vue-tinymce)

TinyMCE 的vue组件，提供异步加载TinyMCE脚本的功能。

## 目的

> 由于没有vue3的环境，目前只确认vue2没有问题。

TinyMCE 的 Vue 组件，是@packy-tang/vue-tinymce的分支，兼容@packy-tang/vue-tinymce，另外提供异步加载TinyMCE脚本的功能，TinyMCE的脚本(tinymce.min.js)有388k左右，原版是同步加载，影响首页的加载速度，改成异步加载后可以加快首页响应的速度。同时也支持原有的加载方法。

## 如何使用

### 安装组件

```sh
yarn add @lhb2/vue-tinymce
# or
npm install @lhb2/vue-tinymce
```

### 异步加载TinyMCE脚本的方法（同步加载请参考@packy-tang/vue-tinymce）

```html
<template>
    <!-- App -->
    <div id="app">
        <vue-tinymce
            v-model="content"
            :setup="setup"
            :setting="setting" />
    </div>
</template>
<script>
    import Vue from "vue"
    import VueTinymce from "@lhb2/vue-tinymce"

    // 异步加载TinyMCE，如果使用vue-cli，需要放在main.js中
    import { loadTinymce } from '@lhb2/vue-tinymce'
    loadTinymce('//unpkg.com/tinymce@5.1.5/tinymce.min.js')

    //安装组件
    Vue.use(VueTinymce)

    new Vue({
        el: "#app",
        data: function() {
            return {
                content: "<p>html content</p>",
                setting: {
                    height: 500
                }
            }
        },
        methods: {
            setup(editor) {
                console.log(editor)
            }
        }
    })
</script>
```

### 其他使用例子（参考@packy-tang/vue-tinymce）

- vue-cli使用例子：[传送门](https://github.com/lpreterite/vue-tinymce-example/tree/master/vue)
- webpack使用例子：传送门(待补上)


## 属性（参考@packy-tang/vue-tinymce）

| 名称       | 描述                                                  |
| ---------- | ----------------------------------------------------- |
| `:content`   | 类型`String`，作为文本内容传入编辑器，可以使用`v-model`实现双向绑定 |
| `@change`   | 类型`Function`，编辑器中`Input` `Change` `Undo` `Redo` `ExecCommand` `KeyUp` `NodeChange`事件响应后触发的事件返回文本内容                  |
| `:setting` | 类型`Object`，编辑器的设置，`setup`不建议在这设置     |
|`:setup`| 类型`Function`, 常用与自定义编辑器处理，组件内部做了些处理，建议在这里添加自定义的代码 |
