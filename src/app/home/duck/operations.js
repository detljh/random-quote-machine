import Creators from './actions.js';

const requestNewQuoteAction = Creators.requestNewQuote;

const generateQuote = () => {
    return (dispatch, getState) => {
        const state = getState().home;
        let quoteIndex = Math.floor(Math.random() * (state.data.length - 1));
        if (quoteIndex >= state.quoteIndex) {
            quoteIndex++;
        }
        
        const quote = state.data[quoteIndex];
        
        let themeIndex = Math.floor(Math.random() * (state.themes.length - 1));
        if (themeIndex >= state.themeIndex) {
            themeIndex++;
        }
        
        const theme = state.themes[themeIndex];
        dispatch(requestNewQuoteAction(quote, quoteIndex, theme, themeIndex));
    };  
};

export default {
    generateQuote
};