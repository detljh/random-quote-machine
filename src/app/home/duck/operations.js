import Creators from './actions.js';

const requestNewQuoteAction = Creators.requestNewQuote;

const generateQuote = () => {
    return (dispatch, getState) => {
        const state = getState().home;
        let index = Math.floor(Math.random() * (state.data.length - 1));
        if (index >= state.currentIndex) {
            index++;
        }
        
        const quote = state.data[index];
        dispatch(requestNewQuoteAction(quote, index));
    };  
};

export default {
    generateQuote
};