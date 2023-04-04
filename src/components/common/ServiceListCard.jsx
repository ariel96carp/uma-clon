import PropTypes from 'prop-types'

const ServiceListCard = ({
    image,
    service,
    description,
    isFree = false
}) => (
    <article className="shadow-lg rounded-md px-4 md:px-6 py-8 md:py-10">
        <img src={image} alt="Servicio" className="w-[25%] max-w-[100px] mx-auto mb-4" />
        <h3 className="text-center text-uma-blue font-bold text-lg mb-4">{service}</h3>
        <p className="mb-4">{description}</p>
        {
            isFree && (
                <p className="font-semibold text-[#48bb78] mt-auto">¡Es gratuito!</p>
            )
        }
    </article>
)

ServiceListCard.propTypes = {
    image: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFree: PropTypes.bool
}

export default ServiceListCard
