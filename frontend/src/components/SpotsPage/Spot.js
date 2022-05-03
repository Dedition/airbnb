import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Spot.css";
import * as spotActions from '../../store/spots';
import SpotCard from './SpotCard';

export function Listings({ userId = null }) {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots);
    // const thunk = userId ? spotActions.fetchSpotsByUserId(userId) : spotActions.fetchSpots();
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


// import PropertyCard from './PropertyCard';
// // todo ——————————————————————————————————————————————————————————————————————————————————

// const PropertyList = ({userId = null}) => {
//   const dispatch = useDispatch();

//   const properties = useSelector(state => state.property.listOfProperties);

//   const thunk = userId ? getPropertiesByUserId(userId) : getProperties();

//   useEffect(() => {dispatch(thunk)}, [dispatch]);

//   return properties.length > 0 ? (
//     <div className='row-list' id='properties-container'>
//       {properties.map(property => (
//         <PropertyCard
//           key={property.id}
//           id={`property-${property.id}`}
//           title={property.title}
//           property={property}
//         />
//       ))}
//     </div>
//   ) : (
//     <h3 style={{marginBottom: '10px'}}>No Listings yet... why not start now?</h3>
//   );
// };

// export default PropertyList;
