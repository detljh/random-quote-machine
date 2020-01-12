import React from 'react';

const QuoteBlockComponent = props => {
    return (
        <div>
            <p>{props.quote}</p>
            <p>{props.author}</p>
            <button onClick={props.requestNewQuote}>New Quote</button>
        </div>
    );
};

export default QuoteBlockComponent;
