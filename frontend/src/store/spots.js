import { csrfFetch } from './csrf';

export const CREATE_SPOT = 'spots/CREATE_SPOT';
export const GET_SPOT = 'spots/GET_SPOT';
export const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';
export const GET_ALL_SPOTS_BY_USER_ID = 'spots/GET_ALL_SPOTS_BY_USER_ID';
export const EDIT_SPOT = 'spots/EDIT_SPOT';
export const DELETE_SPOT = 'spots/DELETE_SPOT';

const createSpot = (spot) => ({ type: CREATE_SPOT, payload: spot });
const getSpots = (spot) => ({ type: GET_SPOT, payload: spot });
const getOnlyOne = (spot) => ({ type: GET_ONE_SPOT, payload: spot });
const getAllSpotsByUserId = (spots, userId) => ({ type: GET_ALL_SPOTS_BY_USER_ID, payload: spots, userId });
const editSpot = (spot) => ({ type: EDIT_SPOT, payload: spot });
const deleteSpot = (spotId) => ({ type: DELETE_SPOT, spotId });
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const createSpotAction = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });
    if (response.ok) {

        const { newSpot } = await response.json();
        dispatch(createSpot(newSpot));
        return newSpot;
    }
    throw new Error('Something went wrong!');
};

export const fetchSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots', { method: 'GET' });

    if (response.ok) {
        const data = await response.json();
        dispatch(getSpots(data));
        return data;
    }
    return response;
};

export const getSpotsByUserId = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/spots`, { method: 'GET' });

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllSpotsByUserId(data, userId));
        return data;
    }
    return response;
};

export const getOneSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, { method: 'GET' });

    if (response.ok) {
        const data = await response.json();
        dispatch(getOnlyOne(data));
        return data;
    }
    return response;
};

export const updateSpot = (spot, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });
    if (response.ok) {
        const updatedSpot = await response.json();
        dispatch(editSpot(updatedSpot));
        return updatedSpot;
    }
    return response;
};

export const removeSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, { method: 'DELETE' });

    if (response.ok) {
        dispatch(deleteSpot(id))
        return id;
    }
    return response;
};

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = {};

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_SPOT: {
            newState = { ...state, [action.payload.id]: action.payload };
            return newState;
        }
        case GET_SPOT:
            newState = {};
            action.payload.spots.forEach(spot => newState[spot.id] = spot)
            return newState;
        case GET_ALL_SPOTS_BY_USER_ID:
            newState = {};
            action.payload.spots.forEach(spot => newState[spot.id] = spot)
            return newState;
        case GET_ONE_SPOT:
            newState = { ...state, [action.payload.id]: action.spot };
            return newState;
        case EDIT_SPOT:
            newState = { ...state };
            newState[action.payload.spot.id] = action.payload.spot;
            console.log(action.payload.spot.id)
            return newState
        case DELETE_SPOT:
            newState = { ...state };
            delete newState[action.spotId];
            return newState;
        default:
            return state;
    }
};
export default spotReducer;

// After completing the reducer and exporting it, your next step should be to create a new component.
