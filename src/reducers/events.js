import { ADD_EVENT, FETCH_EVENT, EVENT_LOADING } from '../constants/events';

const initialState = {
    events: [],
    loading: true
};

const events = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.event]
            };
        case FETCH_EVENT:
            return {
                ...state,
                loading: false,
                events: [...state.events, ...action.events]
            };
        case EVENT_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state
    }
};

export default events;