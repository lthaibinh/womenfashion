import React,{useState,useEffect} from "react";
import Authent from "./Header_Authent";
import UserProfile from "./Header_UserProfile";
import { connect } from 'react-redux';
import {
    Link,
} from 'react-router-dom';
function Header(props) {

    let [total, setTotal] = useState(0);
    let [numQuantity, setNumQuantity] = useState(0);
    let isSignIn = props.isSignIn;
    useEffect(() => {
      
        let sumCost = 0
        props.cartList.forEach(cart => {
            sumCost = sumCost + (cart.product.discount ? cart.product.cost - cart.product.cost * cart.product.discount / 100
                : cart.product.cost) * cart.quantity
        });
        let sumQuantity = 0
        props.cartList.forEach(cart => {
            sumQuantity = sumQuantity + 1
        });
        setTotal(sumCost)
        setNumQuantity(sumQuantity)
    }, [props])
    return (

        <div>
            <div className="modal fade" id="myModal88" tabIndex={-1} role="dialog" aria-labelledby="myModal88" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                ×</button>
                        </div>
                        {isSignIn ? <UserProfile></UserProfile> : <Authent></Authent>}
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="w3l_login">
                        <a href="#" data-toggle="modal" data-target="#myModal88"><span className="glyphicon glyphicon-user" aria-hidden="true" /></a>
                    </div>
                    <div className="w3l_logo">
                        <h1><a href="index.html">Women's Fashion<span>For Fashion Lovers</span></a></h1>
                    </div>
                    <div className="search">
                        <input className="search_box" type="checkbox" id="search_box" />
                        <label className="icon-search" htmlFor="search_box"><span className="glyphicon glyphicon-search" aria-hidden="true" /></label>
                        <div className="search_form">
                            <form action="#" method="post">
                                <input type="text" name="Search" placeholder="Search..." />
                                <input type="submit" defaultValue="Send" />
                            </form>
                        </div>
                    </div>
                    <div className="cart box_1">
                        <Link to="/cart">
                            <div className="total">
                                <span className="">$ {total} </span>
                                (<span id="simpleCart_quantity" className="" />{numQuantity} items)
                            </div>
                         
                            {/* <span class="simpleCart_total">$0.00</span> */}
                        </Link>
                        <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="navigation">
                <div className="container">
                    <nav className="navbar navbar-default">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header nav_2">
                            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <Link to="/" >
                                        Home
                                    </Link>
                                    {/* <MenuLink label="Home" to="/" activeOnlyWhenExact={true} /> */}
                                </li>
                                {/* Mega Menu */}
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret" /></a>

                                    <ul className="dropdown-menu multi-column columns-3">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <h6>Clothing</h6>
                                                    <li>
                                                        <Link to="/products/dresses" >
                                                            <a >Dresses<span>New</span></a>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/products/sweaters" >
                                                            <a >Sweaters</a>
                                                        </Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/products/shortsandskirts" >
                                                            <a href="skirts.html">Shorts &amp; Skirts</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/jeans" >
                                                            <a >Jeans</a>
                                                        </Link>
                                                    </li>
                                                    <li>

                                                        <Link to="/products/shirtsandtops" >
                                                            <a >Shirts &amp; Tops<span>New</span></a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <h6>Ethnic Wear</h6>
                                                    <li>
                                                        <Link to="/products/salwars" >
                                                            <a >Salwars</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/sarees" >
                                                            <a >Sarees<span>New</span></a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/all" >
                                                            <a ><i>All</i></a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-2">
                                                <ul className="multi-column-dropdown">
                                                    <h6>Foot Wear</h6>
                                                    <li>
                                                        <Link to="/products/flats" >
                                                            <a>Flats</a>
                                                        </Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/products/sandals" >
                                                            <a>Sandals</a>
                                                        </Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/products/boots" >
                                                            <a >Boots</a>
                                                        </Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/products/heels" >
                                                            <a >Heels</a>
                                                        </Link>

                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w3ls_products_pos">
                                                    <h4>50%<i>Off/-</i></h4>
                                                    <img src="/images/1.jpg" alt=" " className="img-responsive" />
                                                </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about" >
                                        About Us
                                    </Link>
                                </li>
                                {/* <li><a href="short-codes.html">Short Codes</a></li> */}
                                <li>
                                    <Link to="/mail" >
                                        Mail Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>



    )
}

const mapStateToProps = (state) => ({
    isSignIn: state.isSignIn,
    cartList: state.cartList
})
const mapDispatchToProps = (dispatch, props) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Header);