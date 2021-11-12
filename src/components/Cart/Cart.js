import React,{useState,useEffect} from "react";
// import InnerHTML from 'dangerously-set-html-content'
import * as action from './../../actions/index'
import {connect} from 'react-redux'

let Cart = (props) => {
    let [cartList, setCartList] = useState(props.cartList);
    let [total, setTotal] = useState(0);
    useEffect(()=>{
        setCartList(props.cartList)

        let sumCost = 0
        cartList.forEach(cart => {
            sumCost = sumCost + (cart.product.discount ? cart.product.cost - cart.product.cost * cart.product.discount / 100
                : cart.product.cost)*cart.quantity
        });
        setTotal(sumCost)
    },[cartList, props])
    
    let renderCartList = cartList.map((cart,index) => (
        
        <tr class="rem1">
            <td class="invert">{index+1}</td>
            <td class="invert-image"><a href="single.html"><img src={cart.product.images? cart.product.images[0]:''} alt=" " class="img-responsive" /></a></td>
            <td class="invert">
                <div class="quantity">
                    <div class="quantity-select">
                        <div onClick={() => props.decreateProduct(cart)} class="entry value-minus">&nbsp;</div>
                        <div class="entry value"><span>{cart.quantity}</span></div>
                        <div onClick={() => props.increateProduct(cart)} class="entry value-plus active">&nbsp;</div>
                    </div>
                </div>
            </td>
            <td class="invert">{cart.product.name}</td>

            <td class="invert">${cart.product.discount ? cart.product.cost - cart.product.cost * cart.product.discount/100
                : cart.product.cost}</td>
            <td class="invert">
                <div class="rem">
                    <div onClick={() => props.removeProduct(cart)} class="close1"> </div>
                </div>

            </td>
        </tr>
    ))
    let renderCheckOutList = cartList.map((cart, index) => (
        <li>{cart.product.name} <i>-</i> <span>${cart.product.discount ? cart.product.cost - cart.product.cost * cart.product.discount / 100
            : cart.product.cost}</span></li>
    ))
    // tinh tong tien
    
    return (
        <div>
            {/* <!-- banner --> */}
            <div class="banner10" id="home1">
                <div class="container">
                    <h2>Checkout</h2>
                </div>
            </div>
            {/* <!-- //banner --> */}

            {/* <!-- breadcrumbs --> */}
            <div class="breadcrumb_dress">
                <div class="container">
                    <ul>
                        <li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a> <i>/</i></li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
            {/* <!-- //breadcrumbs --> */}

            {/* <!-- checkout --> */}
            <div class="checkout">
                <div class="container">
                    <h3>Your shopping cart contains: <span>3 Products</span></h3>

                    <div class="checkout-right">
                        <table class="timetable_sub">
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            {renderCartList}
                            
                            
                            {/* <!--quantity--> */}
                            
                            {/* <!--quantity--> */}
                        </table>
                    </div>
                    <div class="checkout-left">
                        <div class="checkout-left-basket">
                           
                            <ul>
                                <li > <h5 style={{ fontWeight: 'bold',color:'black' }}>Details</h5> </li>
                                {renderCheckOutList}
                                <li>Total <i>-</i> <span>${total}</span></li>
                            </ul>
                            <h4 onClick={() => props.payment(cartList)}>Payment</h4>
                        </div>
                        <div class="checkout-right-basket">
                            <a href="products.html"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Continue Shopping</a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
const mapStateToProps = (state) => ({
    cartList : state.cartList
})
const mapDispatchToProps = (dispatch,props) => ({
    increateProduct: (data) => dispatch(action.IncreaseCart(data)),
    decreateProduct: (data) => dispatch(action.DecreaseCart(data)),
    removeProduct : (data) => dispatch(action.RemoveCart(data)),
    payment: (data) => dispatch(action.Payment(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart) ;