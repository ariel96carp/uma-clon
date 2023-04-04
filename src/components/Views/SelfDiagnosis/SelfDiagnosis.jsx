import ServiceBanner from '../../common/ServiceBanner'
import Statistics from '../../common/Statistics'
import Agreements from '../../common/Agreements'
import ServicesList from '../../common/ServicesList'
import IATest from '../../common/IATest'
import bannerImage from '../../../assets/img/autonomous.c228d560.webp'

const SelfDiagnosis = () => (
    <>
        <ServiceBanner
            title="Diagnóstico asistido"
            text="Obtén un diagnóstico presuntivo sobre tu estado de salud de forma rápida y sencilla.
            Sólo responde algunas preguntas y nuestro algoritmo basado en inteligencia artificial te
            ayudará a descubrir que tienes."
            image={bannerImage}
            buttonText="Quiero probarlo"
            subText={(
                <p className="font-bold text-lg">¡Fácil, rápido y gratuito!</p>
            )}
        />
        <Statistics />
        <ServicesList />
        <IATest />
        <Agreements />
    </>
)

export default SelfDiagnosis
