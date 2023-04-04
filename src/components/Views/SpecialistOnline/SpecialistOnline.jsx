import ServiceBanner from '../../common/ServiceBanner'
import Statistics from '../../common/Statistics'
import Agreements from '../../common/Agreements'
import ServicesList from '../../common/ServicesList'
import IATest from '../../common/IATest'
import bannerImage from '../../../assets/img/illustration-specialist.c10b71b7.webp'

const SpecialistOnline = () => (
    <>
        <ServiceBanner
            title="Especialistas en línea"
            text="Los mejores especialistas de nuestra cartilla a solo un click de distancia. Acceda a
            las agendas disponibles de los profesionales, seleccione una fecha acorde a sus necesidades
            ¡y listo!"
            subText={(
                <p className="text-pink-500 font-bold text-lg">Turnos desde $1800.</p>
            )}
            image={bannerImage}
        />
        <Statistics />
        <ServicesList />
        <IATest />
        <Agreements />
    </>
)

export default SpecialistOnline
