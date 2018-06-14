//Form error configuration.
const REQUIRED = (value) => !!value;
const ARRAY_LENGTH = (value) => value && value.length;
const MIN_LENGTH = (value) => value && value.length >= 100;

const REQUIRED_MESSAGE = { REQUIRED: 'This field is required.' };
const MIN_LENGTH_MESSAGE = { MIN_LENGTH: 'Put at least 100 character in this field.' };
const TOUCH_AND_NOT_FOCUS = {touched: true, focus: false};


//Helper functions.
const GET_DETAIL = (src = [], filterBy, key) => src.filter(obj => filterBy.includes(obj[key]));


export {
  REQUIRED,
  ARRAY_LENGTH,
  MIN_LENGTH,
  REQUIRED_MESSAGE,
  MIN_LENGTH_MESSAGE,
  TOUCH_AND_NOT_FOCUS,
  GET_DETAIL
}