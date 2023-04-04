import ServiceListCard from './ServiceListCard'
import cardImage from '../../assets/img/icon1.webp'
import cardImage2 from '../../assets/img/icon2.webp'
import cardImage3 from '../../assets/img/icon6.webp'
import cardImage4 from '../../assets/img/icon3.webp'
import cardImage5 from '../../assets/img/icon4.webp'
import cardImage6 from '../../assets/img/icon5.webp'

const ServicesList = () => (
    <section className="section">
        <div className="page-container">
            <h3
                className="text-center text-uma-blue uppercase text-lg mb-3"
            >
                ¿Qué hacemos en Üma?
            </h3>
            <h2
                className="text-center text-uma-blue-dark font-bold text-4xl md:text-5xl mb-10"
            >
                Nuestros servicios
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-x-16 gap-y-8 section-container">
                <ServiceListCard
                    service="Diagnóstico asistido"
                    description="Identifique posibles patologías mediante un algoritmo predictivo."
                    image={cardImage}
                    isFree
                />
                <ServiceListCard
                    service="Mi especialista"
                    description="Atiendase con los mejores especialistas sin largas esperas y desde
                    la comodidad de su casa."
                    image={cardImage2}
                />
                <ServiceListCard
                    service="Medicina laboral"
                    description="Profesionales habilitados para justificar ausencias laborales por
                    enfermedad."
                    image={cardImage3}
                />
                <ServiceListCard
                    service="Seguimiento COVID"
                    description="Realice un seguimiento de sus síntomas por COVID durante diez días."
                    image={cardImage4}
                />
                <ServiceListCard
                    service="Pastillero virtual"
                    description="Notificaciones diarias para que nunca olvide tomar sus medicamentos."
                    image={cardImage5}
                    isFree
                />
                <ServiceListCard
                    service="Seguimiento autónomo personalizado"
                    description="Realice un monitoreo de su estado de salud sin moverse de su casa."
                    image={cardImage6}
                />
            </div>
        </div>
    </section>
)

export default ServicesList
