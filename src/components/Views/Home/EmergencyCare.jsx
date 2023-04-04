import CareCard from './CareCard'
import premiumImage from '../../../assets/img/Madre_hijo.webp'
import currentImage from '../../../assets/img/myspecialist.webp'

const EmergencyCare = () => (
    <section className="section">
        <div className="page-container">
            <h2 className="section-title mb-5">Conocé nuestra Guardia Online</h2>
            <ul className="font-semibold flex flex-col gap-3 mb-8">
                <li className="list-item-image check">Atención en línea por videollamada o chat</li>
                <li className="list-item-image check">Desde la comodidad de tu hogar</li>
                <li className="list-item-image check">Atención en menos de 15 minutos</li>
                <li className="list-item-image check">Recetas digitales</li>
                <li className="list-item-image check">Médicos las 24 horas</li>
            </ul>
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-fr gap-6 md:w-[90%] lg:w-[70%] mx-auto">
                <CareCard
                    image={premiumImage}
                    title="Guardia Premium"
                    subtitle="5 consultas por mes"
                    isPremium
                />
                <CareCard
                    image={currentImage}
                    title="Consultas Guardia Online"
                    subtitle="Atención 24/7"
                />
            </div>
        </div>
    </section>
)

export default EmergencyCare
