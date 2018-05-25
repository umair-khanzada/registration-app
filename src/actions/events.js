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
            console.log("response", response);
            dispatch(updateEvents(response.data));
        })
        .catch((error) => console.log("error", error));
    }
};

export const createEvent = (data) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}events?apiKey=${DB_KEY}`, 
    {
        name:"React event",
description:"Just for fun.",
attendees:[1, 2],
startDate:"5/16/2018, 4:53:28 PM",
endDate:"5/18/2018, 4:53:28 PM",
venue:"Karachi",
organizers:[1],
trainers:[1, 2],
tags:["React", "JSX", "ES6"],
invites:["ukhanzada@nisum.com"]
    })
        .then((response) => {
            console.log("addEvent response", response);
            dispatch(addEvent(response.data));
        })
        .catch((error) => console.log("error", error));
    }
};