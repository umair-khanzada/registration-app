import axios from 'axios';
import moment from 'moment';
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
                let subject = `You are cordially invited to session on "${data.name}"`;
                sendEmail([...data.invites, ...data.externalInvites].join(), subject, inviteTemplate(data));
                dispatch(addEvent(response.data));
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

function inviteTemplate({name, startDate, venue, description, startTime, endTime}){
    return `
        <body style="margin: 0; font-family: cursive;">
            <header style="padding: 5px 10px; background: #0067B8; color: #fff; text-align: center; font-size: 20px;">
                <h2 style="margin: 0">You are invited to our event </h2>
                <h1 style="margin: 0; color: #e74c3c">${name}</h1>
                <h2 style="margin: 0">Which will be on ${moment(startDate).format('dddd, Do MMM YYYY')}</h2>
                <h2 style="margin: 0">${startTime} - ${endTime}</h2>
                <h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png" alt="#" style="width: 70px; vertical-align: middle;">
                    ${venue}
                </h2>
            </header>
            <section style="margin: 0 auto; padding: 50px 0; background: #91baf9;">
                <p style="text-align: center; width: 50%; margin: 0 auto; font-size: 20px">${description}</p>
            </section>
            <footer style="padding: 5px 10px; background: #0067B8; text-align: center; color: #fff;">
                <h2>To attend this event you need to Login OR Sign Up <a href="https://event-registration-app.herokuapp.com/" target="_blank" style="color: yellow;">here</a></h2>
            </footer>
        </body>
    `
}