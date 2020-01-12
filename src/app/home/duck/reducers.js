import types from './types.js';

const data = require('../../../quotes.json');
const INITIAL_STATE = {
    quote: data[0]
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.NEW_QUOTE: 
            return {
                quote: action.quote
            };
        default:       
            return state;
    };
};

export default homeReducer;