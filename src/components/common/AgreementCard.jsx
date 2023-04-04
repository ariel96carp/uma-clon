import PropTypes from 'prop-types'

const AgreementCard = ({ image, altText }) => (
    <article className="flex items-center justify-center h-full">
        <img src={image} alt={altText} className="w-[70%]" />
    </article>
)

AgreementCard.propTypes = {
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
}

export default AgreementCard
