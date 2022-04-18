import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import auth from '../firebase.init';

const SocialRegister = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className="input__form">
            <button className='signin__button w-100' onClick={()=>signInWithGoogle()}><BsGoogle></BsGoogle> <span>Google</span></button>
        </div>
    );
};

export default SocialRegister;