import React from "react";
import { Helmet } from "react-helmet";

function SpecialDeals() {
    return (
        <div className="special-deals">
            <div className="container">
                <h2>Special Deals</h2>
                <div className="w3agile_special_deals_grids">
                    <div className="col-md-7 w3agile_special_deals_grid_left">
                        <div className="w3agile_special_deals_grid_left_grid">
                            <img src="/images/26.jpg" alt=" " className="img-responsive" />
                            <div className="w3agile_special_deals_grid_left_grid_pos1">
                                <h5>30%<span>Off/-</span></h5>
                            </div>
                            <div className="w3agile_special_deals_grid_left_grid_pos">
                                <h4>We Offer <span>Best Products</span></h4>
                            </div>
                        </div>
                        <div className="wmuSlider example1">
                            <div className="wmuSliderWrapper">
                                <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                    <div className="banner-wrap">
                                        <div className="w3agile_special_deals_grid_left_grid1">
                                            <img src="/images/1.png" alt=" " className="img-responsive" />
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate
                                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                                                eum fugiat quo voluptas nulla pariatur</p>
                                            <h4>Laura</h4>
                                        </div>
                                    </div>
                                </article>
                                <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                    <div className="banner-wrap">
                                        <div className="w3agile_special_deals_grid_left_grid1">
                                            <img src="/images/2.png" alt=" " className="img-responsive" />
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate
                                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                                                eum fugiat quo voluptas nulla pariatur</p>
                                            <h4>Michael</h4>
                                        </div>
                                    </div>
                                </article>
                                <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                    <div className="banner-wrap">
                                        <div className="w3agile_special_deals_grid_left_grid1">
                                            <img src="/images/3.png" alt=" " className="img-responsive" />
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate
                                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                                                eum fugiat quo voluptas nulla pariatur</p>
                                            <h4>Rosy</h4>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <Helmet>
                            <script src="js/jquery.wmuSlider.js"></script>
                            <script>
                                $('.example1').wmuSlider();
                            </script>
                        </Helmet>
                        
                    </div>
                    <div className="col-md-5 w3agile_special_deals_grid_right">
                        <img src="/images/25.jpg" alt=" " className="img-responsive" />
                        <div className="w3agile_special_deals_grid_right_pos">
                            <h4>Women's <span>Special</span></h4>
                            <h5>save up <span>to</span> 30%</h5>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>

    )
}
export default SpecialDeals;