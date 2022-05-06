import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewModal from "./ReviewModal";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                               Add modal form and CSS here
// TODO ——————————————————————————————————————————————————————————————————————————————————

const Meter = ({ rating }) => <meter value={rating} min={0} max={5} />

const ReviewInfo = ({ reviewInfo, totalReviews, reviews }) => {

    const { id } = useParams();
    //eslint-disable-next-line
    const [userReview, setUserReview] = useState(false);

    const spot = useSelector(state => state);
    console.log(spot)
    const user = useSelector(state => state.session.user);
    console.log(user)

    useEffect(() => {
        if (user) setUserReview(true);
        else setUserReview(false);
    }, [user, spot])

    const ReviewInfoLine = ({ data }) => (
        <div className='review-meter' >
            <strong>{`${data.name}:`}</strong>
            {!data.value ? <div>WHY IS THERE NO REVIEWS?!</div> :
                <>
                    <Meter rating={data.value} />
                    <strong>{data.value}</strong>
                </>
            }
        </div>
    );

    // return (
    //     <div className='review_heading'>
    //         {!reviewInfo?.value ? <div>STILL NO REVIEWS???</div> :
    //             <h2><i className="review-star fas fa-star" />{`${reviewInfo?.value} • ${totalReviews} reviews`} </h2>
    //         }
    //         <div className='review-meter-container'>
    //             {Object.values(reviewInfo).map(data => (<ReviewInfoLine key={data.name} data={data} />))}
    //         </div>
    //         {!user && (<ReviewModal reviews={reviews} />)}
    //     </div>
    // )
}

export default ReviewInfo;
