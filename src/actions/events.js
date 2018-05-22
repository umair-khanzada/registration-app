import axios from 'axios';
import { BASE_URL } from '../config';
import { DB_KEY } from '../credentials';
import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT, GET_EVENT } from '../constants/events';

export const addEvent = (payload) => {
    return {
        type: ADD_EVENT,
        payload
    }
};

export const removeEvent = (payload) => {
    return {
        type: REMOVE_EVENT,
        payload
    }
};

export const updateEvent = (payload) => {
    return {
        type: UPDATE_EVENT,
        payload
    }
};

const replaceEvent = (events) => ({
    type: GET_EVENT,
    events
})

export const getEvent = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}events?apiKey=${DB_KEY}`)
        .then((response) => {
            console.log("response", response);
            dispatch(replaceEvent(response.data));
        })
        .catch((error) => console.log("error", error));
    }
};