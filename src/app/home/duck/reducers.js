import types from './types.js';

const data = require('../../../quotes.json');
const initialIndex = Math.floor(Math.random() * data.length);
const INITIAL_STATE = {
    data: data,
    currentIndex: initialIndex,
    quote: data[initialIndex],
    
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.NEW_QUOTE: 
            return Object.assign({}, state, {
                quote: action.quote,
                currentIndex: action.currentIndex
            });
        default:       
            return state;
    };
};

export default homeReducer;