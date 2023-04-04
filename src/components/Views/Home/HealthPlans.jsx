import Info from '../../common/Info'
import bannerImage from '../../../assets/img/wellness.webp'

const HealthPlans = () => (
    <section className="section">
        <div className="page-container">
            <h2 className="hidden md:block section-title">Oportunidades</h2>
            <Info
                title="Plan Bienestar"
                image={bannerImage}
                listTitle="El plan ideal para vos y tu familia"
                listItems={[
                    'Consultas de Guardia y Especialista',
                    'Podes usarlo con tu grupo familiar',
                    'Todo en un mismo lugar y en linea',
                    'Complementá con tu Obra Social o Prepaga'
                ]}
                buttonText="Conocer suscripción"
                titleSign="Primer mes gratis"
            />
        </div>
    </section>
)

export default HealthPlans
