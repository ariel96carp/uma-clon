import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ServiceBanner = ({
    title,
    text,
    image,
    buttonText = 'Solicitar atención',
    subText,
    bgClassName = 'bg-gradient-to-b from-[rgba(230,242,255,0)] to-[rgba(208,231,255,.5)]',
    buttonClassName
}) => (
    <section className={`service-banner ${bgClassName}`}>
        <div className="page-container h-full">
            <div
                className="grid md:grid-cols-2 gap-x-4 gap-y-8 md:items-center justify-items-center section-container h-full"
            >
                <div className="flex flex-col gap-5">
                    <h1 className="text-uma-blue text-5xl font-bold">{title}</h1>
                    <p className="text-lg">{text}</p>
                    {
                        subText && subText
                    }
                    <Link
                        to="/"
                        className={`btn dark sm:w-[70%] md:w-[80%] lg:w-1/2 text-sm font-bold ${buttonClassName && buttonClassName}`}
                    >
                        {buttonText}
                    </Link>
                </div>
                <img
                    src={image}
                    alt="Banner"
                    className="sm:w-[70%] md:w-[90%] lg:w-[70%] order-first md:order-last"
                />
            </div>
        </div>
    </section>
)

ServiceBanner.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    subText: PropTypes.node,
    bgClassName: PropTypes.string,
    buttonClassName: PropTypes.string
}

export default ServiceBanner
