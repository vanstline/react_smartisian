[TOC]
# 【锤子商城】

## 【流程】

### 购物

- 商品展示列表
- 商品详情展示
- 加入购物车
- 下单
- 支付
- 地址管理
- 订单管理

### 技术

- npm / yarn 
- creact-react-app



- react
- react-dom
- react-router-dom
- redux
- react-redux
- redux-thunk
- axios / fetch 

## 【DEV】

### 初始化项目

通过 `create-react-app`  来初始化项目,

 安装好以后, 进入项目目录, 通过 `yarn install` 下载依赖文件, 

运行: `yarn start` 来启动项目.

### 拆分组件

- 我们把组件全部放到 src / Components / 目录进行统一的管理, 
- src / css 目录存放 css 文件
- src / img 目录存放图片文件

### 数据状态管理

- redux
- react-redux
- redux-thunk
- chrome 工具 



- 通过 `createStore` 来创建 `store`
- 为了对 `store` 的数据进行管理, 我们在 src 下创建一个文件夹 Reducers 来维护和管理 `store`
- 在需要使用 store 数组的组件中, 通过 react-redux 中的  connect 



### 路由管理



### 异步 action

- redux-thunk



### 组件开发

- Header
  - MainNav
  - SubNav
  - UserPopup
  - CartPopup