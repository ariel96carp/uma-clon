import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PlanCard = ({
    plan,
    listBeneficts,
    monthlyPrice,
    text,
    headerBgColor,
    textColor = 'text-dark'
}) => (
    <article className="bg-white rounded-md border flex flex-col">
        <header
            className={`text-center py-2 uppercase text-white font-semibold ${headerBgColor} rounded-t-md`}
        >
            {plan}
        </header>
        <div className="px-4 py-6 flex flex-col gap-3 h-full">
            <main className="flex flex-col items-center gap-4">
                <h3 className={`${textColor} font-bold text-xl`}>{text}</h3>
                <ul className="flex flex-col gap-1 w-full">
                    {
                        listBeneficts.map((benefict, index) => (
                            <li
                                className="list-item-image check justify-start"
                                key={index}
                            >
                                {benefict}
                            </li>
                        ))
                    }
                </ul>
                <p className="font-bold text-xl">{`$${monthlyPrice} por mes`}</p>
            </main>
            <footer className="mt-auto">
                <Link to="/" className="btn transparent !border-0 mb-2">Ver más</Link>
                <Link to="/" className="btn dark">Suscribirme</Link>
            </footer>
        </div>
    </article>
)

PlanCard.propTypes = {
    plan: PropTypes.string.isRequired,
    monthlyPrice: PropTypes.number.isRequired,
    listBeneficts: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
    headerBgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string
}

export default PlanCard
