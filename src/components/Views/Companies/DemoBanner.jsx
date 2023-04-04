import { Link } from 'react-router-dom'

const DemoBanner = () => (
    <section className="pb-12 md:py-8 md:bg-uma-blue">
        <div className="page-container">
            <div className="hidden md:grid grid-cols-2 gap-3 justify-items-center">
                <h2
                    className="text-white font-black text-2xl text-center"
                >
                    Mejorá la productividad de tu empresa
                </h2>
                <Link
                    to="/"
                    className="btn dark-white w-[80%] lg:w-1/2 flex items-center justify-center"
                >
                    Solicitar Demo
                </Link>
            </div>
            <Link to="/" className="btn dark md:hidden">Solicitar Demo</Link>
        </div>
    </section>
)

export default DemoBanner
