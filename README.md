<div align="center">
<p><img width="150" src="https://avatars0.githubusercontent.com/u/25151659?s=460&v=4"></p>

<h1>vue2.5-cli</h1>

<p>
   <strong>基于vue2.5 + vant 脚手架搭建的升级版</strong>,
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/Ikarows">Ikarows</a>
  </sub>
</p>

<img src="https://shields.io/badge/node-%3E%3D%2016.0.0-brightgreen">
<img src="https://img.shields.io/badge/vue-2.6.10-brightgreen">
<img src="https://img.shields.io/badge/vant-2.5.5-brightgreen">
<img src="https://img.shields.io/badge/vueRouter-3.0.3-brightgreen">
<img src="https://img.shields.io/badge/axios-0.18.1-brightgreen">
<br />
<img src="https://img.shields.io/badge/vuex-3.0.1-brightgreen">
<img src="https://img.shields.io/badge/eslint-5.16.0-brightgreen">
<img src="https://img.shields.io/badge/sass-1.26.3-brightgreen">
</div>

<br>
<br>

## 项目地址

```shell
git clone https://github.com/Ikarows/vue2.5-cli.git
```

<br />

## `node` 版本推荐

大于 `v16.0.0` 即可。
<br />

## 技术栈

- Vue2
- Vant2
- Webpack
- VueRouter
- Axios
- Vuex
- Eslint
- Sass

## 开发

```bash

# install cnpm
npm install cnpm -g --registry=https://registry.npm.taobao.org;

# install dependencies
cnpm i

# strat
npm run serve

# build
npm run build

# eslint
npm run lint
```

## 项目目录

```bash
├── .vscode            # vscode配置
├── public             # 静态文件
├── src                # 项目文件夹
│   ├── api            # API接口
│   ├── assets         # 资源文件夹
│   │   ├── img        # 图库
│   │   ├── js         # 脚本
│   │   └── css        # 样式（scss, css, less）
│   ├── components     # 公用组件
│   ├── config         # 配置文件
│   │   ├── http.js    # axios 封装
│   │   └── request.js # 请求封装(get，post)
│   ├── views          # 页面目录
│   ├── router         # 路由目录
│   ├── store          # Vuex 目录
│   ├── utils          # 公用方法目录
│   ├── App.vue        # vue 根文件
│   └── main.js        # vue 入口js
│
├── .env.devs          # 开发环境变量
├── .env.pros          # 生产环境变量
├── .eslintignore      # eslint忽略文件
├── .eslintrc.js      # eslint配置
├── .gitignore         # git忽略文件
├── package.json       # 依赖包
├── README.md          # 项目说明
├── upload.js         # 自动化部署
└── vue.config.js      # vue配置文件
```

## 自动化部署

- upload.js 文件中配置

**例子如下**

```javascript
const serve = {
  dev: {
    // 测试服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  },
  pro: {
    // 正式服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  }
}
```

- 打包发布到`测试`服务器

```shell
npm run deploy -- dev
```

- 打包发布到`正式`服务器

```shell
npm run deploy -- pro
```

## 代理模式

- vue.config.js 文件中配置

**例子如下**

```javascript
devServer: {
  // 服务端压缩是否开启
  compress: true,
  // 配置服务端口号
  port: 8090,
  proxy: {
    '/api.php': {
      target: 'https://v1.hitokoto.cn',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api.php': '/api.php'
      }
    }
  }
}
```
