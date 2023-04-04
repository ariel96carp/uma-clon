import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'
import PropTypes from 'prop-types'

const FAQItem = ({ question, response }) => (
    <AccordionItem className="border-b-0">
        <AccordionItemHeading className="shadow-md">
            <AccordionItemButton className="accordion-button">
                {question}
                <svg
                    viewBox="0 0 12 8"
                    width="16"
                    height="16"
                >
                    <path
                        d="M10.293 0.292969L6.00003 4.58597L1.70703 0.292969L0.29303 1.70697L6.00003 7.41397L11.707 1.70697L10.293 0.292969Z"
                        fill="currentColor"
                    />
                </svg>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="py-4 px-6 md:py-6 md:px-8">
            {
                typeof (response) === 'string' ? (
                    <p>{response}</p>
                ) : (
                    { ...response }
                )
            }
        </AccordionItemPanel>
    </AccordionItem>
)

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    response: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired
}

export default FAQItem
