import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import { useNavigate  } from "react-router-dom";

const Login = () => {
    let navigate  = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isAuthenticated, error, loading } = useSelector(state => state.authReducer)

    


    useEffect(() => {

        if(isAuthenticated) {
            //Nếu đã có user login thì chuyển về trang chủ
            navigate('/')
        }
        if(error) {
            alert(error)
        }
    }, [dispatch, isAuthenticated, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };
    
    return (
        <>
            <div className="account-page">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src="images/image1.png" width="100%" />
                        </div>
                        <div className="col-2">
                            <div className="form-container">
                                <div className="form-btn">
                                    <span onclick="login()">Login</span>
                                    <span onclick="register()">Register</span>
                                    <hr id="Indicator" />
                                </div>
                                <form id="LoginForm" onSubmit={submitHandler}>
                                    <input
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <button type="submit" className="btn">
                                        Login
                                    </button>
                                    <a href>Forgot password</a>
                                </form>
                                {/* <form id="RegForm">
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <button type="submit" className="btn">
                                        Register
                                    </button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
