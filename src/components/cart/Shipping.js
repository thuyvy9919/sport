import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {saveShippingInfo} from '../.././actions/cartActions'
import { useNavigate } from 'react-router-dom';



export const Shipping = () => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch();
    let navigate = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingInfo({ address, city, phone }))
        navigate('/order/confirm');

        
    }
    return (
        <div>
            <div className="container">
                <div className="shipping">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="form-header">Shipping Info</h1>
                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">City</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Phone Number</label>
                            <input
                                type="number"
                                id="phone_field"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required />
                        </div>


                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-block py-3">
                            CONTINUE
                        </button>
                    </form>
                </div>


            </div>
        </div>
    )
}

