import { Accordion } from 'react-accessible-accordion'
import PropTypes from 'prop-types'
import FAQItem from './FAQItem'

const FAQ = ({ items }) => (
    <Accordion
        allowMultipleExpanded
        allowZeroExpanded
        className="border-0"
    >
        {
            items.map(({ question, response }, index) => (
                <FAQItem
                    question={question}
                    response={response}
                    key={index}
                />
            ))
        }
    </Accordion>
)

FAQ.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            question: PropTypes.string.isRequired,
            response: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]).isRequired
        })
    ).isRequired
}

export default FAQ
