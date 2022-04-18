import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const PasswordReset = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast("Please Check Your Inbox!")
    }
    return (
        <div className='container'>
            <div className="login__form">
                <div className="card">
                    <div className="card-body p-4">
                        <div className="form__titie">
                            <h2>Reset Your Password?</h2>
                        </div>
                        <form onSubmit={handlePasswordReset}>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input ref={emailRef} type="text" placeholder='example@domain.com' required />
                            </div>
                            {/* <small className='text-danger'>{errorMsg}</small> */}
                            <div className="input__form">
                                <button className='signin__button' type='submit'>Reset</button>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;