import * as actionType from '../constants/ActionValue'
let initialState = {

}

const ViewProduct = (state = initialState, action) => {
    switch (action.type) {
        case actionType.VIEW_PRODUCT:
            return action.data
        default:
            return initialState
    }
}
export default ViewProduct;