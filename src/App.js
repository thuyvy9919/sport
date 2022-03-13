import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header.js";
import Footer from "./components/layouts/Footer.js";
import Products from "./components/product/Products.js";
import ProductDetails from "./components/product/ProductDetails.js";
import Home from "./components/Home.js";
import Login from "./components/user/Login.js";
import Cart from "./components/cart/Cart.js"; 
import {Shipping} from "./components/cart/Shipping.js"; 
import {ConfirmOrder} from "./components/cart/ConfirmOrder"; 





function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order/shipping" element={<Shipping />} />
                    <Route path="/order/confirm" element={<ConfirmOrder />} />


                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
