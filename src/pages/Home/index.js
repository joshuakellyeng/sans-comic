import React from 'react';
import Hero from '../../components/Hero'

const Home = ( { promoComics } ) => {
    return (
        <div>
           <Hero promoComics={promoComics} />
        </div>
    );
}

export default Home;
