//Form error configuration.
export const REQUIRED = (value) => !!value;
export const ARRAY_LENGTH = (value) => value && value.length;
export const MIN_LENGTH = (value) => value && value.length >= 100;

export const REQUIRED_MESSAGE = { REQUIRED: 'This field is required.' };
export const MIN_LENGTH_MESSAGE = { MIN_LENGTH: 'Put at least 100 character in this field.' };

export const TOUCH_AND_NOT_FOCUS = {touched: true, focus: false};