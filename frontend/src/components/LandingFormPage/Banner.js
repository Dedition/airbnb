import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Search from './Search';
import { Button } from 'reactstrap';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner' id='head_banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
                <Button color='primary' onClick={() => setShowSearch(!showSearch)}
                    className='banner_searchButton'
                    variant='outlined'>Search Dates</Button>

            </div>
            <div className='banner_container'>

                <div id='banner_content'>
                    <h1 id="banner_text">Help house 100,000 refugees fleeing Ukraine</h1>
                    <a href="https://www.airbnb.org/help-ukraine?locale=en">
                        <button id="banner_button">Explore Now</button>
                    </a>
                </div>
            </div>
            <div className='spacer'></div>
            <div id='banner_lower_image'>
                <h2>Let your curiosity do the booking</h2>
                <button id="banner_button">I'm flexible</button>
            </div>
        </div >
    )
}
export default Banner
