import { NavLink, Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.cjs'
import ItemSubmenu from './ItemSubmenu'
import ResponsiveNav from './ResponsiveNav'
import logoImage from '../../assets/img/logo.webp'
import menuImage from '../../assets/img/menu.png'

const Header = ({ isHidden = false }) => {
    const MENU_ITEMS = [
        {
            text: 'Inicio',
            link: '/'
        },
        {
            text: 'UMA para empresas',
            link: '/empresas'
        },
        {
            text: 'Sumate al equipo',
            link: '/trabaja-con-nosotros'
        },
        {
            text: 'Blog',
            link: '/blog'
        },
        {
            text: 'Servicios',
            subItems: [
                {
                    text: 'Guardia Online',
                    link: '/guardia-online'
                },
                {
                    text: 'Mi Especialista Online',
                    link: '/mi-especialista-online'
                },
                {
                    text: 'Diagnóstico Asistido',
                    link: '/diagnostico-asistido'
                },
                {
                    text: 'Test de Riesgo Cardiovascular',
                    link: '/riesgo-cardiovascular'
                },
                {
                    text: 'Análisis Clínicos',
                    link: '/analisis-clinicos'
                },
                {
                    text: 'Hisopados',
                    link: '/hisopados'
                },
                {
                    text: 'Vacunas',
                    link: '/vacunas'
                },
                {
                    text: 'Suscripciones',
                    link: '/suscripciones'
                }
            ]
        },
        {
            text: 'Iniciar sesión',
            link: '/',
            className: 'btn dark'
        },
        {
            text: 'Ingreso médico',
            link: '/',
            className: 'btn transparent'
        }
    ]
    const modalRef = useRef(null)
    const openMenuOnClick = () => {
        const menuModal = modalRef.current
        menuModal.classList.toggle('active')
    }
    const closeOnClickOutsideNav = (e) => {
        const { target } = e
        const nav = target.querySelector('nav')
        if (target.contains(nav)) target.classList.toggle('active')
    }
    useEffect(() => {
        if (isHidden) return undefined
        const closeMenuOnBreakpoint = () => {
            const fullConfig = resolveConfig(tailwindConfig)
            const tailwindBp = fullConfig.theme.screens.lg
            const largeBp = window.matchMedia(`(min-width: ${tailwindBp})`)
            if (largeBp.matches) {
                const menuModal = modalRef.current
                if (menuModal.classList.contains('active')) {
                    menuModal.classList.remove('active')
                }
            }
        }
        closeMenuOnBreakpoint()
        window.addEventListener('resize', closeMenuOnBreakpoint)
        return () => window.removeEventListener('resize', closeMenuOnBreakpoint)
    }, [ isHidden ])
    return (
        <header className="fixed top-0 left-0 w-full z-40 shadow-md bg-white">
            <div className="h-[var(--header-banner-size)] bg-pink-500 text-white font-semibold">
                <div className="header-banner">
                    <span>
                        ¡Conocé nuestras suscripciones mensuales para cuidar tu salud!
                        <Link to="/" className="underline ml-2">Más información</Link>
                    </span>
                </div>
            </div>
            <div className="h-[var(--header-nav-size)]">
                <div className="page-container h-full">
                    <div className="flex justify-between items-center h-full">
                        <Link to="/">
                            <img src={logoImage} alt="Logo" className="w-14" />
                        </Link>
                        {
                            !isHidden && (
                                <>
                                    <nav className="hidden lg:block">
                                        <ul className="flex gap-6 items-center font-semibold text-uma-blue">
                                            {
                                                MENU_ITEMS.map(({
                                                    text,
                                                    link,
                                                    subItems,
                                                    className
                                                }, index) => (
                                                    !subItems ? [
                                                        !className ? (
                                                            <li key={index} className="py-2">
                                                                <NavLink
                                                                    to={link}
                                                                    className={
                                                                        ({ isActive }) => (isActive ? 'font-extrabold' : '')
                                                                    }
                                                                    end
                                                                >
                                                                    <span className="underline-link">
                                                                        {text}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                        ) : (
                                                            <li key={index}>
                                                                <Link
                                                                    to={link}
                                                                    className={className}
                                                                >
                                                                    {text}
                                                                </Link>
                                                            </li>
                                                        )
                                                    ] : (
                                                        <ItemSubmenu
                                                            text={text}
                                                            subItems={subItems}
                                                            key={index}
                                                        />
                                                    )
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                    <button type="button" onClick={openMenuOnClick} className="lg:hidden">
                                        <img src={menuImage} alt="Menu" className="w-8" />
                                    </button>
                                    <div
                                        className="custom-modal nav overflow-x-hidden overflow-y-auto"
                                        onClick={closeOnClickOutsideNav}
                                        ref={modalRef}
                                        aria-hidden
                                    >
                                        <ResponsiveNav
                                            items={MENU_ITEMS}
                                            ref={modalRef}
                                        />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    isHidden: PropTypes.bool
}

export default Header
