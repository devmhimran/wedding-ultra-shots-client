import React from 'react';

// newsletter section
const newsLetter = () => {
    return (
        <div className='container'>
            <div className="subscribe__form mx-auto py-5">
                <h1 className='text-center'>Subscribe for latest update</h1>
                <div className="card w-75 mx-auto">
                    <div className="card-body p-4">
                        <form>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input type="email" placeholder='example@domain.com' required />
                            </div>
                            <div className="input__form">
                                <button className='signin__button'>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default newsLetter;