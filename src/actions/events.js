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


export const getEvent = (payload) => {
    return {
        type: GET_EVENT,
        payload
    }
};