import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Info = ({
    title,
    image,
    listTitle,
    listItems,
    buttonText,
    titleSign,
    altVersion = false
}) => (
    <div
        className="md:bg-[url('/src/assets/img/cardiobg.4e2c5be8.webp')] bg-center bg-no-repeat bg-contain md:h-[40rem]"
    >
        <h3 className={`${!altVersion ? 'info-title' : 'info-title alt'}`}>
            <span className={`${!altVersion ? 'info' : 'info alt'}`} data-text={titleSign}>{title}</span>
        </h3>
        <div
            className={`grid lg:grid-cols-2 ${!altVersion && 'lg:items-center'} gap-5 md:w-[80%] mx-auto`}
        >
            <img src={image} alt="Banner" className={`hidden lg:block ${!altVersion ? 'max-w-[85%]' : 'max-w-[60%]'}`} />
            <div className="text-uma-blue-dark">
                <h3
                    className={`${!altVersion ? 'info-list-title' : 'info-list-title alt'}`}
                >
                    {listTitle}
                </h3>
                {
                    altVersion && (
                        <p className="mb-6 text-black font font-semibold">
                            Con esta herramienta podras calcular, de forma rápida y sencilla, tu
                            nivel de riesgo cardiovascular a través del uso de la inteligencia
                            artificial.
                        </p>
                    )
                }
                <ul className="flex flex-col gap-5 font-semibold text-lg mb-6 [counter-reset:list-counter]">
                    {
                        listItems.map((text, index) => (
                            <li
                                className={`list-item-image ${!altVersion ? 'plan' : 'plan alt'}`}
                                key={index}
                            >
                                {text}
                            </li>
                        ))
                    }
                </ul>
                <Link
                    to="/"
                    className="btn dark !bg-pink-600 sm:w-[85%] md:w-[75%]"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    </div>
)

Info.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    listTitle: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    titleSign: PropTypes.string.isRequired,
    altVersion: PropTypes.bool
}

export default Info
