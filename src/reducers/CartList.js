import * as actionType from '../constants/ActionValue'
let cartList = []

let checkIsExists = (array, item) => {
    for (let data of array) {
        if (data.product._id === item._id) {
            return true
        }
    }
    return false
}
if (localStorage.getItem('cartListWomensFashion')) {
    cartList = JSON.parse(localStorage.getItem("cartListWomensFashion"))
}
let saveOnLocalStorage = (data) => {
    localStorage.setItem("cartListWomensFashion", JSON.stringify(data))
}
const AddToCart = (state = cartList, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            let newState = [...state]
            console.log(newState)
            if (checkIsExists(newState, action.data) === false) {  // khong co
                let newCart = {
                    ...action.data,
                }
                newState.push({
                    product: newCart,
                    quantity: 1
                })
            } else {  // co
                // console.log('co')
                newState = newState.map((data, index) => {
                    if (data.product._id === action.data._id) {
                        return {
                            product: data.product,
                            quantity: data.quantity + 1
                        }
                    }
                    return data
                })
            }
            saveOnLocalStorage([...newState])
            return [...newState]
        case actionType.INCREASE_CART:
            state = state.map((data, index) => {
                if (data.product._id === action.data.product._id) {
                    return {
                        product: data.product,
                        quantity: data.quantity + 1
                    }
                } else {
                    return data
                }
            })
            saveOnLocalStorage(state)
            return state
        case actionType.DECREASE_CART:
            state = state.map((data, index) => {
                if (data.product._id === action.data.product._id) {
                    if (data.quantity > 1) {
                        return {
                            product: data.product,
                            quantity: data.quantity - 1
                        }
                    } else {
                        return data
                    }
                } else {
                    return data
                }
            })
            saveOnLocalStorage(state)
            return state
        case actionType.REMOVE_CART:
            state = state.filter((data, index) => {
                return data.product._id !== action.data.product._id
            })
            saveOnLocalStorage(state)
            return state
        case actionType.PAYMENT:
            saveOnLocalStorage([])
            console.log("ordered products:",action.data)
            return []
        default:
            return state
    }
}
export default AddToCart;