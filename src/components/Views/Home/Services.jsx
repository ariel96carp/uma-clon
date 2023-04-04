import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Dot
} from 'pure-react-carousel'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config.cjs'
import ServiceCard from './ServiceCard'
import psychologistImage from '../../../assets/img/femaleDoc.webp'
import dermatologistImage from '../../../assets/img/femaleDoc2.webp'
import clinicalImage from '../../../assets/img/maleDoc.webp'
import pediatricianImage from '../../../assets/img/maleDoc2.webp'

const Services = () => {
    const [ slidesNumber, setSlidesNumber ] = useState(2)
    useEffect(() => {
        const setSlidesOnResize = () => {
            const fullConfig = resolveConfig(tailwindConfig)
            const tailwindBp = fullConfig.theme.screens.md
            const mediumBp = matchMedia(`(min-width: ${tailwindBp})`)
            switch (true) {
                case mediumBp.matches:
                    setSlidesNumber(3)
                    break
                default:
                    setSlidesNumber(2)
            }
        }
        setSlidesOnResize()
        window.addEventListener('resize', setSlidesOnResize)
        return () => window.removeEventListener('resize', setSlidesOnResize)
    }, [])
    return (
        <section className="section bg-[#D4E9FF]">
            <div className="page-container">
                <div
                    className="grid lg:grid-cols-[2fr,3fr] gap-y-10 gap-x-16 items-center section-container"
                >
                    <div className="text-uma-blue-dark">
                        <h3 className="uppercase mb-5">Servicios Online</h3>
                        <h2 className="font-bold text-4xl mb-5 leading-normal">
                            Conocé nuestra sección de especialistas
                        </h2>
                        <ol className="flex flex-col gap-3 text-black font-semibold mb-5 list-decimal list-inside">
                            <li>Registrate</li>
                            <li>Seleccioná la especialidad y al profesional.</li>
                            <li>Elegí el horario que más te guste.</li>
                            <li>
                                ¡Listo! Ya podes tener tu consulta con la especialidad
                                que necesites.
                            </li>
                        </ol>
                        <Link to="/trabaja-con-nosotros" className="btn dark">Ver especialidades</Link>
                    </div>
                    <CarouselProvider
                        totalSlides={4}
                        naturalSlideHeight={250}
                        naturalSlideWidth={150}
                        visibleSlides={slidesNumber}
                        isIntrinsicHeight
                        className="relative min-w-0"
                    >
                        <ButtonBack className="slider-btn-custom back" />
                        <ButtonNext className="slider-btn-custom next" />
                        <Slider classNameTray="gap-2">
                            <Slide index={0}>
                                <ServiceCard
                                    image={psychologistImage}
                                    name="Lic. Bettina Berruchio"
                                    service="Psicología"
                                />
                            </Slide>
                            <Slide index={1}>
                                <ServiceCard
                                    image={dermatologistImage}
                                    name="Dra. Jorgelina Ema Gilli"
                                    service="Dermatología"
                                />
                            </Slide>
                            <Slide index={2}>
                                <ServiceCard
                                    image={clinicalImage}
                                    name="Dr. Ariel Esteban Libas"
                                    service="Clínica Médica"
                                />
                            </Slide>
                            <Slide index={3}>
                                <ServiceCard
                                    image={pediatricianImage}
                                    name="Dr. Sebastián Ismael Homar"
                                    service="Pediatría"
                                />
                            </Slide>
                        </Slider>
                        <div className="mt-3 flex gap-5 justify-center">
                            <Dot slide={0} className="slide-btn-custom" />
                            <Dot slide={1} className="slide-btn-custom" />
                            <Dot slide={2} className="slide-btn-custom" />
                            <Dot slide={3} className="slide-btn-custom" />
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </section>
    )
}

export default Services
