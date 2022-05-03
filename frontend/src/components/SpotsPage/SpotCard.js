import { useHistory } from 'react-router-dom';

const SpotCard = ({ spot }) => {
    const history = useHistory();
    // console.log('==============', spot)
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
        <div className="card" style={{ backgroundColor: spotColor }} onClick={handleClick}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="48x48">
                            {/* <img src={spot.image} alt="Placeholder image" /> */}
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title">{spot.title}</p>
                        <p className="subtitle">{spot.address}</p>
                        <h3>${spot.price}</h3>
                    </div>
                </div>
                <div className="content">
                    {/* <p>{spot.description}</p> */}
                </div>
            </div>
        </div>
    )
};

export default SpotCard;

        // let propertyColor;
        // if (property.price > 0 && property.price <= 20) propertyColor = 'brown';
        // if (property.price > 20 && property.price <= 40) propertyColor = 'skyblue';
        // if (property.price > 40 && property.price <= 60) propertyColor = 'orchid';
        // if (property.price > 60 && property.price <= 80) propertyColor = 'orange';
        // if (property.price > 80 && property.price <= 100) propertyColor = 'red';
        // if (property.price > 100 && property.price <= 120) propertyColor = 'yellow';
        // if (property.price > 120 && property.price <= 150) propertyColor = 'green';
        // if (property.price > 150) propertyColor = 'blue';

        // const handleClick = () => history.push(`/properties/${property.id}`);

        // return (
        //     <div onClick={handleClick} className='property-card'>
        //         <div className='property-color-profile' id={propertyColor} />
        //         <h2 className='property-title'>{property.title}</h2>

        //         <img className='card-image' src={property.cardImage} alt='card' />

        //         <div className='property-footer-info row-list'>
        //             <div>{property.city}</div>
        //             <div><strong>${property.price}</strong> night</div>
        //         </div>
        //     </div>
        // )
