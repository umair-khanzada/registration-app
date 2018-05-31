import { FETCH_USERS } from '../constants/users';

const initialState = {
    users: [],
    loading: true
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        default:
            return state
    }
};

export default users;