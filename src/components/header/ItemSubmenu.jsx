import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ItemSubmenu = ({ text, subItems }) => (
    <li className="relative py-2">
        <span className="underline-link cursor-pointer">
            {text}
        </span>
        <ul className="submenu">
            {
                subItems.map(({
                    text: subText,
                    link: subLink
                }, index) => (
                    <li key={index}>
                        <NavLink
                            to={subLink}
                            className={
                                ({ isActive }) => (
                                    isActive
                                        ? 'px-6 py-1 inline-block w-full font-extrabold'
                                        : 'px-6 py-1 inline-block w-full'
                                )
                            }
                            end
                        >
                            {subText}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </li>
)

ItemSubmenu.propTypes = {
    text: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(
        PropTypes.exact({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
}

export default ItemSubmenu
