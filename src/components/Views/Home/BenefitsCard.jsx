import Proptypes from 'prop-types'

const BenefitsCard = ({ image, text }) => (
    <article className="p-2 flex flex-col gap-3 items-center font-semibold text-lg text-center">
        <img src={image} alt="Chat" className="h-20 mb-5" />
        <p>{text}</p>
    </article>
)

BenefitsCard.propTypes = {
    image: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired
}

export default BenefitsCard
