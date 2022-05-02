import React from 'react'
import { useSelector } from 'react-redux';
import "./Spot.css";



export function Listings() {
    const spots = useSelector(state => state.spots);
    return (
        <div>
            <ul>
                {Object.values(spots).map((spot) => (
                    <li key={spot.id}>{spot.address}</li>
                ))}
            </ul>
        </div>
    );
}
