import React from 'react'

function ListingCards({ src, tile, description, price }) {
    return (
        <div className='cards_container'>
            <img src={src} alt='listing' />
        </div>
    )
}

export default ListingCards
