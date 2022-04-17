import React from 'react';
import { BsGoogle } from 'react-icons/bs';

const Register = () => {
    return (
        <div className='container'>
            <div className="login__form">
                <div className="card">
                    <div className="card-body p-4">
                        <div className="form__titie">
                            <h2>Sign up</h2>
                        </div>
                        <form>
                            <div className="input__form">
                                <small>Enter Name</small>
                                <input type="text" placeholder='John Doe' required/>
                            </div>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input type="text" placeholder='example@domain.com' required/>
                            </div>
                            <div className="input__form">
                                <small>Enter Password</small>
                                <input type="text" placeholder='Your passowrd' required/>
                            </div>
                            <div className="input__form">
                                <small>Confirm Password</small>
                                <input type="text" placeholder='Confirm passowrd' required/>
                            </div>
                            <div className="input__form">
                                <button className='signin__button'>Sign up</button>
                            </div>
                            <div className="register__link mt-3">
                                <p>Already have account? <a href='/register'>Login</a></p>
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

export default Register;