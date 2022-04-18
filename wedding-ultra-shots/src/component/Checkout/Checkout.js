import React from 'react';

const Checkout = () => {
    return (
        <div className='container'>
            <div className="login__form">
                <div className="card">
                    <div className="card-body p-4">
                        <div className="form__titie">
                            <h2>Checkout</h2>
                        </div>
                        <form>
                            <div className="input__form">
                                <small>Enter Name</small>
                                <input type="text" placeholder='example@domain.com' required />
                            </div>
                            <div className="input__form">
                                <small>Enter Addess</small>
                                <input type="text" placeholder='example@domain.com' required />
                            </div>
                            <div className="input__form">
                                <small>Enter Email</small>
                                <input type="text" placeholder='example@domain.com' required />
                            </div>
                            <div className="input__form">
                                <small>Enter Phone</small>
                                <input type="text" placeholder='example@domain.com' required />
                            </div>
                            {/* <small className='text-danger'>{errorMsg}</small> */}
                            <div className="input__form">
                                <button className='signin__button' type='submit'>Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;