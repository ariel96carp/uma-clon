import InfoBanner from '../../common/InfoBanner'
import Benefits from './Benefits'
import EmergencyCare from './EmergencyCare'
import Services from './Services'
import HealthPlans from './HealthPlans'
import Agreements from '../../common/Agreements'
import HomeFAQ from './HomeFAQ'
import bannerImage from '../../../assets/img/Illustration-hero2.webp'

const Home = () => (
    <>
        <InfoBanner
            subtitle="UMA Salud"
            title="Tu Plataforma de Salud Digital"
            info={(
                <p className="text-lg">
                    Cuidá de vos y tu tiempo recibiendo atención médica online&nbsp;
                    <span className="font-semibold">
                        desde la comodidad de tu hogar de forma segura.
                    </span>
                </p>
            )}
            buttonText="Registrarme Gratis"
            image={bannerImage}
            bannerClassName="sm:bg-[url('/src/assets/img/backgroundHero.155395b3.webp')] bg-[url('/src/assets/img/mobile-hero.09d21f7c.webp')] sm:bg-center bg-bottom"
        />
        <Benefits />
        <EmergencyCare />
        <Services />
        <HealthPlans />
        <Agreements />
        <HomeFAQ />
    </>
)

export default Home
