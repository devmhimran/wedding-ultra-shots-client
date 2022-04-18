import React from 'react';
import devmhimran from '../../Assets/devmhimran.png';
import './About.css'

const About = () => {
    return (
        <div className='container about'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className='about__img' src={devmhimran} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 about__detail">
                    <div className=" ">
                    <p>
                        Hi, Myself Mahmud Hasan Imran. I'm a professional web developer. I'm a PHP, Wordpress & Elementor Addon Developer. I' have experience with more than 1 year in a startup company. Now I want become Mern Stack Developer. I love to work with JS. I love to develop modern websites.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;