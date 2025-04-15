# my-eladmin
我的vue后台管理系统学习项目

### 先把本地的代码和远程仓库进行管理
- 掌握git的使用，给本地代码添加远程仓库地址
- 1、保证你本地安装了git工具，cmd输入git，如果提示命令找不到的话，可能是没有配置环境变量，也有可能是没有安装git，请检查
- 2、需要使用git remote -v，我当前本地的项目关联了哪些远程地址
- 3、需要使用git remote add 远程名字github|gitee|origin 远程仓库的地址（https://github.com/用户名/仓库名字.git）
- 4、git remote remove 远程名字
- 5、git remote rename 远程名字 远程新名字
- 6、git remote set-url 远程名字 新的url远程仓库地址

### 推送本地代码到远程仓库
- 1、git checkout -b xxx个人分支 (checkout检出、-b branch分支)公司项目开发代码都是提交到个人分支上。然后由项目组管理人员评审代码，没问题后再合入主分支。一般主分支都是没有权限直接推送代码、分支也没办法删除的。阻止小白误操作。
- 2、git branch 查看本地分支是啥
- 3、git branch -a （-a all）查看这个仓库总共有哪些分支、git branch -r 查看所有远程追踪分支
- 4、git checkout -b xxx个人分支 origin/xxx远程的别人的分支（你的同事说，你把我的代码分支拉下来看看。你的同事会告诉你它的分支是什么，你就可以拉下来看看它的代码）
- 5、git add .|某一个具体的文件或者文件夹 把这个文件添加的本地暂存区
- 6、git commit -m "提交日志"，填写提交日志，实现了什么功能，做了什么事？
- 7、git push 远程仓库的名字/origin 仓库名字/分支（不写分支，默认就是main/master）
- 8、git branch -d xxx 删除xxx分支
- 9、git branch -D xxx 强制删除xxx分支
- 10、remotes/origin/main 不是一个本地分支（不像 main），它是 Git 自动管理的，你不能用 git branch -d 直接删掉它。想删除它，你需要清除 Git 对远程的记录。
- 11、分支查看切换
  ```shell
  git branch        # 只看本地分支
  git branch -r     # 只看远程分支
  git branch -a     # 所有分支（本地 + 远程）
  git checkout 分支名 # 切换到已有分支
  git switch 分支名 # 更推荐的新写法（Git 2.23+）
  git checkout -b 本地分支名 origin/远程分支名 # 远程有分支，但你本地还没有，可以这样切
  ```

  ### 安装依赖，推送代码
  ```shell
  vuex
  vue-router 版本为3
  elementui
  ```

  ### 完整依赖，使用这个里面的package.json。从里面提取需要的依赖配置项、启动脚本等。修改完成之后，推送到自己的个人分支上
  - 目的：保证代码提交的安全，由管理员来进行pr审查合入、做这个操作之前先把main分支提交的权限关闭。
  ```
  {
  "name": "eladmin-web",
  "version": "2.7.0",
  "description": "ELADMIN 前端源码",
  "author": "Zheng Jie",
  "license": "Apache-2.0",
  "scripts": {
    "dev": "vue-cli-service serve",
    "build:prod": "vue-cli-service build",
    "build:stage": "vue-cli-service build --mode staging",
    "preview": "node build/index.js --preview",
    "lint": "eslint --ext .js,.vue src",
    "test:unit": "jest --clearCache && vue-cli-service test:unit",
    "svgo": "svgo -f src/assets/icons/svg --config=src/assets/icons/svgo.yml",
    "new": "plop"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/elunez/eladmin-web.git"
  },
  "bugs": {
    "url": "https://github.com/elunez/eladmin/issues"
  },
  "dependencies": {
    "@riophae/vue-treeselect": "^0.4.0",
    "@wangeditor/editor": "^5.1.23",
    "@wangeditor/editor-for-vue": "^1.0.2",
    "axios": "1.7.4",
    "clipboard": "2.0.4",
    "codemirror": "^5.49.2",
    "core-js": "^2.6.12",
    "echarts": "^4.2.1",
    "echarts-wordcloud": "^1.1.3",
    "element-ui": "^2.15.8",
    "file-saver": "1.3.8",
    "fuse.js": "3.4.4",
    "js-beautify": "^1.10.2",
    "js-cookie": "2.2.0",
    "jsencrypt": "^3.0.0-rc.1",
    "jszip": "^3.7.1",
    "mavon-editor": "^2.9.1",
    "normalize.css": "7.0.0",
    "nprogress": "0.2.0",
    "path-to-regexp": "8.0.0",
    "qs": "^6.10.1",
    "screenfull": "4.2.0",
    "sortablejs": "1.8.4",
    "vue": "^2.6.14",
    "vue-count-to": "^1.0.13",
    "vue-cropper": "0.4.9",
    "vue-echarts": "^5.0.0-beta.0",
    "vue-image-crop-upload": "^2.5.0",
    "vue-router": "3.0.2",
    "vue-splitpane": "1.0.4",
    "vuedraggable": "2.20.0",
    "vuex": "3.1.0",
    "wangeditor": "^4.7.11",
    "webpack": "^4.47.0"
  },
  "devDependencies": {
    "@babel/parser": "^7.7.4",
    "@babel/register": "7.0.0",
    "@vue/babel-plugin-transform-vue-jsx": "^1.2.1",
    "@vue/cli-plugin-babel": "3.5.3",
    "@vue/cli-plugin-eslint": "^3.9.1",
    "@vue/cli-plugin-unit-jest": "3.5.3",
    "@vue/cli-service": "3.5.3",
    "@vue/test-utils": "1.0.0-beta.29",
    "autoprefixer": "^9.5.1",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "10.0.1",
    "babel-jest": "23.6.0",
    "babel-plugin-dynamic-import-node": "2.3.0",
    "babel-plugin-transform-remove-console": "^6.9.4",
    "chalk": "2.4.2",
    "chokidar": "2.1.5",
    "compression-webpack-plugin": "5.0.2",
    "connect": "3.6.6",
    "eslint": "5.15.3",
    "eslint-plugin-vue": "5.2.2",
    "html-webpack-plugin": "3.2.0",
    "http-proxy-middleware": "3.0.3",
    "husky": "1.3.1",
    "lint-staged": "8.1.5",
    "plop": "2.3.0",
    "sass": "1.32.13",
    "sass-loader": "10.2.0",
    "script-ext-html-webpack-plugin": "2.1.3",
    "script-loader": "0.7.2",
    "serve-static": "1.16.2",
    "svg-sprite-loader": "4.1.3",
    "svgo": "1.2.0",
    "tasksfile": "^5.1.1",
    "vue-template-compiler": "2.7.15"
  },
  "engines": {
    "node": ">=8.9",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]}
  ```
