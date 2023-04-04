import PropTypes from 'prop-types'

const BenefitsCard = ({ imageSvg, title, description }) => (
    <article className="rounded-md shadow-md px-6 py-8 md:py-12 h-64 md:h-72 text-center">
        {imageSvg}
        <h3 className="mb-3 font-bold text-2xl">{title}</h3>
        {
            typeof (description) === 'string' ? (
                <p>{description}</p>
            ) : (
                { ...description }
            )
        }
    </article>
)

BenefitsCard.propTypes = {
    imageSvg: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired
}

export default BenefitsCard
