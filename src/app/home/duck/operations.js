import Creators from './actions.js';
import store from '../../../store.js';

const requestNewQuote = Creators.requestNewQuote;
const quotes = store.getState().data;

const generateQuote = () => {
    return dispatch => {
        const quote = quotes[Math.round(Math.random() * quotes.length)];
        dispatch(requestNewQuote(quote));
    };  
};

export default {
    generateQuote
};