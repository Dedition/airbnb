import { csrfFetch } from './csrf';
// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action
// TODO ——————————————————————————————————————————————————————————————————————————————————
export const CREATE_REVIEW = 'review/CREATE_REVIEW';
export const GET_ALL_REVIEWS = 'review/GET_ALL_REVIEWS';
export const UPDATE_REVIEW = 'review/UPDATE_REVIEW';
export const DELETE_REVIEW = 'review/DELETE_REVIEW';
// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action Creators
// TODO ——————————————————————————————————————————————————————————————————————————————————
const createOneReview = (review, spotId) => ({ type: CREATE_REVIEW, review, spotId });
const getAllOneReviews = (reviews, id) => ({ type: GET_ALL_REVIEWS, reviews, id });
const updateOneReview = (review) => ({ type: UPDATE_REVIEW, review });
const deleteOneReview = (id) => ({ type: DELETE_REVIEW, id });
// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Thunks
// TODO ——————————————————————————————————————————————————————————————————————————————————
export const createReview = (review, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const review = await response.json();
        dispatch(createOneReview(review));
        return review;
    }
    return response;
};

export const getReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`);


    if (response.ok) {
        const reviews = await response.json();
        dispatch(getAllOneReviews(reviews, id));
        return reviews;
    }
    return response
}

export const updateReview = (review) => async (dispatch) => {
    console.log('=================', review);
    const response = await csrfFetch(`/api/spots/${review.reviewId}/reviews`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    });

    // console.log('=================', await response.json());
    if (response.ok) {
        console.log('IM HERE');
        const updatedReview = await response.json();
        dispatch(updateOneReview(updatedReview));
        return updatedReview;
    }
    return response;
}

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/reviews/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        dispatch(deleteOneReview(id));
        return id;
    }
    return response;
};

// ! Know what your data is - Typeof value
// ! Know where your data comes from - Where it is stored
// ! Know where your data is going
// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Reducer
// TODO ——————————————————————————————————————————————————————————————————————————————————
const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_REVIEW:
            newState = { ...state, [action.review.review.id]: action.review.review };
            return newState;
        case GET_ALL_REVIEWS:
            newState = { ...state };
            action.reviews.forEach(review => {
                newState[review.id] = review;
            });
            return newState;
        case UPDATE_REVIEW:
            // newState = { ...state }
            // You got rid of '.id' in the key
            newState = { ...state, [action.review.id]: action.review };
            return newState;
        case DELETE_REVIEW:
            newState = { ...state };
            delete newState[action?.id];
            return newState;
        default:
            return state;
    }
};

export default reviewReducer;
