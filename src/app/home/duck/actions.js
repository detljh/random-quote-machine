import types from './types.js';

const requestNewQuote = (quoteObject, index) => ({
    type: types.NEW_QUOTE,
    quote: quoteObject,
    currentIndex: index
});

export default { 
    requestNewQuote 
};