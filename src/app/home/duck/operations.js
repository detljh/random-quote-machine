import Creators from './actions.js';

const requestNewQuoteAction = Creators.requestNewQuote;
const quotes = require('../../../quotes.json');

const generateQuote = () => {
    return dispatch => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        dispatch(requestNewQuoteAction(quote));
    };  
};

export default {
    generateQuote
};