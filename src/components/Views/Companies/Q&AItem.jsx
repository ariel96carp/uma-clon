import PropTypes from 'prop-types'

const FeatureItem = ({ bgImageClassName, text, title }) => (
    <li className={`list-item-image question-answers ${bgImageClassName}`}>
        <div className="pb-5 pl-6 border-b">
            <h3 className="uppercase mb-3">{title}</h3>
            <p>{text}</p>
        </div>
    </li>
)

FeatureItem.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bgImageClassName: PropTypes.string.isRequired
}

export default FeatureItem
