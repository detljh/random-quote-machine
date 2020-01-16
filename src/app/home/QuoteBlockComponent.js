import React from 'react';
import './quote-block.scss';
import './themes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { render } from 'react-dom';

class QuoteBlockComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={`container-fluid ${this.props.theme}`}>
                <div class="row">
                <div id="quote-box" className="card mx-auto">
                    <div className="card-body">
                        <blockquote className="blockquote">
                            <p id="quote" className="text-center col-xs-10">
                                <FontAwesomeIcon icon={faQuoteLeft} id="quote-left" className="quote-icon"/>
                                {this.props.quote}
                                <FontAwesomeIcon icon={faQuoteRight} id="quote-right" className="quote-icon"/>
                            </p>
                            <br></br>
                            <footer id="author" className="blockquote-footer text-right">{this.props.author}</footer>
                        </blockquote>
                        
                        <div id="quote-box-footer">
                            <a href="www.twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={faTwitter}/></a>
                            <button id="new-quote" onClick={this.props.requestNewQuote}>New quote</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default QuoteBlockComponent;
