import React from 'react';
import './quote-block.scss';

const QuoteBlockComponent = props => {
    return (
        <div id="quote-box">
            <p id="quote">"{props.quote}"</p>
            <p id="author">- {props.author}</p>

            <div id="quote-box-footer">
                <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
                <button id="new-quote" onClick={props.requestNewQuote}>New Quote</button>
            </div>
            
        </div>
    );
};

export default QuoteBlockComponent;
