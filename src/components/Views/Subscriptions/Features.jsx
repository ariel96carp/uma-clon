import { Link } from 'react-router-dom'
import PlanCard from './PlanCard'

const Features = () => (
    <section className="section">
        <div className="page-container">
            <div className="section-container">
                <h3
                    className="uppercase text-center text-uma-blue-dark text-lg mb-3"
                >
                    Ahorrá pagando un mes
                </h3>
                <h2
                    className="text-center text-uma-blue-dark font-bold text-4xl md:text-5xl mb-10 md:mb-16"
                >
                    Nuestras suscripciones
                </h2>
                <div
                    className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-fr gap-x-6 gap-y-8"
                >
                    <PlanCard
                        plan="ÜMA Bienestar"
                        text="Primes mes gratis"
                        monthlyPrice={3000}
                        listBeneficts={[
                            'Atención con médicos de guardia y especialista',
                            'Acompañamiento personalizado',
                            'Atención prioritaria',
                            'Usalo con tu familia'
                        ]}
                        headerBgColor="bg-purple-600"
                        textColor="text-purple-600"
                    />
                    <PlanCard
                        plan="Guardia Premium"
                        text="5 consultas al precio de 1"
                        monthlyPrice={1000}
                        listBeneficts={[
                            'Para toda tu familia',
                            'Médicos exclusivos',
                            'Guardia clínica y pediatra',
                            'Historial médico en la app',
                            'Recetas digitales'
                        ]}
                        headerBgColor="bg-uma-blue"
                        textColor="text-uma-blue"
                    />
                    <article className="bg-white rounded-md border flex flex-col">
                        <header
                            className="text-center py-2 uppercase text-white font-semibold bg-amber-500 rounded-t-md"
                        >
                            Salud mental
                        </header>
                        <div className="px-4 py-6 h-full flex gap-3 flex-col">
                            <main className="flex flex-col items-center gap-4">
                                <h3 className="font-bold text-xl">Tu salud mental es importante</h3>
                                <div className="grid grid-cols-3 gap-1 auto-rows-fr">
                                    <div className="mental-health-plan">
                                        <h3 className="font-bold text-lg text-amber-500 mb-2">Premium</h3>
                                        <p className="text-sm mb-2">4 sesiones mensuales</p>
                                        <p className="font-bold mb-2">$5400</p>
                                        <p className="text-xs">
                                            Ahorrás
                                            <span className="font-bold">&nbsp;$1800</span>
                                        </p>
                                    </div>
                                    <div className="mental-health-plan">
                                        <h3 className="font-bold text-lg text-amber-500 mb-2">Clásico</h3>
                                        <p className="text-sm mb-2">3 sesiones mensuales</p>
                                        <p className="font-bold mb-2">$4200</p>
                                        <p className="text-xs">
                                            Ahorrás
                                            <span className="font-bold">&nbsp;$1200</span>
                                        </p>
                                    </div>
                                    <div className="mental-health-plan">
                                        <h3 className="font-bold text-lg text-amber-500 mb-2">Básico</h3>
                                        <p className="text-sm mb-2">2 sesiones mensuales</p>
                                        <p className="font-bold mb-2">$3000</p>
                                        <p className="text-xs">
                                            Ahorrás
                                            <span className="font-bold">&nbsp;$600</span>
                                        </p>
                                    </div>
                                </div>
                            </main>
                            <footer className="mt-auto">
                                <Link to="/" className="btn transparent !border-0 mb-2">Ver más</Link>
                                <Link to="/" className="btn dark">Suscribirme</Link>
                            </footer>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
)

export default Features
