import BenefitsCard from './BenefitsCard'
import chatImage from '../../../assets/img/grupo-de-chat.21f1193f.svg'
import checkListImage from '../../../assets/img/checklist.5dd10206.svg'
import telephoneImage from '../../../assets/img/telefono-inteligente.08de8f97.svg'

const Benefits = () => (
    <section className="section">
        <div className="page-container">
            <h2 className="section-title">
                Cuidá de tu salud desde tu lugar
            </h2>
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5 section-container">
                <BenefitsCard
                    image={chatImage}
                    text="Planes pensados para vos"
                />
                <BenefitsCard
                    image={checkListImage}
                    text="Más de 20 especialidades disponibles"
                />
                <BenefitsCard
                    image={telephoneImage}
                    text="Atención 24 hs desde el mismo lugar y sin intermediarios"
                />
            </div>
        </div>
    </section>
)

export default Benefits
