import React from 'react';
import ReactDOM from 'react-dom';

import App from './container/app';
import store from './redux/store';
import {Provider} from 'react-redux';
//store
//store中state数据改变不能触发页面虚拟dom的刷新
//需要使用store的方法subscribe

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
,document.querySelector('#root'))

//安装插件  react-redux
//我们要将store通过Provider组件传入，因为Provider组件在传入store时，会自动监听store中state的变化
