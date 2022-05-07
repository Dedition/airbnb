import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import ReviewList from "./ReviewList";
import { deleteReview } from "../../store/review";
import ReviewEdit from "./ReviewEdit";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                               Add modal form and CSS here
// TODO ——————————————————————————————————————————————————————————————————————————————————

// const Meter = ({ rating }) => <meter id="meter" min="0" max='5' value={rating} />

const ReviewInfo = ({ reviewInfo, totalReviews, reviews }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    //eslint-disable-next-line
    const [belongsToUser, setBelongsToUser] = useState(false);

    const spot = useSelector(state => state.spots[id]);
    console.log(spot)
    // console.log(reviewsObj)
    const sessionUser = useSelector(state => state.session.user);
    // console.log(user)
    let reviewsArr = Object.values(useSelector(state => state.reviews));
    reviewsArr = reviewsArr.filter((review) => review?.spotId === +id);
    // console.log('=====', reviewsArr[0]?.id);
    // console.log();

    const handleDelete = () => dispatch(deleteReview(reviewsArr[0]?.id));

    // console.log(reviewsArr)
    // useEffect(() => {
    //     if (sessionUser?.id === spot?.userId) setBelongsToUser(true);
    //     else setBelongsToUser(false);
    // }, [sessionUser, spot])

    return (
        <div className='review-info'>
            <div className='review-info-header'>
                <h2>Reviews</h2>
                <h3>{totalReviews}</h3>
            </div>
            <div className='review-info-body'>
                <ul>
                    {reviewsArr.map(review => (
                        <li key={review.id}>
                            <p>{review.content}</p>
                            <button onClick={handleDelete}>Delete</button>
                            <ReviewEdit review={review} />
                            <p>Cleanliness: {review.cleanliness}</p>
                            <p>Communication: {review.communication}</p>
                            <p>Overall Rating: {review.rating}</p>
                            <br></br>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='review-info-footer'>
                {!belongsToUser && sessionUser && (<ReviewModal reviews={reviews} />)}

            </div>
        </div>
    );
}





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

export default ReviewInfo;
