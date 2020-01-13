import React from 'react';
import './quote-block.scss';
import './themes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const QuoteBlockComponent = props => {
    return (
        <div id="quote-box" className={`card mx-auto ${props.theme}`}>
            <div className="card-body">
            
                <blockquote className="blockquote">
                
                    <p id="quote" className="text-center col-xs-10">
                    <FontAwesomeIcon icon={faQuoteLeft} id="quote-left" className="quote-icon"/>
                        {props.quote}
                        <FontAwesomeIcon icon={faQuoteRight} id="quote-right" className="quote-icon"/>
                    </p>
                    <br></br>
                    <footer id="author" className="blockquote-footer text-right">{props.author}</footer>
                </blockquote>
                
                <div id="quote-box-footer">
                    <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={faTwitter}/></a>
                    <button id="new-quote" onClick={props.requestNewQuote}>New quote</button>
                </div>
            </div>
        </div>
    );
};

export default QuoteBlockComponent;
