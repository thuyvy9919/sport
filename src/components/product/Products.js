import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { getAllProducts } from "../../actions/productActions.js";

const Products = () => {
    const dispatch = useDispatch();
    const { allProducts, loading, error } = useSelector(
        (state) => state.allProductsReducer
    );
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <div>LOADING...</div>
            ) : (
                <div className="small-container">
                    <div className="row row-2">
                        <h2>All Products</h2>
                        <select>
                            <option>Default Shop</option>
                            <option>Short by price</option>
                            <option>Short by popularity</option>
                            <option>Short by Rating</option>
                            <option>Short by Sale</option>
                        </select>
                    </div>
                    <div className="row">
                        {allProducts &&
                            allProducts.map((product) => (
                                <div className="col-4" key={product._id}>
                                    <Link to={`/product/${product._id}`}>
                                        <img src={product.images[0].url} alt="" />
                                    </Link>
                                    <h4>{product.name}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <p>{product.price}</p>
                                </div>
                            ))}

                        
                    </div>
                    <div className="page-btn">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>→</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
