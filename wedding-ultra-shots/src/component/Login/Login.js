import React from 'react';
import './Login.css';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div className='container'>
            <div className="login__form">
                <div className="card">
                    <div className="card-body p-4">
                        <div className="form__titie">
                            <h2>Sign in</h2>
                        </div>
                        <form>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input type="text" placeholder='example@domain.com' require/>
                            </div>
                            <div className="input__form">
                                <small>Enter Password</small>
                                <input type="text" placeholder='******' require/>
                            </div>
                            <div className="input__form">
                                <button className='signin__button'>Sign in</button>
                            </div>
                            <div className="divider  d-flex justify-content-center align-items-center py-3">
                                <span></span>
                                    <p className='mx-4'>or</p>
                                <span></span>
                            </div>
                            <div className="input__form">
                                <button className='signin__button w-100'><BsGoogle></BsGoogle> <span>Google</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;