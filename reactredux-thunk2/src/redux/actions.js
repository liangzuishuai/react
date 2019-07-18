//redux代码中不允许编写异步代码

export let AddCreator = (num)=>{
    return {
        type:'ADD',
        data: num
    }
}
export let JianCreator = (num)=>{
    return {
        type:'JIAN',
        data: num
    }
}
//异步提交action对象写法不同于普通action对象
export let Async = (num)=>{
    //异步提交不返回action对象，返回的是一个函数，在函数内部，可以进行异步操作
    return (dispatch)=>{
        //形参dispatch会接收到store对象的dispatch方法
        setTimeout(()=>{
            // this.props.store.dispatch({})
            //这里的dispatch就相当于this.props.store.dispatch,而AddCreator(num)==AddCreator函数的返回值（即action对象）
            dispatch(AddCreator(num))
        },1000)
    }
    //异步的action对象方法一般用于向后台发请求并获取数据，并操作
}