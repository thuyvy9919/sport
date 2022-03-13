import React, { useEffect } from "react";
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_ERROR } from '../../constants/userConstants'

export const ConfirmOrder = () => {
    const dispatch = useDispatch();

    const { cartItems, shippingInfo } = useSelector(state => state.cartReducer)
    const { userLogin } = useSelector(state => state.authReducer)

    useEffect(() => {
        dispatch({ type: CLEAR_ERROR })
    },[]);

    return (
        <div className="container">
            <div className="order-confirm">
                <div className="row">
                    <div className="col-8">

                        <h4 className="mb-3">Shipping Info</h4>
                        <p><b>Name:</b> {userLogin && userLogin.name}</p>
                        <p><b>Phone:</b> {shippingInfo && shippingInfo.phone}</p>
                        <p className="mb-4"><b>Address:</b> {`${shippingInfo && shippingInfo.address}, ${shippingInfo && shippingInfo.city}`}</p>

                        <hr />
                        <h4 className="mt-4">Cart Items:</h4>

                        {cartItems && cartItems.map(item => (
                            <div>
                                <hr />
                                <div className="cart-item" key={item.product}>
                                    <div className="row">
                                        <div className="col-4 col-lg-2">
                                            <img src={item.image} alt={item.name} height="80" width="80" />
                                        </div>

                                        <div className="col-6 col-lg-6">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            <p>Size: {item.size}</p>
                                        </div>


                                        <div className="col-2 col-lg-4 mt-4 mt-lg-0">

                                            <p>{item.quantity} x <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'đ '} /> = <b><NumberFormat value={(item.quantity * item.price)} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></b></p>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}



                    </div>

                    <div className="col-4">
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <hr />
                            <p>Subtotal:  <span className="order-summary-values"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                            <p>Shipping: <span className="order-summary-values"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                            <p>Tax:  <span className="order-summary-values"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>

                            <hr />

                            <h5>Total: <span className="order-summary-values"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></h5>

                            <hr />
                            <button id="checkout_btn" className="btn btn-block btn-order-summary" >Proceed to Payment</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
