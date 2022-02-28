import React from "react";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";
import Image1 from "../../assets/images/image1.png";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo" width="125px" />
                        </Link>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">Account</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/">
                        <img src={Cart} alt="cart" width="30px" height="30px" />
                    </Link>
                    {/* <img
                        src="images/menu.png"
                        className="menu-icon"
                        onclick="menutoggle()"
                    /> */}
                </div>
                <div className="row">
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
        </div>
    );
};

export default Header;
