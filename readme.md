### 框架说明

>拼图通用Express Node框架，集成常用功能，提供示例，代码生成，API文档生成功能。 

### 功能说明
>针对新手：提供jada方式的演示

>针对老手：提供数据库增删改查及CURD调用代码生成，提供API调用文档代码生成功能
### 已有功能
>代码生成

>API文档生成

>Antd Vue前端代码生成

### 后续开发
> jwt Token认证

> 日常正则

### 目录结构
```
<pre>
pintuerExpress
├─bin
│  └─www
│─conf
│  └─db.js
├─public
│  ├─docs
│  │     api.html
│  ├─images
│  ├─javascripts
│  │     axios.min.js
│  │     clipboard.min.js
│  │     flexible.min.js
│  │     vue.min.js
│  ├─stylesheets
│  │     style.css
│  ├─tools
│  │     antd.html
│  │     tool.html
│  └─favicon.ico      
├─routes
│       api.js
│       index.js
│       jade.js
│       example.js
├─views
│       error.jade
│       index.jade
│       layout.jade
├─util
│       util.js
├─app.js
├─package.json
└─readme.md
</pre>

```
### 结构说明

app.js
>应用的初始化文件，包括引入应用程序的基础依赖项、设置视图即view的引擎目录以及模板、设置静态资源路径、配置通用的中间件、引入路由和一些错误处理中间件等。

package.json
>应用的配置文件，文件内包含程序的基础信息、启动脚本和依赖包等。

bin/www
>应用的启动文件，文件内包含引用要启动的应用、设置应用监听的端口和启动http服务等。

public/**
>应用的静态资源文件目录，该目录下的文件资源不需要经过文件映射就可以直接访问。

routes/**
>应用的路由文件，这些路由文件中设置的接口最终会以指定的HTTP请求方式暴露给用户，并在用户请求之后将结果返回。

views
>应用的视图文件，在app.js中设置好视图引擎和模板之后，该目录即为应用视图的根目录，然后路由文件就会根据app.js中的设置加载并渲染该目录下的视图文件。

### 安装
#### npm 方式
> npm install 

#### yarn 方式

> yarn install

### 启动
#### npm 方式

> npm run start 

#### yarn 方式
> yarn run start
