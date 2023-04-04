import ServiceBanner from '../../common/ServiceBanner'
import Statistics from '../../common/Statistics'
import Agreements from '../../common/Agreements'
import ServicesList from '../../common/ServicesList'
import IATest from '../../common/IATest'
import bannerImage from '../../../assets/img/onlineguard.2e4071e4.webp'

const EmergencyCareOnline = () => (
    <>
        <ServiceBanner
            title="Guardia online"
            text="Con ÜMA accede a los mejores profesionales de la salud. Realiza teleconsultas de guardia,
            sin restricciones de horario, los 7 días de la semana, 365 días del año. Sin costos mensales, abona
            únicamente las consultas que necesitas."
            image={bannerImage}
        />
        <Statistics />
        <ServicesList />
        <IATest />
        <Agreements />
    </>
)

export default EmergencyCareOnline
