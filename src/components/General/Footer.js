import React from "react";
import NewsLetter from './Footer_NewsLetter';

function Footer() {
    return (
        <div>
            <NewsLetter></NewsLetter>
            <div className="footer">
                <div className="container">
                    <div className="w3_footer_grids">
                        <div className="col-md-3 w3_footer_grid">
                            <h3>Contact</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                            <ul className="address">
                                <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true" />1234k Avenue, 4th block,
                                    <span>New York City.</span></li>
                                <li><i className="glyphicon glyphicon-envelope" aria-hidden="true" /><a href="mailto:info@example.com">info@example.com</a></li>
                                <li><i className="glyphicon glyphicon-earphone" aria-hidden="true" />+1234 567 567</li>
                            </ul>
                        </div>
                        <div className="col-md-3 w3_footer_grid">
                            <h3>Information</h3>
                            <ul className="info">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="mail.html">Contact Us</a></li>
                                <li><a href="short-codes.html">Short Codes</a></li>
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="products.html">Special Products</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 w3_footer_grid">
                            <h3>Category</h3>
                            <ul className="info">
                                <li><a href="dresses.html">Dresses</a></li>
                                <li><a href="sweaters.html">Sweaters</a></li>
                                <li><a href="shirts.html">Shirts</a></li>
                                <li><a href="sarees.html">Sarees</a></li>
                                <li><a href="skirts.html">Shorts &amp; Skirts</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 w3_footer_grid">
                            <h3>Profile</h3>
                            <ul className="info">
                                <li><a href="products.html">Summer Store</a></li>
                                <li><a href="checkout.html">My Cart</a></li>
                            </ul>
                            <h4>Follow Us</h4>
                            <div className="agileits_social_button">
                                <ul>
                                    <li><a href="#" className="facebook"> </a></li>
                                    <li><a href="#" className="twitter"> </a></li>
                                    <li><a href="#" className="google"> </a></li>
                                    <li><a href="#" className="pinterest"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <div className="footer-copy1">
                        <div className="footer-copy-pos">
                            <a href="#home1" className="scroll"><img src="/images/arrow.png" alt=" " className="img-responsive" /></a>
                        </div>
                    </div>
                    <div className="container">
                        <p>© 2016 Women's Fashion. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                    </div>
                </div>
            </div>
        </div>
        

    )
}
export default Footer;