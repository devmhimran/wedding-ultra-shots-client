import React from 'react';
import img from '../../Assets/error-gif.gif'

const Blogs = () => {
    return (
        <div className='container py-5'>
           <div className="question-ans py-2">
            <h1>Difference between authorization and authentication</h1>
            <p>In Authentiction , it's varify users that who is the users. Authentication works through password and also check using temporary pin. It is a good process for management process.
            <br />
            In Authorization , it's determines that, what resource user can access. Authorization work with every feature like settings that are implemented by the organization
            </p>
           </div>
           <div className="question-ans py-2">
            <h1>Why are you using firebase?</h1>
            <p>The Firebase is a database system, that anyone can use this database to their websit. It's a safe and secure for website and trustable for website visitor</p>
           </div>
           <div className="question-ans py-2">
            <h1> What other options do you have to implement authentication?</h1>
            <p>The options are password base authentication. Multifactor authentication. Token Based authentication  also we can use multifactor authentication</p>
           </div>
           <div className="question-ans py-2">
            <h1>What other services does firebase provide other than authentication</h1>
            <p>Firebase provides us cloud firestore, hosting, authentication, cloud storage, dynamic links and some other options</p>
           </div>
        </div>
    );
};

export default Blogs;