import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import NewsLetter from '../NewsLetter/NewsLetter'
const Home = () => {
    return (
      <>
        {/* banner or carousel */}
        <Banner></Banner>
        {/* service section */}
        <Services></Services>
        {/* newsletter section */}
        <NewsLetter></NewsLetter>
      </>
    );
};

export default Home;