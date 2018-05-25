import axios from 'axios';
import { BASE_URL } from '../config';
import { DB_KEY } from '../credentials';
import { GET_USERS, UPDATE_USERS } from '../constants/users';


export const updateEvents = (users) => {
    return {
        type: UPDATE_USERS,
        users
    }
};

export const getUsers = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}users?apiKey=${DB_KEY}`)
        .then((response) => {
            console.log("response.data: ", response.data);
            // dispatch(updateEvents(response.data));
        })
        .catch((error) => console.log("error", error));
    }
};