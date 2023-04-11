import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FeatureJob from '../FeatureJob/FeatureJob';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FeatureJob></FeatureJob>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;