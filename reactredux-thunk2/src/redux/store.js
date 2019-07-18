//引入  createStore 函数创建store  
//引入  applyMiddleware 函数使用中间件  
import {createStore , applyMiddleware} from 'redux';
//引入redux-thunk
import thunk from 'redux-thunk'
//引入reducer
import {count} from './reducers';
//createStore中传入的实参是reducer
let store = createStore(count,applyMiddleware(thunk));
export default store