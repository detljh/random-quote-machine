import QuoteBlockComponent from './QuoteBlockComponent';
import { connect } from 'react-redux';
import { homeOperations } from './duck';

const mapStateToProps = state => {
    return {
        quote: state.quote,
        author: state.author
    }
};

const mapDispatchToProps = dispatch => {
    return {
        requestNewQuote: () => {
            dispatch(homeOperations.generateQuote());
        }
    };
};

const QuoteBlockContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteBlockComponent);

export default QuoteBlockContainer;