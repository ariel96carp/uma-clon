import { Link, ScrollRestoration } from 'react-router-dom'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

const NotFound = () => (
    <>
        <Header isHidden />
        <section className="py-24 md:py-32">
            <div className="page-container h-full">
                <div className="section-container">
                    <h1
                        className="text-center font-black text-3xl text-uma-blue mb-5"
                    >
                        Lo sentimos, no hemos podido encontrar la página.
                    </h1>
                    <Link to="/" className="btn dark w-1/2 mx-auto">Volver al inicio</Link>
                </div>
            </div>
        </section>
        <Footer />
        <ScrollRestoration />
    </>
)

export default NotFound
