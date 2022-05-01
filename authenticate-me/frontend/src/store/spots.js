import { csrfFetch } from './csrf';

export const CREATE_SPOT = 'spots/CREATE_SPOT';
export const GET_SPOT = 'spots/GET_SPOT';
export const EDIT_SPOT = 'spots/EDIT_SPOT';
export const DELETE_SPOT = 'spots/DELETE_SPOT';

const createSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        payload: spot,
    };
};

const getSpots = (spot) => {
    return {
        type: GET_SPOT,
        payload: spot,
    };
};

const editSpot = () => {
    return {
        type: EDIT_SPOT,
    };
};

const deleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId,
    };
};


export const createSpotAction = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot),
    });
    const data = await response.json();
    dispatch(createSpot(data.spot));
    return response;
};

export const fetchSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const data = await response.json();
        dispatch(getSpots(data));
        return response;
    }
};

export const updateSpot = (spot) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        body: JSON.stringify(spot),
    });
    const data = await response.json();
    dispatch(editSpot(data.spot));
    return response;
};

// export const fetchSpot = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${id}`);

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(getSpots(data));
//         return response;
//     }
// };

export const removeSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const { id: delSpotId } = await response.json();
        dispatch(deleteSpot(delSpotId));
        return delSpotId;
    };
};

const initialState = {};

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SPOT:
            newState = Object.assign({}, state);
            // newState = action.payload;
            action.payload.forEach(spot => {
                newState[spot.id] = spot;
            });
            return newState;
        case DELETE_SPOT:
            newState = { ...state };
            delete newState[action.spotId];
            return newState;
        case CREATE_SPOT:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_SPOT:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default spotReducer;
