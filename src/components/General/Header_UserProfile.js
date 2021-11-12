import React from "react";

let UserProfile = () => {
    
    return (
        <div >
            <h4 className="modal-title" id="myModalLabel">
                Login Successful !</h4>
            <div className="modal-body modal-body-sub">
                <div className="row">
                    <div className="col-md-8 modal_body_left modal_body_left1" style={{ borderRight: '1px dotted #C2C2C2', paddingRight: '3em' }}>
                        <div className="sap_tabs">
                            <div id="horizontalTab" style={{ display: 'block', width: '100%', margin: '0px' }}>
                                
                                <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                    <div className="facts">
                                        <div className="register">
                                            <label>
                                                Name:
                                                <h6>Le Thai Binh</h6>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default UserProfile;