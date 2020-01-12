import types from './types.js';

const requestNewQuote = (quoteObject) => ({
    type: types.NEW_QUOTE,
    quote: quoteObject
});

export default { 
    requestNewQuote 
};