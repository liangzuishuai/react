import React from 'react';
//引入 prop-types 规定通过props传入的数据类型以及是否必须
import PropTypes from 'prop-types';
//引入子组件son
import Son from './son'





export default class Count extends React.Component{
    //编写propTypes配置对象
    static propTypes = {
        //加法 减法 state
        Add : PropTypes.func.isRequired,
        Jian :  PropTypes.func.isRequired,
        Async :  PropTypes.func.isRequired,
        count : PropTypes.number.isRequired
    }
    add = ()=>{
        let num = this.refs.inp.value*1
        //操作state dispatch分发工作交给react-redux完成（仅限同步）
        this.props.Add(num)
    }
    jian = ()=>{
        let num = this.refs.inp.value*1
        //操作state
        this.props.Jian(num)
    }
    async = ()=>{
        //如果action是一个异步代码，需要手动dispatch，dispatch代码写在actions.js文件中
        let num = this.refs.inp.value*1
        this.props.Async(num)
    }
    odd = ()=>{
        let num = this.refs.inp.value*1;
        let state = this.props.count
        if(state%2===1){
            this.props.Add(num)
        }
    }
    render() {
        console.log(this.props.store)
        return (
            <div>
                <Son/>
                <div>{this.props.count}</div>
                <input type="text" ref='inp'/>
                <button onClick={this.add}>+</button>
                <button onClick={this.jian}>-</button>
                <button onClick={this.async}>async+</button>
                <button onClick={this.odd}>odd+</button>
            </div>
        )
    }
}




//高内聚，低耦合