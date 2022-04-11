# uccn

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).



## 附言

### 插件：

#### 1、swiper  （5.*）

```
  Home页默认使用swiper
  配置: speed 800ms
```

#### 2、prerender-spa-plugin （3.4.0）

1. 安装 prerender-spa-plugin

```
yarn add prerender-spa-plugin -D
```

2. 修改 vue.config.js

```js
+ const PrerenderSPAPlugin = require("prerender-spa-plugin");
+ const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
        publicPath: process.env.VUE_APP_PUBLIC_PATH,
        chainWebpack: (config) => {
            config.resolve.alias.set("@", resolve("src"));
        },
    +  configureWebpack: () => {
    +    if (process.env.NODE_ENV !== "production") return;
    +
        +    return {
        +      plugins: [
        +        new PrerenderSPAPlugin({
            +          staticDir: path.join(__dirname, "/dist"),
        +          routes: ["/", "/Nav2", "/Nav3", "/Nav4", "/404"],
        +          renderer: new Renderer({
        +            inject: {
        +              foo: "bar",
            +            },
    +            headless: false,
        +            renderAfterDocumentEvent: "render-event",
        +          }),
    +        }),
    +      ],
    +    };
    +  },
};

```

3. 修改 main.js

```js
import Vue from "vue";
import App from "./App";
import "normalize.css";
import router from "./router";
import axiosApi from "./api/request.js";
import Notice from "./assets/plugins/message";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
Vue.prototype.$notice = Notice;
Vue.config.productionTip = false;
Vue.use(axiosApi);
new Vue({
        router,
        render: (h) => h(App),
    +  mounted() {
    +    document.dispatchEvent(new Event("render-event"));
    +  },
}).$mount("#app");

```

4. 打包部署（会有一闪而过的浏览器窗口）

```
yarn build
```

生成 dist 文件夹，本地在打开 dist/index.html，会发现css，js，Image 文件均无法访问，但是开发与生产 配置环境已更改。

解决方案：使用静态文件服务器：nginx（下载: http://nginx.org/） : 使用 nginx 将dist目录下文件放在 nginx/html 文件夹下，启动 nginx，此时用浏览器打开：http://localhost/ 发现问题得以解决。

#### 3、vue-meta-info (未安装)

```
yarn add vue-meta-info -D
```

作用：动态更改浏览器标题

