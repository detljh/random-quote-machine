import types from './types.js';

const data = require('../../../quotes.json');
const INITIAL_STATE = {
    data: data,
    quote: data[Math.floor(Math.random() * data.length)],
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.NEW_QUOTE: 
            return Object.assign({}, state, {
                quote: action.quote
            });
        default:       
            return state;
    };
};

export default homeReducer;