import React from "react";
import { Helmet } from "react-helmet";

function BannerBottom() {
    return (
        <div className="banner-bottom1">
            <div className="agileinfo_banner_bottom1_grids">
                <div className="col-md-7 agileinfo_banner_bottom1_grid_left">
                    <h3>Grand Opening Event With flat<span>20% <i>Discount</i></span></h3>
                    <a href="products.html">Shop Now</a>
                </div>
                <div className="col-md-5 agileinfo_banner_bottom1_grid_right">
                    <h4>hot deal</h4>
                    <div className="timer_wrap">
                        <div id="counter"> </div>
                        <Helmet>
                            <script src="js/jquery.countdown.js"></script>
                            <script src="js/script.js"></script>
                        </Helmet>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
       
    )
}
export default BannerBottom;