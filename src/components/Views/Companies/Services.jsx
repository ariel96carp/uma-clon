import companyServices from '../../../assets/img/mockup-services-companies.webp'

const Services = () => (
    <section className="section bg-gradient-to-b from-[rgba(230,242,255,0)] to-[rgba(208,231,255,.5)]">
        <div className="page-container">
            <h2 className="text-uma-blue font-black text-5xl mb-7 hidden md:block">
                ¿Qué te ofrecemos?
            </h2>
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 md:items-center justify-items-center">
                <ul className="font-medium text-lg w-full">
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Control de Ausentismo Laboral
                    </li>
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Traslado sanitario
                    </li>
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Vacunación a Domicilio
                    </li>
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Diagnóstico Autónomo
                    </li>
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Guardia Online
                    </li>
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Hisopados a Domicilio
                    </li>
                    <li
                        className="py-3 border-b border-[#90cdf4] list-item-image company-service"
                    >
                        Atención de Especialistas Online
                    </li>
                </ul>
                <img
                    src={companyServices}
                    alt="Servicios"
                    className="w-[90%] lg:w-[80%] order-first md:order-last"
                />
            </div>
        </div>
    </section>
)

export default Services
