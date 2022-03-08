import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsProduct } from "../../actions/productActions.js";

const ProductDetails = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(
        (state) => state.detailsProductReducer
    );

    useEffect(() => {
        dispatch(getDetailsProduct(id));
    }, [dispatch, id]);

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
                            <p>Home / T-Shirt</p>
                            <h1>{product && product.name}</h1>
                            <h4>{product && product.price}đ</h4>
                            <select>
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select>
                            <input type="number" defaultValue={1} />
                            <a href className="btn">
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
