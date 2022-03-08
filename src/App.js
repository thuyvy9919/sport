import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header.js";
import Footer from "./components/layouts/Footer.js";
import Products from "./components/product/Products.js";
import ProductDetails from "./components/product/ProductDetails.js";
import Home from "./components/Home.js";
import Login from "./components/user/Login.js";

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
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
