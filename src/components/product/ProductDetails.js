import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsProduct } from "../../actions/productActions.js";
import { addToCart } from "../../actions/cartActions.js";

const ProductDetails = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(
        (state) => state.detailsProductReducer
    );
    const { isAuthenticated, userLogin } = useSelector(
        (state) => state.authReducer
    );

    const [qty, setQty] = useState(1)

    useEffect(() => {
        dispatch(getDetailsProduct(id));
    }, [dispatch, id]);

    const addProductToCart = () => {
        if (isAuthenticated) {
            const user_id = userLogin._id

            if (qty > product.stock) {
                console.log('Mua it thoi');
            } else {
                dispatch(addToCart(user_id, id, qty))
            }
        } else {
            console.log('Phai login truoc');

        }
    }


    return (
        <>
            {loading === false ? (
                <div className="small-container single-product">
                    <div className="row">
                        <div className="col-2">
                            <img
                                src={product && product.images[0].url}
                                width="100%"
                                id="productImg"
                                alt=""
                            />
                            <div className="small-img-row">
                                {product &&
                                    product.images.map((image) => (
                                        <div
                                            className="small-img-rol"
                                            key={image.public_id}
                                        >
                                            <img
                                                src={image.url}
                                                width="100%"
                                                className="small-img"
                                                alt=""
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="col-2">
                            <p>Home / </p>
                            <h1>{product && product.name}</h1>
                            <h4>{product && product.price}đ</h4>
                            <p>Stock: {product.stock}</p>
                            <p>Sold: {product.sold}</p>
                            {/* <select>
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select> */}
                            <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} />
                            <a href className="btn" onClick={addProductToCart}>
                                Add To Card
                            </a>
                            <h3>
                                Product Detail
                                <i className="fa fa-indent" />
                            </h3>
                            <br />
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>LOADING...</div>
            )}
        </>
    );
};

export default ProductDetails;
 