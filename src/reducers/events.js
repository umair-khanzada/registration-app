import { ADD_EVENT, GET_EVENT } from '../constants/events';

const events = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case ADD_EVENT :
            return  [...state, action.payload];
        case GET_EVENT :
        return action.events;
        default:
            return state
    }
};

export default events;