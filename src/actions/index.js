import * as actionType from './../constants/ActionValue'

export const signIn = () => ({
    type: actionType.SIGN_IN,
})
export const ViewProduct = (product) => ({
    type: actionType.VIEW_PRODUCT,
    data: product
})
export const AddToCart = (product) => ({
    type: actionType.ADD_TO_CART,
    data: product
})
export const IncreaseCart = (cart) => ({
    type: actionType.INCREASE_CART,
    data: cart
})
export const DecreaseCart = (cart) => ({
    type: actionType.DECREASE_CART,
    data: cart
})
export const RemoveCart = (cart) => ({
    type: actionType.REMOVE_CART,
    data: cart
})

export const Payment = (products) => ({
    type: actionType.PAYMENT,
    data: products
})