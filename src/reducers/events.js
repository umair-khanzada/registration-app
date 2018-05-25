import { ADD_EVENT, UPDATE_EVENT } from '../constants/events';

const initialState = {
    events: [],
    loading: true,
    loaded: false
}

const events = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.event]
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events, ...action.events],
                loaded: true
            };
        default:
            return state
    }
};

export default events;