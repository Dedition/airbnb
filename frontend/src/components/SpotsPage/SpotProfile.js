import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom";
import * as spotActions from "../../store/spots";
// import DeleteSpot from "./DeleteSpot";
// import spotFormModal from "./spotFormModal";
// import CreateSpot from "./CreateSpot";
import "./Spot.css";
// import { spotFormModal } from "../Form/FormModal";
// import { spotDeleteButton } from "../Form/DeleteButton";


const SpotProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector((state) => state.spots[id]);
    // console.log(spot);
    // console.log(spot.id);

    // useEffect(() => {
    //     dispatch(spotActions.removeSpot(id));
    // }, [dispatch, id]);

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    if (!spot) history.push('/listings');

    let spotColor;
    if (spot) {
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
    } else {
        spotColor = 'maroon';
    }

    const handleClick = () => history.push(`/listing/${spot.id}`);

    return (
        // <div onClick={handleClick} className={`spot-profile ${spotColor}`}>
        <div className={`spot_page ${spotColor}`}>
            <div className='spot-profile-image' id={spotColor}>
                <SpotHeader spot={spot} />
                <div style={{ width: '75%' }} className="line" />
                {/* <Image spotId={spotId}/>
        <div style={{width:'75%'}} className="line"/> */}
                {/* <Review spotId={spotId} /> */}
                {/* <div className='filler-box' style={{backgroundColor:'white'}}/> */}
            </div>
        </div>
    );
}


const SpotHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector((state) => state.spots[id]);
    const sessionUser = useSelector(state => state?.session?.user);

    const handleDelete = async (e) => {
        e.preventDefault();
        const deletedSpot = await dispatch(spotActions.removeSpot(id))
            .then(() => history.push("/listings"));
    };

    return (
        <div className='spot_header row-list'>

            <div className='spot_header_left'>
                <h1>{spot?.title}</h1>
                <h3>{`${spot?.city}, ${spot?.state}`}</h3>

                <div style={{ width: '14em', margin: 0 }} className="line" />

                <NavLink to={`/listing/${id}`}>
                    <button className='btn-primary'>View Listing</button>
                </NavLink>
                {/* <DeleteSpot id={id} /> */}
                <button onClick={handleDelete}>Delete Spot</button>
            </div>

            <div className='spot_header_right'> {sessionUser?.id === spot?.id && (<>
                <spotFormModal name='Edit spot' edit={true} spot={spot} />
                <button onClick={handleDelete}>Delete Spot</button>
                {/* <DeleteSpot id={id} /> */}
            </>)}
            </div>
        </div>
    )
}

export default SpotProfile
