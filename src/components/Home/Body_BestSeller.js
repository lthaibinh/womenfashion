import React from "react";


function Body() {
    return (

        <div className="banner-bottom">
            <img src="images/4.jpg" alt=" " className="img-responsive" />
            <h2>Best Seller</h2>
            <div className="container">
                <div className="col-md-5 wthree_banner_bottom_left">
                    <div className="video-img">
                        <a className="play-icon popup-with-zoom-anim" href="#small-dialog">
                            <span className="glyphicon glyphicon-expand" aria-hidden="true" />
                        </a>
                    </div>
                    {/* pop-up-box */}
                    <link href="css/popuo-box.css" rel="stylesheet" type="text/css" property media="all" />
                    {/*//pop-up-box */}
                    <div id="small-dialog" className="mfp-hide">
                        <iframe src="https://player.vimeo.com/video/23259282?title=0&byline=0&portrait=0" />
                    </div>
                </div>
                <div className="col-md-7 wthree_banner_bottom_right">
                    <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                        <ul id="myTab" className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home">T-shirts</a></li>
                            <li role="presentation"><a href="#skirts" role="tab" id="skirts-tab" data-toggle="tab" aria-controls="skirts">Skirts</a></li>
                            <li role="presentation"><a href="#watches" role="tab" id="watches-tab" data-toggle="tab" aria-controls="watches">Watches</a></li>
                            <li role="presentation"><a href="#sandals" role="tab" id="sandals-tab" data-toggle="tab" aria-controls="sandals">Sandals</a></li>
                            <li role="presentation"><a href="#jewellery" role="tab" id="jewellery-tab" data-toggle="tab" aria-controls="jewellery">Jewellery</a></li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                <div className="agile_ecommerce_tabs">
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/4.jpg" alt=" " className="img-responsive" />
                                            <img src='/images/4.jpg' alt=" " className="img-responsive" />
                                            <img src="/images/5.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/3.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/7.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/3.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/5.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/6.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">T-Shirt</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/4.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/6.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/5.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/3.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/7.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/3.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/5.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/6.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">T-Shirt</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/5.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/6.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/4.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/3.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/7.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/3.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/5.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/6.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">T-Shirt</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="skirts" aria-labelledby="skirts-tab">
                                <div className="agile_ecommerce_tabs">
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/10.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/10.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Skirt</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/10.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/10.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Skirt</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/10.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/10.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/8.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/9.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Skirt</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="watches" aria-labelledby="watches-tab">
                                <div className="agile_ecommerce_tabs">
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/13.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/13.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Watch</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/13.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/13.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Watch</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/13.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/13.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/11.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/12.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Watch</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="sandals" aria-labelledby="sandals-tab">
                                <div className="agile_ecommerce_tabs">
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/16.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/16.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Sandal</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/16.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/16.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Sandal</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/16.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/16.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/14.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/15.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Sandal</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="jewellery" aria-labelledby="jewellery-tab">
                                <div className="agile_ecommerce_tabs">
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/19.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/19.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Jewellery</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/19.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/19.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Jewellery</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                        <div className="hs-wrapper">
                                            <img src="/images/19.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/19.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/17.jpg" alt=" " className="img-responsive" />
                                            <img src="/images/18.jpg" alt=" " className="img-responsive" />
                                            <div className="w3_hs_bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5><a href="single.html">Jewellery</a></h5>
                                        <div className="simpleCart_shelfItem">
                                            <p><span>$320</span> <i className="item_price">$250</i></p>
                                            <p><a className="item_add" href="#">Add to cart</a></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*modal-video*/}
                    <div className="modal video-modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModal">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/20.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look women's shirt</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="modal video-modal fade" id="myModal1" tabIndex={-1} role="dialog" aria-labelledby="myModal1">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/63.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look black women's jeans</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="modal video-modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModal2">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/23.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look women's Watch</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="modal video-modal fade" id="myModal3" tabIndex={-1} role="dialog" aria-labelledby="myModal3">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/24.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look women's Sandal</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="modal video-modal fade" id="myModal4" tabIndex={-1} role="dialog" aria-labelledby="myModal4">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/22.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look women's Necklace</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="modal video-modal fade" id="myModal5" tabIndex={-1} role="dialog" aria-labelledby="myModal5">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/35.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look women's Jacket</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="modal video-modal fade" id="myModal6" tabIndex={-1} role="dialog" aria-labelledby="myModal6">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <section>
                                    <div className="modal-body">
                                        <div className="col-md-5 modal_body_left">
                                            <img src="/images/39.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="col-md-7 modal_body_right">
                                            <h4>a good look women's Long Skirt</h4>
                                            <p>Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                            <div className="rating">
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star-.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="rating-left">
                                                    <img src="/images/star.png" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="modal_body_right_cart simpleCart_shelfItem">
                                                <p><span>$320</span> <i className="item_price">$250</i></p>
                                                <p><a className="item_add" href="#">Add to cart</a></p>
                                            </div>
                                            <h5>Color</h5>
                                            <div className="color-quality">
                                                <ul>
                                                    <li><a href="#"><span />Red</a></li>
                                                    <li><a href="#" className="brown"><span />Yellow</a></li>
                                                    <li><a href="#" className="purple"><span />Purple</a></li>
                                                    <li><a href="#" className="gray"><span />Violet</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>


    )
}
export default Body;