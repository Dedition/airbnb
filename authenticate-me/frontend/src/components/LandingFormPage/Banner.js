import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner' id='head_banner'>
            <div className='banner_container'>
                <div id='banner_content'>
                    <h1 id="banner_text">Help house 100,000 refugees fleeing Ukraine</h1>
                    {/* <h4 id="banner_text">
                    The world is a book, and those who do not travel read only a page.
                </h4> */}
                    <button id="banner_button ">Explore Now</button>
                </div>
                <div id='banner_lower_image'>
                    <h2>Let your curiosity do the booking</h2>
                    <button>I'm flexible</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
