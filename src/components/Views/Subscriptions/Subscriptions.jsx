import Agreements from '../../common/Agreements'
import ServiceBanner from '../../common/ServiceBanner'
import Statistics from '../../common/Statistics'
import ServicesList from '../../common/ServicesList'
import Features from './Features'
import bannerImage from '../../../assets/img/illustration-specialist.c10b71b7.webp'

const Subscriptions = () => (
    <>
        <ServiceBanner
            title="Suscripciones digitales de salud"
            text="Paga mensualmente precios accesibles para cuidar de tu salud."
            buttonText="Ver suscripciones"
            image={bannerImage}
            subText={(
                <p className="text-pink-500 font-bold text-lg">Turnos desde $1800.</p>
            )}
        />
        <Features />
        <Statistics />
        <ServicesList />
        <Agreements />
    </>
)

export default Subscriptions
