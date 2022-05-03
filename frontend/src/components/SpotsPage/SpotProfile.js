import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom";
import * as spotActions from "../../store/spots";
// import { spotFormModal } from "../Form/FormModal";
// import { spotDeleteButton } from "../Form/DeleteButton";


const SpotProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const spot = useSelector((state) => state?.spots[spotId]);

    useEffect(() => {
        dispatch(spotActions.getOneSpot(spotId));
    }, [dispatch, spotId]);

    // useEffect(() => {
    //     window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // }, []);

    let spotColor;
    if (spot.price > 0 && spot.price <= 100000) spotColor = 'brown';
    if (spot.price > 100000 && spot.price <= 200000) spotColor = 'green';
    if (spot.price > 200000 && spot.price <= 300000) spotColor = 'blue';
    if (spot.price > 300000 && spot.price <= 400000) spotColor = 'purple';
    if (spot.price > 400000 && spot.price <= 500000) spotColor = 'orange';
    if (spot.price > 500000 && spot.price <= 600000) spotColor = 'red';
    if (spot.price > 600000 && spot.price <= 700000) spotColor = 'yellow';
    if (spot.price > 700000 && spot.price <= 800000) spotColor = 'pink';
    if (spot.price > 800000 && spot.price <= 900000) spotColor = 'grey';
    if (spot.price > 900000 && spot.price <= 1000000) spotColor = 'maroon';
    if (spot.price > 1000000 && spot.price <= 1100000) spotColor = 'teal';
    if (spot.price > 1100000 && spot.price <= 1200000) spotColor = 'olive';
    if (spot.price > 1200000) spotColor = 'lime';

    const handleClick = () => history.push(`/listing/${spot.id}`);

    return (
        <div onClick={handleClick} className={`spot-profile ${spotColor}`}>
            <div className='spot-profile'>
                <SpotHeader property={spot} />
                <div style={{ width: '75%' }} className="line" />
                {/* <Image spotId={spotId}/>
        <div style={{width:'75%'}} className="line"/> */}
                {/* <Review spotId={spotId} /> */}
                {/* <div className='filler-box' style={{backgroundColor:'white'}}/> */}
            </div>
        </div>
    );
}


const SpotHeader = ({ spot }) => {
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state?.session?.user);

    return (
        <div className='spot-header row-list'>

            <div className='spot-header-left'>
                <h1>{spot?.title}</h1>
                <h3>{`${spot?.city}, ${spot?.state}`}</h3>

                <div style={{ width: '14em', margin: 0 }} className="line" />

                <NavLink to={`/listing/${spotId}`}>
                    <button className='btn-primary'>View Listing</button>
                </NavLink>
            </div>

            <div className='spot-header-right'> {sessionUser?.id === spot?.spotId && (<>
                <spotFormModal name='Edit spot' edit={true} spot={spot} />
                <spotDeleteButton spotId={spotId} />
            </>)}
            </div>

        </div>
    )
}

export default SpotProfile
