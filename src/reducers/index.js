import { combineReducers } from 'redux';
import isSignIn  from './SignIn';
import viewProduct from './ViewProduct'
import cartList from './CartList'
export default combineReducers({
    isSignIn,    // name of state redux
    viewProduct,
    cartList
})
