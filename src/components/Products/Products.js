import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Link, Outlet} from 'react-router-dom';

function Products(props) {

    const  [product, setProduct] = useState(props.product)
    
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        setProduct(props.product);
    }, [props.product]);
   
  
    return (
        <div className="Products">
            <div className="dresses">
                <div className="container">
                    <div className="w3ls_dresses_grids">
                        <div className="col-md-4 w3ls_dresses_grid_left">
                            <div className="w3ls_dresses_grid_left_grid">
                                <h3>Categories</h3>
                                <div className="w3ls_dresses_grid_left_grid_sub">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title asd">
                                                    <a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>New Arrivals
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body panel_text">
                                                    <ul>
                                                        <li>
                                                            <Link to="/products/dresses" >
                                                                Dresses
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/sweaters" >
                                                                Sweaters
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/shortsandskirts" >
                                                                Shorts & Skirts
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/jeans" >
                                                                Jeans
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/shirts" >
                                                                Shirts
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title asd">
                                                    <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Foot Wear
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body panel_text">
                                                    <ul>
                                                        <li>
                                                            <Link to="/products/flats" >
                                                                Flats
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/sandals" >
                                                                Sandals
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/boots" >
                                                                Boots
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/heals" >
                                                                Heals
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/products/shirts" >
                                                                Shirts
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="panel_bottom">
                                        <li><a href="products.html">Summer Store</a></li>
                                        <li><a href="dresses.html">New In Clothing</a></li>
                                        <li><a href="sandals.html">New In Shoes</a></li>
                                        <li><a href="products.html">Latest Watches</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w3ls_dresses_grid_left_grid">
                                <h3>Color</h3>
                                <div className="w3ls_dresses_grid_left_grid_sub">
                                    <div className="ecommerce_color">
                                        <ul>
                                            <li><a href="#"><i></i> Red(5)</a></li>
                                            <li><a href="#"><i></i> Brown(2)</a></li>
                                            <li><a href="#"><i></i> Yellow(3)</a></li>
                                            <li><a href="#"><i></i> Violet(6)</a></li>
                                            <li><a href="#"><i></i> Orange(2)</a></li>
                                            <li><a href="#"><i></i> Blue(1)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w3ls_dresses_grid_left_grid">
                                <h3>Size</h3>
                                <div className="w3ls_dresses_grid_left_grid_sub">
                                    <div className="ecommerce_color ecommerce_size">
                                        <ul>
                                            <li><a href="#">Medium</a></li>
                                            <li><a href="#">Large</a></li>
                                            <li><a href="#">Extra Large</a></li>
                                            <li><a href="#">Small</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 w3ls_dresses_grid_right">

                            <div className="col-md-6 w3ls_dresses_grid_right_left">
                                <div className="w3ls_dresses_grid_right_grid1">
                                    <img src="/images/72.jpg" alt=" " className="img-responsive" />
                                    <div className="w3ls_dresses_grid_right_grid1_pos1">
                                        <h3>Cosmetics <span>Up To</span> 10% Discount</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 w3ls_dresses_grid_right_left">
                                <div className="w3ls_dresses_grid_right_grid1">
                                    <img src="/images/73.jpg" alt=" " className="img-responsive" />
                                    <div className="w3ls_dresses_grid_right_grid1_pos">
                                        <h3>Cosmetics <span>Makeup</span> Brush</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="clearfix"> </div>

                            <div className="w3ls_dresses_grid_right_grid2">
                                <div className="w3ls_dresses_grid_right_grid2_left">
                                    <h3>Showing Results: 0-1</h3>
                                </div>
                                <div className="w3ls_dresses_grid_right_grid2_right">
                                    <select name="select_item" className="select_item">
                                        <option selected="selected">Default sorting</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by average rating</option>
                                        <option>Sort by newness</option>
                                        <option>Sort by price: low to high</option>
                                        <option>Sort by price: high to low</option>
                                    </select>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                            <Outlet />
                            {/* <ProductsList></ProductsList> */}

                          
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
            <div className="modal video-modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModal1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <section>
                            <div className="modal-body">
                                <div className="col-md-5 modal_body_left">
                                    <img src={product.images ? product.images[0] : 'images/67.jpg'} alt=" " className="img-responsive" />
                                </div>
                                <div className="col-md-7 modal_body_right">
                                    <h4>{product.name ? product.name : ''}</h4>
                                    <p>{product.description}</p>
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
                                        {product.discount ? <p><span>${product.cost}</span> <i className="item_price">${product.cost - product.cost * product.discount / 100}</i></p> :
                                            <p><i className="item_price">${product.cost}</i></p>}
                                        <p><a className="item_add" href="#">Add to cart</a></p>
                                    </div>
                                    <h5>Color</h5>
                                    <div className="color-quality">
                                        <ul>
                                        
                                            {product.color ? product.color.map((data, index) => {
                                                return (
                                                    <li><a href="#" className={data.toLowerCase()}><span></span>{data}</a></li>
                                                )
                                            }) : ''}
                                        </ul>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
           
            <div className="w3l_related_products">
                <div className="container">
                    <h3>Related Products</h3>
                    <ul id="flexiselDemo2">
                        <li>
                            <div className="w3l_related_products_grid">
                                <div className="agile_ecommerce_tab_left dresses_grid">
                                    <div className="hs-wrapper hs-wrapper3">
                                        <img src="/images/51.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/41.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/27.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/28.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/37.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/30.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/36.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/38.jpg" alt=" " className="img-responsive" />
                                        <div className="w3_hs_bottom">
                                            <div className="flex_ecommerce">
                                                <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5><a href="single.html">Long Purple Skirts</a></h5>
                                    <div className="simpleCart_shelfItem">
                                        <p className="flexisel_ecommerce_cart"><span>$312</span> <i className="item_price">$212</i></p>
                                        <p><a className="item_add" href="#">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w3l_related_products_grid">
                                <div className="agile_ecommerce_tab_left dresses_grid">
                                    <div className="hs-wrapper hs-wrapper3">
                                        <img src="/images/36.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/41.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/27.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/28.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/37.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/30.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/36.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/38.jpg" alt=" " className="img-responsive" />
                                        <div className="w3_hs_bottom">
                                            <div className="flex_ecommerce">
                                                <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5><a href="single.html">Black Shorts</a></h5>
                                    <div className="simpleCart_shelfItem">
                                        <p className="flexisel_ecommerce_cart"><span>$432</span> <i className="item_price">$323</i></p>
                                        <p><a className="item_add" href="#">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w3l_related_products_grid">
                                <div className="agile_ecommerce_tab_left dresses_grid">
                                    <div className="hs-wrapper hs-wrapper3">
                                        <img src="/images/38.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/37.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/27.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/28.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/37.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/30.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/36.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/38.jpg" alt=" " className="img-responsive" />
                                        <div className="w3_hs_bottom">
                                            <div className="flex_ecommerce">
                                                <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5><a href="single.html">White Skirts</a></h5>
                                    <div className="simpleCart_shelfItem">
                                        <p className="flexisel_ecommerce_cart"><span>$323</span> <i className="item_price">$310</i></p>
                                        <p><a className="item_add" href="#">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w3l_related_products_grid">
                                <div className="agile_ecommerce_tab_left dresses_grid">
                                    <div className="hs-wrapper hs-wrapper3">
                                        <img src="/images/37.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/41.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/27.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/28.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/37.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/30.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/36.jpg" alt=" " className="img-responsive" />
                                        <img src="/images/38.jpg" alt=" " className="img-responsive" />
                                        <div className="w3_hs_bottom">
                                            <div className="flex_ecommerce">
                                                <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5><a href="single.html">Long Skirts</a></h5>
                                    <div className="simpleCart_shelfItem">
                                        <p className="flexisel_ecommerce_cart"><span>$256</span> <i className="item_price">$200</i></p>
                                        <p><a className="item_add" href="#">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    product: state.viewProduct
})
const mapDispatchToProps = (dispatch, props) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Products);