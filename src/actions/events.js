import axios from 'axios';
import { BASE_URL } from '../config';
import { DB_KEY } from '../credentials';
import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT, FETCH_EVENT, EVENT_LOADING } from '../constants/events';
import history from '../history';

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

const fetchEvents = (events) => {
    return {
        type: FETCH_EVENT,
        events
    }
};

const eventLoading = (loading) => {
    return {
        type: EVENT_LOADING,
        loading
    }
};

export const getEvents = () => {
    return (dispatch) => {
        dispatch(eventLoading(true));
        axios.get(`${BASE_URL}events?apiKey=${DB_KEY}`)
            .then((response) => {
                dispatch(fetchEvents(response.data));
            })
            .catch((error) => console.log("error", error));
    }
};

export const createEvent = (data) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}events?apiKey=${DB_KEY}`, data)
            .then((response) => {
                dispatch(addEvent(response.data));
                sendEmail(data.invites.join(), 'You are invited to our event.', data.name);
                history.push('/');
            })
            .catch((error) => console.log("error", error));
    }
};

function sendEmail(to, subject, text){
  axios.post(`https://event-registration-app.herokuapp.com/email/`, {to, subject, text})
    .then((response) => {
      console.log("email response", response)
    })
    .catch((error) => console.log("error", error));
}