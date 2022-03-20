import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/image1.png";

import {
    getFeaturedProducts,
    getLatestProducts,
} from "../actions/productActions";

const Home = () => {
    const dispatch = useDispatch();
    const { featuredProducts } = useSelector(
        (state) => state.featuredProductsReducer
    );
    const { latestProducts } = useSelector(
        (state) => state.latestProductsReducer
    );

    useEffect(() => {
        dispatch(getFeaturedProducts());
        dispatch(getLatestProducts());
    }, [dispatch]);
    
    return (
        <>
            <div>
                <div className="row header">
                    <div className="container navbar">
                        <div className="col-2">
                            <h1>
                                Give Your Workout
                                <br /> A New Style!
                            </h1>
                            <p>
                                Success ins't always about greatness. It's about
                                consistency. Consistent <br />
                                hard work gains success. Greatness will come.{" "}
                            </p>
                            <Link to="/" className="btn">
                                Explore Now →
                            </Link>
                        </div>
                        <div className="col-2">
                            <img src={Image1} alt="banner" />
                        </div>
                    </div>
                </div>
                {/* ------------- featured categorries ---------------- */}
                {/* <div className="categories">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-3">
                                <img src="images/category-1.jpg" />
                            </div>
                            <div className="col-3">
                                <img src="images/category-2.jpg" />
                            </div>
                            <div className="col-3">
                                <img src="images/category-3.jpg" />
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* ------------- featured products ---------------- */}
                <div className="small-container">
                    <h2 className="title">Featured Products</h2>
                    <div className="row">
                        {featuredProducts &&
                            featuredProducts.map((featuredProduct) => (
                                <div
                                    className="col-4"
                                    key={featuredProduct._id}
                                >
                                    <Link
                                        to={`/product/${featuredProduct._id}`}
                                        style={{
                                            height: "255px",
                                            width: "100%",
                                            display: "inline-block",
                                        }}
                                    >
                                        <img
                                            src={featuredProduct.images[0].url}
                                            alt=""
                                        />
                                    </Link>
                                    <Link
                                        to={`/product/${featuredProduct._id}`}
                                    >
                                        <h4>{featuredProduct.name}</h4>
                                    </Link>

                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <p>{featuredProduct.price}</p>
                                </div>
                            ))}
                    </div>

                    <h2 className="title">Latest Products</h2>
                    <div className="row">
                        {latestProducts &&
                            latestProducts.map((latestProduct) => (
                                <div className="col-4" key={latestProduct._id}>
                                    <Link to={`/product/${latestProduct._id}`}>
                                        <img
                                            src={latestProduct.images[0].url}
                                            alt=""
                                        />
                                    </Link>
                                    <Link to={`/product/${latestProduct._id}`}>
                                        <h4>{latestProduct.name}</h4>
                                    </Link>

                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <p>{latestProduct.price}</p>
                                </div>
                            ))}
                    </div>
                </div>
                {/* ------------ offer -------------- */}
                {/* <div className="offer">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src="images/exclusive.png"
                                    className="offer-img"
                                />{" "}
                            </div>
                            <div className="col-2">
                                <p>Exclusive Availabble on RedStore</p>
                                <h1>Smart Band 4</h1>
                                <small>
                                    The Mi Smart Band 4 features a 39.9% larger
                                    (than Mi Band 4) AMOLED color full-touch
                                    display with adjustable brightness, so
                                    everything is clear as can be
                                </small>
                                <a href className="btn">
                                    Buy Now →
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* ------------ testimonial -------------- */}
                {/* <div className="testimonial">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-3">
                                <i className="fa fa-qoute-lef" />
                                <p>
                                    Abilities or he perfectly pretended so
                                    strangers be exquisite. Oh to another
                                    chamber pleased imagine do in. Went me rank
                                    at last loud shot an draw. Excellent so to
                                    no sincerity smallness. Removal request
                                    delight if on he we
                                </p>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                                <img src="images/user-1.png" />
                                <h3>Đạt 1 Phích</h3>
                            </div>
                            <div className="col-3">
                                <i className="fa fa-qoute-lef" />
                                <p>
                                    Abilities or he perfectly pretended so
                                    strangers be exquisite. Oh to another
                                    chamber pleased imagine do in. Went me rank
                                    at last loud shot an draw. Excellent so to
                                    no sincerity smallness. Removal request
                                    delight if on he we
                                </p>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                                <img src="images/user-2.png" />
                                <h3>An Nguyen</h3>
                            </div>
                            <div className="col-3">
                                <i className="fa fa-qoute-lef" />
                                <p>
                                    Abilities or he perfectly pretended so
                                    strangers be exquisite. Oh to another
                                    chamber pleased imagine do in. Went me rank
                                    at last loud shot an draw. Excellent so to
                                    no sincerity smallness. Removal request
                                    delight if on he we
                                </p>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                                <img src="images/user-3.png" />
                                <h3>Quang Hoang</h3>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* ------------------- brands --------------------- */}
                {/* <div className="brands">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-5">
                                <img src="images/logo-godrej.png" />
                            </div>
                            <div className="col-5">
                                <img src="images/logo-oppo.png" />
                            </div>
                            <div className="col-5">
                                <img src="images/logo-coca-cola.png" />
                            </div>
                            <div className="col-5">
                                <img src="images/logo-paypal.png" />
                            </div>
                            <div className="col-5">
                                <img src="images/logo-philips.png" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Home;
