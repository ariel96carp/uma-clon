import PropTypes from 'prop-types'

const CultureCard = ({ svgImage, title, text }) => (
    <article className="p-6 shadow-md rounded-md text-lg">
        {svgImage}
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{text}</p>
    </article>
)

CultureCard.propTypes = {
    svgImage: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CultureCard
