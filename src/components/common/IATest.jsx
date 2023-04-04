import Info from './Info'
import infoImage from '../../assets/img/mockupcardio.webp'

const IATest = () => (
    <section className="section">
        <div className="page-container">
            <Info
                title="Test de Riesgo Cardiovascular"
                image={infoImage}
                listTitle="La Inteligencia Artificial al servicio de la salud"
                listItems={[
                    'Responde algunas preguntas sobre tus antecedentes y hábitos de vida.',
                    'Tomate una fotografía para evaluar tus signos faciales, según nuestra base de datos.',
                    '¡Listo! Conoce tu resultado y algunos consejos para mejorar tu salud o mantenerte saludable.'
                ]}
                buttonText="Calcular riesgo"
                titleSign="¡100% gratuito!"
                altVersion
            />
        </div>
    </section>
)

export default IATest
