export let count = (state=0,action)=>{
    //判断
    if(action.type==='ADD'){
        return state+action.data
    }else if(action.type==='JIAN'){
        return state-action.data
    }else{
        return state
    }
}