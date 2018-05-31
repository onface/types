# 指引

> 使用一个组件或模块之前，应当知道它能解决的问题是什么，不能解决的问题是什么。使用的最佳实践是什么？

[prop-types](https://www.npmjs.com/package/prop-types) 是 React 团队提供的类型检测库。

`prop-types` 不止可以在 React 中使用还可以单独调用。


```js
const myPropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

const props = {
  name: 'hello', // is valid
  age: 'world', // not valid
};

PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'MyComponent');
```

但是在校验服务器数据时要将大部分参数都加上 `isRequired`

```js
var PropTypes = require('props-types')
var { string, number} = PropTypes
PropTypes.checkPropTypes(
    {
        name: string.isRequired,
        age: number.isRequired
    }
)
```

当属性变多时候会在代码中充斥着 `isRequired`，并且在编写时候会浪费很多时间。

`face-types` 基于 `PropTypes` 进行二次封装。可以配置默认 `isRequired` 为 `true` 或 `false`

```js
var PropTypes = require('face-types')({isRequired: true})
var notRequiredTypes = require('face-types')({isRequired: false})
var { string, number} = PropTypes
PropTypes.checkPropTypes(
    {
        name: string,
        age: number,
        weight: notRequiredTypes.number
    }
)
```

**注意** 如果是在 React 中还是建议直接使用 `PropTypes` 以免不了解 `face-types` 的开发人员误解 `App.propTypes`。而且 `React` 的参数并不会像服务器数据这样多，后缀加上 `isRequired` 并不麻烦。

**[查看更多用法](./README.md)**
