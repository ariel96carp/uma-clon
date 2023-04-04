import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const InfoBanner = ({
    subtitle,
    title,
    info,
    buttonText,
    image,
    route = '/',
    bannerClassName
}) => (
    <section className={`main-banner ${bannerClassName}`}>
        <div className="page-container h-full">
            <div className="main-banner-grid">
                {
                    route === '/empresas' && (
                        <img
                            src={image}
                            alt="Banner"
                            className="md:hidden sm:w-[75%] mx-auto mb-4"
                        />
                    )
                }
                <div className="flex flex-col gap-5 font-bold">
                    {
                        route === '/' ? (
                            <>
                                <h2 className="text-2xl text-uma-blue-dark">{subtitle}</h2>
                                <h1
                                    className="text-5xl leading-tight text-uma-blue-dark"
                                >
                                    {title}
                                </h1>
                                {info}
                                <Link to="/" className="btn dark w-[80%] lg:w-1/2">{buttonText}</Link>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl text-uma-blue-dark">{subtitle}</h2>
                                <h1
                                    className="text-5xl leading-tight text-uma-blue-dark"
                                >
                                    {title}
                                </h1>
                                {info}
                                <Link
                                    to="/"
                                    className="btn dark md:w-[80%] lg:w-1/2 order-first md:order-last"
                                >
                                    {buttonText}
                                </Link>
                            </>
                        )
                    }
                </div>
                <img src={image} alt="Banner" className="hidden md:block lg:max-w-[80%]" />
            </div>
        </div>
    </section>
)

InfoBanner.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.node.isRequired,
    buttonText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    route: PropTypes.oneOf([ '/', '/empresas' ]),
    bannerClassName: PropTypes.string
}

export default InfoBanner
