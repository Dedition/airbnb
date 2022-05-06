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
export const createReview = (review, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
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
    return response;
}

export const updateReview = (review) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${review.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    });

    if (response.ok) {
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
// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Reducer
// TODO ——————————————————————————————————————————————————————————————————————————————————
const initalState = {};

const reviewReducer = (state = initalState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_REVIEW:
            // console.log('==================', action.reviews);
            newState = { ...state, [action.review.id]: action.review };
            return newState;
        case GET_ALL_REVIEWS:
            // console.log('==================', action.reviews);
            // newState = { ...state, [action.review.id]: action.reviews };
            newState = { ...state, ...action.reviews.reviews };
            // newState = { ...state, [action.spotId]: action.reviews };
            return newState;
        case UPDATE_REVIEW:
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
