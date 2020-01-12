import Creators from './actions.js';

const requestNewQuoteAction = Creators.requestNewQuote;

const generateQuote = () => {
    return (dispatch, getState) => {
        const data = getState().home.data;
        const quote = data[Math.floor(Math.random() * data.length)];
        dispatch(requestNewQuoteAction(quote));
    };  
};

export default {
    generateQuote
};