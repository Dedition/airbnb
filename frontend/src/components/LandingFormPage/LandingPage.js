import React from 'react';
import './LandingFormPage.css';
import Banner from './Banner';
import ListingCard from '../ListingCardPage/ListingCard';

function LandingPage() {
    return (
        <div className='home'>
            <Banner />
            <div className='home_section'>
                <ListingCard
                    src='https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                    title='Entire House'
                    description='Entire house in the heart of the city.'
                />
                <ListingCard
                    src='https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4='
                    title='Beautiful Apartment'
                    description='Beautiful apartment in the heart of the city.'
                />
                <ListingCard
                    src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    title='Treat Yourself To A Room'
                    description='Spaces that are more than just a place for you to sleep.'
                />
            </div>
            <div className='home_section'>
                <ListingCard
                    src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                    title='A beautiful Mediterranean style home'
                    description='Take a week off. Enjoy the city.'
                />
                <ListingCard
                    src='https://images.unsplash.com/photo-1595524362625-fcbe45feafa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60'
                    title='A room a day, keeps Leo away.'
                    description='A room guaranteed to give you all the privacy you need.'
                />
                <ListingCard
                    src='https://images.unsplash.com/photo-1549604453-fffc1158a024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60'
                    title='Enjoy yourself.'
                    description='A large space for people living a large life.'
                />
            </div>
        </div>
    )
}

export default LandingPage;
