import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import SocialRegister from '../SocialRegister/SocialRegister';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmRef = useRef('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      if(user){
        navigate('/login');
      }
    const handleRegister = async (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const confirmPassword = confirmRef.current.value;
        
        
        console.log(name, email, password)

        if(password !== confirmPassword){
            setErrorMsg('Password not matched')
        }
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
    }
    return (
        <div className='container'>
            <div className="login__form">
                <div className="card">
                    <div className="card-body p-4">
                        <div className="form__titie">
                            <h2>Sign up</h2>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="input__form">
                                <small>Enter Name</small>
                                <input ref={nameRef} type="text" placeholder='John Doe' required/>
                            </div>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input ref={emailRef} type="text" placeholder='example@domain.com' required/>
                            </div>
                            <div className="input__form">
                                <small>Enter Password</small>
                                <input ref={passRef} type="password" placeholder='Your passowrd' required/>
                            </div>
                            <div className="input__form">
                                <small>Confirm Password</small>
                                <input ref={confirmRef} type="password" placeholder='Confirm passowrd' required/>
                            </div>
                            <small className='text-danger'>{errorMsg}</small>
                            <div className="input__form">
                                <button className='signin__button' type='submit'>Sign up</button>
                            </div>
                            <div className="register__link mt-3">
                                <p>Already have account? <a href='/login'>Login</a></p>
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

export default Register;