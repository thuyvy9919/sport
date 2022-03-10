import React from "react";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";
const Header = () => {
    const dispatch = useDispatch()
    const { userLogin, isAuthenticated } = useSelector(state => state.authReducer)

    const logoutHandler = () => {
        dispatch(logout())
    }
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
                                <>
                                    {
                                        isAuthenticated ? (
                                            <>
                                                <span>Hi, </span>
                                                <span>{userLogin.name}</span>
                                                <span> | </span>
                                                <Link to="/" onClick={logoutHandler}>Logout</Link>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/login">Login</Link>
                                                <span> | </span>
                                                <Link to="/register">Register</Link>
                                            </>
                                        )
                                    }
                                </>


                            </li>
                        </ul>
                    </nav>
                    <Link to="/cart">
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
