import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";

export default function Cart() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(
        (state) => state.cartReducer
    );
    const { userLogin, isAuthenticated } = useSelector(
        (state) => state.authReducer
    );
    const removeCartItemHandler = (id) => {
        dispatch(removeCart(userLogin._id, id))
    }
    return (
        <div>
            {
                isAuthenticated ? (cartItems.length === 0 ? (
                    <div className="container">
                        <h2>Chua co san pham nao trong gio hang. Mua hang deeeee!</h2>
                    </div>
                ) : (
                    <div className="small-container cart-page">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                                {cartItems.map((item) => (
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src={item.image} alt="" />
                                                <div>
                                                    <Link to={`/product/${item.product_id}`}><p>{item.name}</p></Link>
                                                    <small>Price: {item.price}</small>
                                                    <br />
                                                    <a onClick={() => removeCartItemHandler(item.product_id)} href>Remove</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="number" defaultValue={item.qty} /></td>
                                        <td>{item.price * item.qty}</td>
                                    </tr>

                                ))}

                            </tbody></table>
                        <div className="total-price">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <Link to='/order/shipping' className="btn" href>Order</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )) : (
                    <div className="container">
                        <h2>Dang nhap di roi moi cho xem gio hang hihi!</h2>
                    </div>
                )
            }


        </div>
    )
}
