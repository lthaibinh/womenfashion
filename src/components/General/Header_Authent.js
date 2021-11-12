import React, { useState, useEffect } from "react";
import SignIn from './Header_Authent_SignIn';
import SignUp from './Header_Authent_SignUp';
let Authent = () => {
    let [showForm, setShowForm] = useState(true); // true : show form login, false: show form sign up
    let showFormSignIn = () => {
        setShowForm(true);

    }
    let showFormSignUp = () => {
        setShowForm(false);

    }
    return (
        <div >
            <h4 className="modal-title" id="myModalLabel">
                Don't Wait, Login now!</h4>
            <div className="modal-body modal-body-sub">
                <div className="row">
                    <div className="col-md-8 modal_body_left modal_body_left1" style={{ borderRight: '1px dotted #C2C2C2', paddingRight: '3em' }}>
                        <div className="sap_tabs">
                            <div id="horizontalTab" style={{ display: 'block', width: '100%', margin: '0px' }}>
                                <ul>
                                    <li onClick={() => showFormSignIn()} className="resp-tab-item" aria-controls="tab_item-0"><span >Sign in</span></li>
                                    <li onClick={showFormSignUp} className="resp-tab-item" aria-controls="tab_item-1"><span >Sign up</span></li>
                                </ul>
                                {showForm ? <SignIn></SignIn> : <SignUp></SignUp>}


                            </div>
                        </div>
                        <div id="OR" className="hidden-xs">
                            OR</div>
                    </div>
                    <div className="col-md-4 modal_body_right modal_body_right1">
                        <div className="row text-center sign-with">
                            <div className="col-md-12">
                                <h3 className="other-nw">
                                    Sign in with</h3>
                            </div>
                            <div className="col-md-12">
                                <ul className="social">
                                    <li className="social_facebook"><a href="#" className="entypo-facebook" /></li>
                                    <li className="social_dribbble"><a href="#" className="entypo-dribbble" /></li>
                                    <li className="social_twitter"><a href="#" className="entypo-twitter" /></li>
                                    <li className="social_behance"><a href="#" className="entypo-behance" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authent;