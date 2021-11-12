import React from "react";


function NewsLetter() {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="col-md-6 w3agile_newsletter_left">
                    <h3>Newsletter</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
                </div>
                <div className="col-md-6 w3agile_newsletter_right">
                    <form action="#" method="post">
                        <input type="email" name="Email" defaultValue="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
                        <input type="submit" defaultValue />
                    </form>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>

    )
}
export default NewsLetter;