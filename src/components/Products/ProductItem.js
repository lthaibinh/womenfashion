
import React,{useState, useEffect } from "react";
import {connect} from 'react-redux';
import * as action from './../../actions/index'
let ProductItem = (props) => {
    let product = props.product;
    let productImages = product.images
    let imgList = productImages.map((linkImg,index) => {
    
        return(
            <img src={linkImg} alt=" " className="img-responsive" />
        )
    })

    return (
        <div className="col-md-4 agileinfo_new_products_grid agileinfo_new_products_grid_dresses">
            <div className="agile_ecommerce_tab_left dresses_grid">
                <div className="hs-wrapper hs-wrapper2">
                    {imgList}
                    {imgList}
                    <div className="w3_hs_bottom w3_hs_bottom_sub1">
                        <ul>
                            <li >
                                <a onClick={() => (props.viewProduct(product))} href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h5><a href="single.html">{product.name}</a></h5>
                <div className="simpleCart_shelfItem">
                    {product.discount ? <p><span>${product.cost}</span> <i className="item_price">${product.cost - product.cost*product.discount/100 }</i></p>:
                        <p><i className="item_price">${product.cost}</i></p>}
                   
                    <p><a onClick={() => props.addToCart(product)} className="item_add">Add to cart</a></p>
                </div>
                {product.isNew === true ? <div className="dresses_grid_pos"><h6>New</h6></div>:''}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch, props) => ({
    viewProduct: (data) => dispatch(action.ViewProduct(data)),
    addToCart : (data) => dispatch(action.AddToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem) ;