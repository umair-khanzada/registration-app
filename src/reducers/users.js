import { UPDATE_USERS } from '../constants/users';

const initialState = {
    users: [],
    loading: true
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state,
                events: [...state.users, ...action.users]
            };
        default:
            return state
    }
};

export default users;