This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### react路由 使用插件实现 --- react-router

常用模块: Route:配置路由的模块 Link/NavLink:router-link switch:路由显示 router-view
<NavLink>老大</NavLink> 需要设置 'to'属性

### 路由配置

两个属性：path：对应连接的to属性
component:对应显示组件

### 路由组件需要写在

react-router-dom的router组件中

### 数据

数据可以传字符串之外的其他的类型 但还会是强制转为字符串
在route组件的path路径后添加'/：数据名'
接收数据：在路由目标组件中 props的match中的params中就会有传入的数据

### react 路由的api写法

push 跳转后可以跳会原页面
replace 跳转后不能跳回原页面

### this.props.history.push('')

组件对象.props.history.push("路径")
当props为空对象的时候 不能使用push、replace

### replace 

this.props.history.replace()

### 路由样式改变

1.引入默认路由连接组件
2.暴露出的组件中写入路由连接组件 并将props的所有属性传入路由组件{...this.props}
3.如果想编写样式activeClassName

### redux

路径1：store （存储无数据） --->组件
1.现在index中引入createStore从redux中引入,使用createStore创建store对象(createStore中需要传入reducer实参)
2.reducer函数中必须返回数据(state)
3.在index文件中将store对象传入要使用数据的组件(App)
4.在组件中使用store.getState()方法即可获取到reducer中返回的数据(state)
路径2：actionCreator --->reducer ---> store ---> 组件

npm install redux

### 注意：

当用户 操作数据之后 组件数据是不会自动跟新的
redux提供了 一个方法subscribe（订阅）
使用方法：store.subscribe(回调函数)
当store中的数据改变时 就会执行回调函数

### jsx用法

1.可以直接写虚拟dom（html标签）
2.可以直接将js数据渲染到页面的虚拟dom中 需要加{}包裹

### react组件(hooks) 
1.函数组件 工厂函数
2.类组件 es6类继承实现组件的开发 class App extends React.Component

### react 组件的三大特性

state:存放数据 两种写法
props:传递数据 父传子 父组件属性发送 子组件 this.props
refs:获取refs获取虚拟dom onchange e.target获取虚拟dom

### react 生命周期

componentWillMount 在渲染前调用,在客户端也在服务端。
componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

### 创建

create-react-App MyReact
    "axios": "^0.19.0",
    "pubsub-js": "^1.7.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router": "^5.0.1",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.0.1",
    "redux": "^4.0.1"

### react路由

引包 react-router-dom
然后引入
import {Route,NavLink,Switch} from 'react-router-dom'

根组件import {BrowserRouter} from 'react-router-dom';

### react 路由的api写法

push 跳转后可以跳会原页面
replace 跳转后不能跳回原页面

### this.props.history.push('')

组件对象.props.history.push("路径")
当props为空对象的时候 不能使用push、replace

### replace 

this.props.history.replace()

### 前进后退

goForward()
goBack()

### 数据

数据可以传字符串之外的其他的类型 但还会是强制转为字符串
NavLick to后面加/数据
在route组件的path路径后添加'/：数据名'
接收数据：在路由目标组件中 props的match中的params中就会有传入的数据

路由器嵌套 子路由带上父组件的路径

### redux

如上

                  ,;,,;
                 ,;;'(    马
       __      ,;;' ' \   ┇
    /'  '\'~~'~' \ /'\.)  到 
 ,;(      )    /  |.      ┇
,;' \    /-.,,(   ) \     成
     ) /       ) / )|     ┇ 
     ||        ||  \)     功
     (_\       (_\



      *             ,
                  _/^\_
                 <     >
*                 /.-.\         *
         *        `/&\`                   *
                 ,@.*;@,
                /_o.I %_\    *
   *           (`'--:o(_@;
              /`;--.,__ `')             *
            ;@`o % O,*`'`&\ 
       *    (`'--)_@ ;o %'()\      *
            /`;--._`'--._O'@;
           /&*,()~o`;-.,_ `""`)
*          /`,@ ;+& () o*;-';\
          (`""--.,_0o*`;-'&()\
          /-.,_    ``''-...-'`)  *
     *   /@%;o`:;'--,._   _.]'\
         ;*,&();@%&^;~`"'`o;@();         *
        /()Emily & ().o@Robin%OCF\
        `"="==""==,,,.,="=="==="`
     __.----.(\-''#####---...___...-----._
   '`         \)_`"""""`
           .--' ')
         o(  )_-\
           `"""` `


　　　/\~~~~~~~~~~~~~\　　　▓　　^*^　　　☆　　$$　 .☆ 
　　./　\~~~▓~　 ~~~~\ ◆　　圣诞 .快乐　 *　 $◢◣$　 * 
　　/ ^^ \ ══════\.◆　　　 *　*　　*　 $◢★◣$　 * 
　..▎[]　▎田　田 ▎ |┃◆　 .　　　　　*　 $◢■■◣$　 * 
　&&▎　　▎　　　 ▎'|'▎ @　　　　　　　* $◢■■■◣$ * 
＃ ■■■■■■■■■■〓▄▃▂▁愿你圣诞快乐︸︸||︸︸ 




°★．☆° ．★·°∴°★．°·∴°☆ ·°∴° ☆．．·
☆°★°∴°°∴ ☆°．·★°∴°．
   ◢◣。       ◢◣。     ☆圣★
  ◢★◣。     ◢★◣。     ★诞☆
 ◢■■◣。   ◢■■◣。     ☆节★
◢■■■◣。 ◢■■■◣。      ★快☆
︸︸||︸︸ !!︸︸||︸︸         ☆乐★
祝圣诞节快乐 ^_^!!☆°★°∴°°∴ ☆°．·★°∴°．
°★．☆° ．★·°∴°★．°·∴°☆ ·°∴° ☆．．·．




                  +|+ 
                ))_|      |  
                 |\     __|  
            _∩_ / \    |\  
           /□□□\_\__/_ \ ---+--- 
______-∩ /   ★  √√√ \|   (~>===6 
\ 265 ~~~~~~~~~~\_∠∠∠__\_______ 
 \________________________________| 

### diff算法

局部刷新页面 只刷新数据改变影响的部分 未改变的部分不动

工作原理：数据改变后的虚拟dom树 和改变前的虚拟dom 比较只改变局部的dom

类组件 三大特性 路由和生命周期 redux、

复习 找项目



### react-redux

解决问题滴插件

redux代码的缺陷：
Redux和react组件代码耦合度高
//需要新插件 react-redux
import reactRedux from "react-redux"
主要组件provider和函数connect
1.使用provider将要引入store的组件包裹

import PropTypes from "prop-types"
//prop-types 规定通过props传入的值的类型 是否必须传入

//编写PropTypes配置对象
   //静态配置
   static propTypes = {

   }

//引入connect函数 connect作用 将当前组件转换类似于bind 并将转换后的新组件返回出来 新组件中将会传入用户需要的数据

//connect函数调用传入的实参是组件需要的数据 第二个对象中属性是actions中生成actions对象函数
//connect函数会自动将回调函数返回的对象和对象进行结构赋值 然后传入

调用connect函数 实现返回新组件功能

### 概念
UI组件和容器组件
UI组件用来展示数据及页面内容 一般不操作数据（redux）
容器组件主要操作redux共享数据
一般不包括组件虚拟dom
创建组件