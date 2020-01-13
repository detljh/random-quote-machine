import types from './types.js';
import THEMES from '../themes.js';

const data = require('../../../quotes.json');
const quoteIndex = Math.floor(Math.random() * data.length);
const themeIndex = Math.floor(Math.random() * THEMES.length);

const INITIAL_STATE = {
    data: data,
    quoteIndex: quoteIndex,
    quote: data[quoteIndex],
    themes: THEMES,
    themeIndex: themeIndex,
    theme: THEMES[themeIndex]
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.NEW_QUOTE: 
            return Object.assign({}, state, {
                quote: action.quote,
                quoteIndex: action.quoteIndex,
                themeIndex: action.themeIndex,
                theme: action.theme
            });
        default:       
            return state;
    };
};

export default homeReducer;