import { Link } from 'react-router-dom'
import youtubeImage from '../../assets/img/youtube.png'
import instagramImage from '../../assets/img/instagram.png'
import linkedinImage from '../../assets/img/linkedin.png'
import facebookImage from '../../assets/img/facebook.png'

const Footer = () => {
    const FOOTER_LINKS = [
        {
            link: '/',
            text: 'Info@uma-health.com',
            title: 'Información'
        },
        {
            link: '/',
            text: 'ÜMA México',
            title: 'Información'
        },
        {
            link: '/',
            text: 'Defensa de los Consumidores, para reclamos ingrese aquí',
            title: 'Información'
        },
        {
            link: '/',
            text: 'Política de Privacidad',
            title: 'Información'
        },
        {
            link: '/',
            text: 'Términos y Condiciones',
            title: 'Información'
        },
        {
            link: '/trabaja-con-nosotros',
            text: 'Trabajá con Nosotros',
            title: 'Recursos'
        },
        {
            link: '/',
            text: 'Preguntas Frecuentes',
            title: 'Recursos'
        },
        {
            link: '/blog',
            text: 'Blog',
            title: 'Recursos'
        },
        {
            link: '/',
            text: 'Confían en Nosotros',
            title: 'Recursos'
        },
        {
            link: '/',
            text: 'Solicitar Demo',
            title: 'Recursos'
        },
        {
            link: '/guardia-online',
            text: 'Guardia Médica Online',
            title: 'Servicios'
        },
        {
            link: '/mi-especialista-online',
            text: 'Mi Especialista Online',
            title: 'Servicios'
        },
        {
            link: '/hisopados',
            text: 'Hisopados',
            title: 'Servicios'
        },
        {
            link: '/vacunas',
            text: 'Vacunas',
            title: 'Servicios'
        },
        {
            link: '/analisis-clinicos',
            text: 'Análisis Clínicos',
            title: 'Servicios'
        },
        {
            link: '/riesgo-cardiovascular',
            text: 'Test de Riesgo Cardiovascular',
            title: 'Inteligencia Artificial'
        },
        {
            link: '/',
            text: 'Seguimiento COVID',
            title: 'Inteligencia Artificial'
        },
        {
            link: '/diagnostico-asistido',
            text: 'Diagnóstico Asistido',
            title: 'Inteligencia Artificial'
        },
        {
            link: '/',
            text: 'Pastillero Virtual',
            title: 'Inteligencia Artificial'
        }
    ]
    const TITLE_LINKS = [...new Set(FOOTER_LINKS.map(({ title }) => title))]
    const MEDIA_LINKS = [
        {
            image: linkedinImage,
            altText: 'Linkedin',
            link: 'https://www.linkedin.com/company/umahealthai/'
        },
        {
            image: instagramImage,
            altText: 'Instagram',
            link: 'https://www.instagram.com/umasalud/'
        },
        {
            image: youtubeImage,
            altText: 'Youtube',
            link: 'https://www.youtube.com/channel/UC_0RkLa7Zd0oO3WhCAFejYA?view_as=subscriber'
        },
        {
            image: facebookImage,
            altText: 'Facebook',
            link: 'https://www.facebook.com/umasalud/'
        }
    ]
    return (
        <footer className="py-6 bg-[#D4E9FF]">
            <div className="page-container">
                <div
                    className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-y-8 mb-6"
                >
                    {
                        TITLE_LINKS.map((title, titleIndex) => (
                            <div className="text-center text-uma-blue" key={titleIndex}>
                                <h3 className="mb-4 font-bold text-lg">{title}</h3>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FOOTER_LINKS.filter((
                                            { title: listTitle }
                                        ) => listTitle === title).map(({
                                            link,
                                            text
                                        }, itemIndex) => (
                                            <li key={itemIndex}>
                                                <Link to={link}>{text}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div className="flex gap-6 items-center justify-center">
                    {
                        MEDIA_LINKS.map(({
                            image,
                            altText,
                            link
                        }, index) => (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                            >
                                <img src={image} alt={altText} className="w-6" />
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
