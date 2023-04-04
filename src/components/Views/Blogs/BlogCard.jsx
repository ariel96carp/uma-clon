import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogCard = ({
    title,
    specialist,
    readingTimeMins,
    imageBgClassName,
    category
}) => (
    <Link to="/">
        <article className="grid auto-rows-fr border rounded-sm h-full">
            <div
                className={`${imageBgClassName} bg-no-repeat bg-center bg-cover`}
            />
            <div className="p-3 flex flex-col gap-4">
                <div className="p-2 border text-uma-blue border-uma-blue text-sm rounded-sm w-fit">
                    {category}
                </div>
                <h3 className="font-bold text-2xl leading-tight">{title}</h3>
                <p>{specialist}</p>
                <div className="text-uma-blue flex items-center gap-1 mt-auto">
                    <svg
                        viewBox="0 0 24 24"
                        className="w-4"
                    >
                        <path
                            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                            fill="currentColor"
                        />
                        <path
                            d="M13 7H11V13H17V11H13V7Z"
                            fill="currentColor"
                        />
                    </svg>
                    <p>{`${readingTimeMins} mins. de lectura`}</p>
                </div>
            </div>
        </article>
    </Link>
)

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    specialist: PropTypes.string.isRequired,
    readingTimeMins: PropTypes.number.isRequired,
    imageBgClassName: PropTypes.string.isRequired,
    category: PropTypes.oneOf([
        'Salud',
        'Nutrición',
        'Cardiología',
        'Tecnología'
    ]).isRequired
}

export default BlogCard
