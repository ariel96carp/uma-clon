import PropTypes from 'prop-types'

const ErrorFormMessage = ({ msg }) => (
    <p className="mt-2 text-sm font-semibold text-red-500">{msg}</p>
)

ErrorFormMessage.propTypes = {
    msg: PropTypes.string.isRequired
}

export default ErrorFormMessage
