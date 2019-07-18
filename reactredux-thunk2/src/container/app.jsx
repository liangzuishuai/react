import React from 'react';
import Count from '../components/count'
import {AddCreator,JianCreator,Async} from '../redux/actions'
import {connect} from 'react-redux';


//count数字  Add、Jian函数 
export default connect(
    (state)=>{return {count:state}},{Add:AddCreator,Jian:JianCreator,Async}//connect函数调用传入的实参是组件需要的数据  第二个实参对象中属性值是actions中生成action对象的函数    connect函数会自动将回调函数返回的对象和对象实参进行解构赋值 将解构出来的键值对作为属性传入新组件中
    )(Count)