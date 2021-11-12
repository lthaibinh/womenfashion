import * as actionType from './../constants/ActionValue'
let initialState = false

const SignIn = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SIGN_IN:
            return  true
        default:
            return false
    }
}
export default SignIn;