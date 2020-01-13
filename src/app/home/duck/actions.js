import types from './types.js';

const requestNewQuote = (quoteObject, quoteIndex, theme, themeIndex) => ({
    type: types.NEW_QUOTE,
    quote: quoteObject,
    quoteIndex: quoteIndex,
    theme: theme,
    themeIndex: themeIndex
});

export default { 
    requestNewQuote
};