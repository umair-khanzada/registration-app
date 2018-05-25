import axios from 'axios';
import { BASE_URL } from '../config';
import { DB_KEY } from '../credentials';
import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT, GET_EVENT } from '../constants/events';

export const addEvent = (event) => {
    return {
        type: ADD_EVENT,
        event
    }
};

export const removeEvent = (payload) => {
    return {
        type: REMOVE_EVENT,
        payload
    }
};

export const updateEvents = (events) => {
    return {
        type: UPDATE_EVENT,
        events
    }
};

export const getEvents = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}events?apiKey=${DB_KEY}`)
        .then((response) => {
            dispatch(updateEvents(response.data));
        })
        .catch((error) => console.log("error", error));
    }
};

export const createEvent = (data) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}events?apiKey=${DB_KEY}`, data)
        .then((response) => {
            dispatch(addEvent(response.data));
        })
        .catch((error) => console.log("error", error));
    }
};