import NEW_QUOTE from './types.js';

const data = require('../../../quotes.json');

const INITIAL_STATE = {
    data: data,
    quote: ''
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_QUOTE: 
            return {
                data: data,
                quote: action.quote
            };
        default:        
            return state;
    };
};

export default homeReducer;