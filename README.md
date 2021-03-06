# face-types

<!--MR-D{tpl: 'home'}-->

<!-- MARKRUN-HTML
<style>h1 {display:none;}</style>
-->

<!-- MARKRUN-HTML
<div hidden >
-->

```js
var Types = require('face-types')({isRequired: true})
Types.check( { name: Types.string }, { name: 'nimo' } )
```

<!-- MARKRUN-HTML
</div>
-->

<div class="face-one-intro">
    <div class="face-one-intro-title">face-types</div>
    <h2 class="face-one-intro-desc">
        prop-types 增强
    </h2>
    <!-- MARKRUN-HTML
        <div class="face-one-readmedemo">
            <div class="face-one-readmedemo-node" style="min-height:auto;" >
                <div id="simple-demo" class="face-one-readmedemo-node-render" style="padding:0 1em;" >
                <pre><code class="lang-js"><span class="hljs-keyword">var</span> Types = <span class="hljs-built_in">require</span>(<span class="hljs-string">'face-types'</span>)({isRequired: <span class="hljs-literal">true</span>})
Types.check( { name: Types.string }, { name: <span class="hljs-string">'nimo'</span> } )</code></pre>
                </div>
            </div>
        </div>
    -->
<!--     <div class="face-one-intro-tool">
        <a href="https://onface.github.io/types" class="face-one-intro-btn face-one-intro-btn--primary mr-online-hide" >在线文档</a> -->
        <!-- MARKRUN-HTML
            <a href="./doc/intro.md" class="face-one-intro-btn face-one-intro-btn--primary">指引</a>
            <a href="http://github.com/onface/types" class="face-one-intro-btn">GITHUB</a>
        -->
    </div>
</div>
<div class="face-one-feature">
    <table style="width:100%;" data-comments="In order to github typesetting so use the table tag" >
        <tr>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/cogwheel.svg" alt="" class="face-one-feature-item-photo" />
                    <br />
                    <div class="face-one-feature-item-label">语法简介</div>
                    <div class="face-one-feature-item-desc">在 <a href="https://www.npmjs.com/package/prop-types">prop-types</a> 基础上 可配置默认 <code>isRequired</code> 。</div>
                </div>
            </td>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/update.svg" alt="" class="face-one-feature-item-photo" />
                    <br />
                    <div class="face-one-feature-item-label"> 兼容 <code>prop-types</code> API</div>
                    <div class="face-one-feature-item-desc">只会增加配置项<code>isRequired</code></div>
                </div>
            </td>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/share.svg" alt="" class="face-one-feature-item-photo" />
                    <br />
                    <div class="face-one-feature-item-label">配套接口封装库</div>
                    <div class="face-one-feature-item-desc">
                         在<a href="https://onface.github.io/better-api/">better-api</a> 中使用<code>face-types</code> 能让前后端协作更顺利
                    </div>
                </div>
            </td>
        </tr>
    </table>
</div>


<div style="text-align:center;" >
    <a href="https://travis-ci.org/onface/types" style="text-decoration: none;" >
        <img alt="Build Status" src="https://api.travis-ci.org/onface/types.svg?branch=master" />
    </a>
    <a href="https://npmjs.org/package/face-types"  style="text-decoration: none;" >
        <img alt="NPM version" src="https://img.shields.io/npm/v/face-types.svg?style=flat" />
    </a>
    <a href="https://npmjs.org/package/face-types"  style="text-decoration: none;" >
        <img alt="NPM downloads" src="https://img.shields.io/npm/dm/face-types.svg?style=flat" />
    </a>
</div>


<a href="https://saucelabs.com/u/onface-types" >
    <img alt="Saucelabs Tests" style="display:block;margin-left:auto;margin-right:auto;" src="https://saucelabs.com/browser-matrix/onface-types.svg" >
</a>


<h3 class="face-one-feature-title">
    维护者
</h3>
<div class="face-one-feature face-one-feature--creator">
    <table style="width:100%;" data-comments="In order to github typesetting so use the table tag" >
        <tr>
            <td align="center" >
                <a class="face-one-feature-item" href="https://github.com/nimojs">
                    <img src="https://github.com/nimojs.png" width="150 height="150" alt="" class="face-one-feature-item-avatar">
                    <br />
                    <div class="face-one-feature-item-label">NimoChu</div>
                </a>
            </td>
        </tr>
    </table>
</div>
