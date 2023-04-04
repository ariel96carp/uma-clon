import PropTypes from 'prop-types'

const ServiceCard = ({ image, service, name }) => (
    <div className="rounded-md p-2 flex flex-col items-center gap-1 bg-white text-center h-full">
        <img src={image} alt="Psychology" className="h-40" />
        <p className="mt-auto">{name}</p>
        <p className="text-uma-blue font-bold">{service}</p>
    </div>
)

ServiceCard.propTypes = {
    image: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default ServiceCard
