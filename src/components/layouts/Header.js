import React from "react";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";

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
                                <Link to="/login">Account</Link>
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
            </div>
        </div>
    );
};

export default Header;
