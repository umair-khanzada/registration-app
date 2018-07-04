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
                sendEmail([...data.invites, ...data.externalInvites].join(), 'You are invited to our event.', inviteTemplate(data.name));
                history.push('/');
            })
            .catch((error) => console.log("error", error));
    }
};

function sendEmail(to, subject, html){
  axios.post(`https://event-registration-app.herokuapp.com/email/`, {to, subject, html})
    .then((response) => {
      console.log("email response", response)
    })
    .catch((error) => console.log("error", error));
}

function inviteTemplate(name){
    return `
        <body style="margin: 0; font-family: cursive;">
            <header style="padding: 10px; background: #72d6ba; color: #fff; text-align: center;">
                <h3>You are invited to our event.</h3>
            </header>
            <section style="text-align: center;">
                <h4>${name}</h4>
            </section>
            <footer style="    padding: 5px 10px; background: #72d6ba; text-align: center; color: #fff; margin-top: 50px;">
                <p>To attend this event you need to Login OR Signup <a href="https://event-registration-app.herokuapp.com/" target="_blank">here</a></p>
            </footer>
        </body>
    `
}