import { ADD_EVENT, GET_EVENT } from '../constants/events';

const initialState = {
    events: [],
    loading: true
}

const events = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events:  [...state.events, action.event]
            };
        case GET_EVENT:
        return {
            ...state,
            events:  [...state.events, ...action.events]
        };
        default:
            return state
    }
};

export default events;