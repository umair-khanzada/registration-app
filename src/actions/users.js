import axios from 'axios';
import { BASE_URL } from '../config';
import { DB_KEY } from '../credentials';
import { FETCH_USERS, UPDATE_USERS } from '../constants/users';


export const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        users
    }
};

export const getUsers = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}users?apiKey=${DB_KEY}`)
        .then((response) => {
            const {data} = response,
              user = data.find(obj => obj.email === JSON.parse(localStorage.getItem('user')).email);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(fetchUsers(data));
        })
        .catch((error) => console.log("error", error));
    }
};