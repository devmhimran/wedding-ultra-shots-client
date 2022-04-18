import React, { useState } from 'react';
import './Login.css';
import SocialRegister from '../SocialRegister/SocialRegister';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let errorMsg ;

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    if(error){
        errorMsg = error.message;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <p>Loading...</p>;
      }
    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    
    return (
        <div className='container'>
            <div className="login__form">
                <div className="card">
                    <div className="card-body p-4">
                        <div className="form__titie">
                            <h2>Sign in</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input onBlur={handleEmail} type="email" placeholder='example@domain.com' required />
                            </div>
                            <div className="input__form">
                                <small>Enter Password</small>
                                <input onBlur={handlePassword} type="password" placeholder='******' required />
                            </div>
                            <small className='text-danger mt-2'>{errorMsg}</small>
                            <div className="input__form">
                                <button className='signin__button'>Sign in</button>
                            </div>
                            <div className="register__link mt-3">
                                <p>New on Wedding Ultrashots? <a href='/register'>Register</a></p>
                                <p>Forget Password? <a href='/forget-password'>Click Here</a></p>
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