import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CareCard = ({
    image,
    title,
    subtitle,
    isPremium = false
}) => (
    <article className="shadow-lg rounded-sm p-6 flex flex-col items-center gap-3">
        <img src={image} alt="Premium" className="h-36" />
        <p className="text-uma-green font-bold text-lg">{subtitle}</p>
        <h3 className="font-bold text-xl">{title}</h3>
        <Link to="/" className="btn dark w-1/2">Ver más</Link>
        {
            isPremium && (
                <p>Suscripción mensual</p>
            )
        }
    </article>
)

CareCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isPremium: PropTypes.bool
}

export default CareCard
