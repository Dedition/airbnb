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
        const data = await response.json();
        // console.log('============', data);
        dispatch(createSpot(data));
        return data;
    }
    return response;
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
        body: spot
    });
    if (response.ok) {
        const updatedSpot = await response.json();
        dispatch(editSpot(updatedSpot));
        return updatedSpot;
    }
    return response;
};
// method: 'PUT',
// body: JSON.stringify(spot),

// export const fetchSpot = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${id}`);

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(getSpots(data));
//         return response;
//     }
// };

export const removeSpot = (id) => async (dispatch) => {
    // console.log(id);
    const response = await csrfFetch(`/api/spots/${id}`, { method: 'DELETE' });
    // console.log(response);

    if (response.ok) {
        const spotId = await response.json();
        dispatch(deleteSpot(spotId));
        return spotId;
    }
    return response;
};

// const { id: delSpotId } = await response.json();
// dispatch(deleteSpot(delSpotId, userId));
// return delSpotId;
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfSpots: [] };

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_SPOT: {
            newState = { ...state, listOfSpots: [...state.listOfSpots] };
            newState.listOfSpots.unshift(action.spot);
            return newState;
        }
        case GET_SPOT:
        case GET_ALL_SPOTS_BY_USER_ID: {
            newState = { ...state };
            const spots = [];
            // console.log('action.payload', action.payload);

            action.payload.forEach(spot => spots.push(spot));
            newState.listOfSpots = spots;
            return newState;
        };
        case GET_ONE_SPOT:
            newState = { ...state, [action.payload.id]: action.spot };
            return newState;
        case EDIT_SPOT: {
            newState = { ...state };
            const editedSpot = state.listOfSpots.map(spot => spot.id === action.payload.id ? spot = action.payload : spot);
            newState.listOfSpots = editedSpot;
            return newState;
        };
        case DELETE_SPOT:
            newState = { ...state };
            delete newState[action.payload.id];
            // const deletedSpot = state.listOfSpots.filter(spot => spot.id !== action.spotId);
            // newState.listOfSpots = deletedSpot;
            return newState;
        default:
            return state;
    }
};
export default spotReducer;

    //     case GET_SPOT:
    //         // newState = Object.assign({}, state);
    //         // newState = action.payload;
    //         // newState = Object.assign({}, state);
    //         // action.payload.forEach(spot => {
    //         //     newState[spot.id] = spot;
    //         // });

    //         return newState;
    //     case DELETE_SPOT:
    //         newState = { ...state };
    //         delete newState[action.spotId];
    //         return newState;
    //     case CREATE_SPOT:
    //         // console.log(action.payload);
    //         // console.log(state);
    //         // newState = action.payload;
    //         // newState = { ...state, ...newState };
    //         // newState = Object.assign(...state, action.payload)
    //         // newState[action.payload.id] = action.payload;
    //         // newState = Object.assign({}, state);
    //         // newState = action.payload;
    //         // return newState;
    //         newState = { ...state };
    //         newState[action.payload.id] = action.payload;
    //         return newState;
    //     case EDIT_SPOT:
    //         newState = { ...state };
    //         newState[action.payload.id] = action.payload;
    //         return newState;
    //     default:
    //         return state;
    // }

// After completing the reducer and exporting it, your next step should be to create a new component.
