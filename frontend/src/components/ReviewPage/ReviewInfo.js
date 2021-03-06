import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import ReviewList from "./ReviewList";
import { deleteReview } from "../../store/review";
import ReviewEditModal from "./ReviewEditModal";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                               Add modal form and CSS here
// TODO ——————————————————————————————————————————————————————————————————————————————————


const ReviewInfo = ({ reviewInfo, totalReviews, reviews }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    //eslint-disable-next-line
    const [belongsToUser, setBelongsToUser] = useState(false);

    const sessionUser = useSelector(state => state?.session?.user);
    let reviewsArr = Object.values(useSelector(state => state.reviews));
    reviewsArr = reviewsArr.filter((review) => review?.spotId === +id);
    // console.log(sessionUser === undefined)
    const handleDelete = (idx) => {
     return () => dispatch(deleteReview(reviewsArr[idx]?.id));
    }

    let idx = 0;
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
                            {sessionUser?.id && (
                                <button onClick={handleDelete(idx++)}>Delete</button>)}
                            <ReviewEditModal review={review} />
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

export default ReviewInfo;
