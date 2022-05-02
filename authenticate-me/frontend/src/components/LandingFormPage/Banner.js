import React, { useState, useEffect } from 'react';
import './Banner.css';
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner' id='head_banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
                <button onClick={() => setShowSearch(!showSearch)} className='banner_searchbutton'>
                    SEARCH DATES

                </button>
            </div>
            <div className='banner_container'>
                <div id='banner_content'>
                    <h1 id="banner_text">Help house 100,000 refugees fleeing Ukraine</h1>
                    <button id="banner_button">Explore Now</button>
                </div>
            </div>
            <div id='banner_lower_image'>
                <h2>Let your curiosity do the booking</h2>
                <button id="banner_button">I'm flexible</button>
            </div>
        </div >
    )
}
export default Banner
