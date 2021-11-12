import React from "react";

let SignUp = () => {
    return (
        <div className="tab-2 resp-tab-content" aria-labelledby="tab_item-1">
            <div className="facts">
                <div className="register">
                    <form action="#" method="post">
                        <input placeholder="Name" name="Name" type="text" required />
                        <input placeholder="Email Address" name="Email" type="email" required />
                        <input placeholder="Password" name="Password" type="password" required />
                        <input placeholder="Confirm Password" name="Password" type="password" required />
                        <div className="sign-up">
                            <input type="submit" defaultValue="Create Account" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default SignUp;