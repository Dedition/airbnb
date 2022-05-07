import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReviewEdit from "./ReviewEdit";
import ReviewDelete from "./ReviewDelete";

const ReviewDetails = ({ review }) => {
    const [userOwns, setUserOwns] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        if (sessionUser) {
            if (sessionUser.id === review.userId) setUserOwns(true);
            else setUserOwns(false);
        }
    }, [sessionUser, review])

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][+review.createdAt.split('-')[1] - 1];
    const year = review.createdAt.split('-')[0];

    return (
        <div className="review-list">
            <div className="review-list-header">
                <div className="review-list-header-left">
                    <div>
                        <h3>{`${review?.User?.username}`}</h3>
                        <i className="far fa-user" />{`${month} ${year}`}
                        <div className="review-body">{review.content
                        }</div>
                    </div>
                </div>
                <div className="review-list-header-right">
                    {userOwns && (<>
                        <ReviewEdit review={review} />
                        <ReviewDelete review={review.id} />
                    </>)}
                </div>
            </div>
            <div style={{ width: '95%', margin: 0 }} className='line'></div>
            {userOwns && (<div style={{ width: '110px', margin: '10px' }} className='line'></div>)}
        </div>
    )
}

const ReviewList = ({ reviews }) => {

    return (
        <div className="review-list-container">
            {Array.from(reviews).map(review => (<ReviewDetails key={review.id} review={review} />))}
        </div>
    )
}

export default ReviewList;
