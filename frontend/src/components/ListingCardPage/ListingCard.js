import React from 'react'

function ListingCards({ src, title, description, price }) {
    return (
        <div className='cards_container'>
            <img src={src} alt='listing' />
            <div className='cards_text'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <a href='/listings'>Explore Now</a>
            </div>
        </div>
    )
}

export default ListingCards
