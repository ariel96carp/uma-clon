import ServiceBanner from '../../common/ServiceBanner'
import Statistics from '../../common/Statistics'
import Agreements from '../../common/Agreements'
import ServicesList from '../../common/ServicesList'
import IATest from '../../common/IATest'
import bannerImage from '../../../assets/img/diabetes-main.5401db7e.webp'

const CardiovascularRisk = () => (
    <>
        <ServiceBanner
            title="Cuidá tu corazón con sólo una selfie."
            text="El riesgo cardiovascular indica las posibilidades que tienes de sufrir alguna
            enfermedad cardíaca según tus antecedentes y hábitos de vida."
            buttonText="Calcular riesgo"
            image={bannerImage}
            bgClassName="bg-[url('src/assets/img/main-bg.cf298566.webp')] bg-no-repeat bg-contain bg-right"
            buttonClassName="cardiovascular-btn"
        />
        <Statistics />
        <ServicesList />
        <IATest />
        <Agreements />
    </>
)

export default CardiovascularRisk
