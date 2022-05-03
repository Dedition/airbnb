import React from 'react';
import './LandingFormPage.css';
import Banner from './Banner';
import ListingCard from '../ListingCardPage/ListingCard';

function LandingPage() {
    return (
        <div className='home'>
            <Banner />
            <div className='home_section'>
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
            <div className='home_section'>
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
        </div>
    )
}

export default LandingPage;
