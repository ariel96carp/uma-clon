import { Link, NavLink } from 'react-router-dom'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ResponsiveNav = forwardRef(({ items }, ref) => {
    const closeMenuOnItemClick = () => {
        const menuModal = ref.current
        menuModal.classList.toggle('active')
    }
    return (
        <nav className="absolute top-0 left-0 bg-white py-5 w-full translate-x-full">
            <div className="page-container">
                <ul className="flex flex-col gap-3">
                    {
                        items.map(({
                            text,
                            link,
                            subItems,
                            className
                        }, index) => (
                            !subItems ? [
                                !className ? (
                                    <li key={index}>
                                        <NavLink
                                            to={link}
                                            className={
                                                ({ isActive }) => (
                                                    isActive ? 'inline-block w-full text-uma-blue py-1' : 'inline-block w-full py-1'
                                                )
                                            }
                                            onClick={closeMenuOnItemClick}
                                            end
                                        >
                                            {text}
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li key={index}>
                                        <Link
                                            to={link}
                                            className={`inline-block w-full ${className}`}
                                            onClick={closeMenuOnItemClick}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                )
                            ] : (
                                subItems.map(({ text: subText, link: subLink }, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            to={subLink}
                                            className="inline-block w-full text-uma-blue py-1"
                                            onClick={closeMenuOnItemClick}
                                        >
                                            {subText}
                                        </Link>
                                    </li>
                                ))
                            )
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
})

ResponsiveNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            text: PropTypes.string.isRequired,
            link: PropTypes.string,
            subItems: PropTypes.arrayOf(
                PropTypes.exact({
                    text: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired
                })
            ),
            className: PropTypes.string
        })
    ).isRequired
}

export default ResponsiveNav
