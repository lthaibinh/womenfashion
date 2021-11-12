import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import * as action from './../../actions/index';

let SignIn = (props) => {
    
    return (
        <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
            <div className="facts">
                <div className="register">
                    <form action="#" method="post">
                        <input name="Email" placeholder="Email Address" type="text" required />
                        <input name="Password" placeholder="Password" type="password" required />
                        <div className="sign-up">
                            <input onClick={() => props.signIn()} type="submit" defaultValue="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => ({
    // isSignIn: state.cartList
})
const mapDispatchToProps = (dispatch, props) => ({
    signIn: () => dispatch(action.signIn())
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
