import InfoBanner from '../../common/InfoBanner'
import Services from './Services'
import QuestionsAndAnswers from './Q&AOnline'
import DemoBanner from './DemoBanner'
import companiesImage from '../../../assets/img/companies-main.webp'

const Companies = () => (
    <>
        <InfoBanner
            subtitle="MEDICINA LABORAL"
            title="Servicio de Calidad a Bajo Costo"
            info={(
                <p className="text-lg font-semibold">
                    Atención médica 24hs, con un equipo médico altamente calificado y un
                    servicio de excelencia validado por la experiencia de nuestras personas
                    usuarias.
                </p>
            )}
            buttonText="Solicitar Demo"
            image={companiesImage}
            route="/empresas"
            bannerClassName="!pb-0"
        />
        <Services />
        <QuestionsAndAnswers />
        <DemoBanner />
    </>
)

export default Companies