### 创建项目目录结构
- 接口放哪里api
- 路由router
- 状态管理vuex
- 组件 components
- 页面 views
- 工具方法 utils
- 资源文件见 assets
- layout布局文件夹
- mixin（暂时不写内容）
![image](https://github.com/user-attachments/assets/8d2574be-b3ef-4758-9897-1d3c1f4b8995)

### 创建vuex文件、vue-router文件、导入elementui
- store/index.js
- router/index.js
- main.js
- elementui

### 【测试】编写一个测试路由，验证elementui导入是否成功、路由、vuex是否配置成功

### 完成登录功能
- 后端接口文档：https://api.eladmin.uandj.site/doc.html#/home
- 添加一个新的路由 /login
- 参照网站设计登录页面 /views/Login.vue
- 对接验证码接口
  - 先安装axios库
  - 需要实现点击验证码，自动刷新验证码的功能
- 对接登录接口
  - 登录失败需要给出提示
  - 密码需要rsa加密，公钥如下
    ```javascript
    const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
  '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ=='
    ```
  - 登录成功后跳转到 首页路由 /
  - 登录成功后把 token 存储到 vuex中
- 这些代码都直接写在Login.vue组件中
- 对登录表单进行验证，验证项如下
  - 用户名必填
  - 密码必填
  - 未输入用户名和密码则提示用户名必填、密码不填
 
### 登录成功后调整
  - 跳转到/dashboard路由
  - 这个路由对应的页面暂时用作测试，不用什么具体的内容
  - 进入/dashboard页面后立即请求用户的信息和用户可访问的菜单
    - 用户信息接口文档：https://api.eladmin.uandj.site/doc.html#/default/%E7%B3%BB%E7%BB%9F%EF%BC%9A%E7%B3%BB%E7%BB%9F%E6%8E%88%E6%9D%83%E6%8E%A5%E5%8F%A3/getUserInfoUsingGET
    - 用户菜单接口文档：https://api.eladmin.uandj.site/doc.html#/default/%E7%B3%BB%E7%BB%9F%EF%BC%9A%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86/buildMenusUsingGET
    - 【注意】这两个接口是需要传递token才能访问的。具体参照接口文档和axios官方文档：https://axios-http.com/zh/docs/intro
    - 先直接在axios请求中传递token，然后再学着封装axios使用
      - 配置拦截器自动传递token
      - 在组件中导入封装好的axios
      - 利用封装的axios发起请求。此时拦截器会工作，自动给请求加上token
    - 扩展
      - 给axios同一添加接口请求报错提示
- 下一个任务再对接口操作、vuex的操作进行优化
  - 实现记住我，使用cookie实现
  - ![image](https://github.com/user-attachments/assets/3e357dbe-9faa-4595-a82e-7e3fc615338b)
  - 接口：把接口请求定义在api目录下、封装axios
  - vuex：把登录相关的状态数据分模块存储











