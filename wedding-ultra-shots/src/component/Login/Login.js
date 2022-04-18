import React from 'react';
import './Login.css';
import SocialRegister from '../SocialRegister/SocialRegister';

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
                                <input type="email" placeholder='example@domain.com' required/>
                            </div>
                            <div className="input__form">
                                <small>Enter Password</small>
                                <input type="text" placeholder='******' required/>
                            </div>
                            <div className="input__form">
                                <button className='signin__button'>Sign in</button>
                            </div>
                            <div className="register__link mt-3">
                                <p>New on Wedding Ultrashots? <a href='/register'>Register</a></p>
                            </div>
                            <div className="divider  d-flex justify-content-center align-items-center py-3">
                                <span></span>
                                    <p className='mx-4'>or</p>
                                <span></span>
                            </div>
                        </form>
                        <SocialRegister></SocialRegister>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;