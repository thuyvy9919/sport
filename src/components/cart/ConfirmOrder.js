import React, { useEffect } from "react";
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_ERROR } from '../../constants/userConstants'
import { newOrder } from "../../actions/orderActions";

export const ConfirmOrder = () => {
    const dispatch = useDispatch();

    const { cartItems, shippingInfo } = useSelector(state => state.cartReducer)
    const { userLogin } = useSelector(state => state.authReducer)

    useEffect(() => {
        dispatch({ type: CLEAR_ERROR })
    }, []);

    const order = {
        itemsPrice: cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
        shippingPrice: 0,
        taxPrice: 0,
        totalPrice: cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
        orderItems: cartItems,
        shippingInfo,
        paymentInfo: {
            name: "Ship COD",
            status: "no"
        }
    }

    const confirmOrder = () => {
        dispatch(newOrder(order))
    }

    return (
        <div className="container">
            <div className="order-confirm">
                <div className="order-info">
                    <h3 style={{ marginTop: '36px' }}>Shipping Info</h3>
                    <p><b>Name:</b> {userLogin && userLogin.name}</p>
                    <p><b>Phone:</b> {shippingInfo && shippingInfo.phone}</p>
                    <p className="mb-4"><b>Address:</b> {`${shippingInfo && shippingInfo.address}, ${shippingInfo && shippingInfo.city}`}</p>

                    <hr />
                    <h3 style={{ marginTop: '36px' }}>Order Items:</h3>
                    <hr />

                    {cartItems && cartItems.map(item => (
                        <div style={{ marginTop: '10px' }}>
                            <div className="cart-item row" key={item.product_id}>
                                <div className="item-col-2">
                                    <img src={item.image} alt={item.name} height="80" width="80" />
                                </div>

                                <div className="item-col-6">
                                    <Link to={`/product/${item.product_id}`}>{item.name}</Link>
                                    <p>{item.qty} x <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></p>
                                </div>

                                <div className="item-col-2">
                                    = <b><NumberFormat value={(item.qty * item.price)} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></b>
                                </div>

                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

                <h3 style={{ marginTop: '36px' }}>Order Summary</h3>
                <p>Subtotal:  <span className="order-summary-values"><NumberFormat value={cartItems && cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                <p>Shipping: <span className="order-summary-values"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                <p>Tax:  <span className="order-summary-values"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                <h3>Total: <span className="order-summary-values"><NumberFormat value={cartItems && cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></h3>
                
                <a href className="btn" onClick={confirmOrder}>Confirm Order</a>
            </div>
        </div>
    )
}
