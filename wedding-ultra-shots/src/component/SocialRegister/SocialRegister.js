import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const SocialRegister = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className="input__form">
            <button className='signin__button w-100' onClick={()=>signInWithGoogle()}><BsGoogle></BsGoogle> <span>Google</span></button>
        </div>
    );
};

export default SocialRegister;