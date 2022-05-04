import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Spot.css";
import * as spotActions from '../../store/spots';
import SpotCard from './SpotCard';

export function Listings({ userId = null }) {
    const dispatch = useDispatch();
    const spotsObj = useSelector(state => state.spots);
    const thunk = userId ? spotActions.getSpotsByUserId(userId) : spotActions.fetchSpots();

    const spots = Object.values(spotsObj);

    useEffect(() => {
        dispatch(thunk);
    }, [dispatch]);

    return spots.length > 0 ? (
        <div className="row-spot" id='spots-container'>
            {
                spots.map(spot => (
                    <SpotCard key={spot.id}
                        id={`${spot.id}`}
                        spot={spot}
                        title={spot.title}
                    />
                ))}
        </div >
    ) : (
        <h2 style={{ marginBottom: '10px' }}>Sorry, we couldn't find any listings for you! :( (Unless you deleted them all, then you're a big meanie) </h2>
    );
}


export default Listings;
