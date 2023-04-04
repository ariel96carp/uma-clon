import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import { useState, useEffect } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.cjs'
import AgreementCard from './AgreementCard'
import iomaLogo from '../../assets/img/iomaLogo.webp'
import macroLogo from '../../assets/img/macroLogo.webp'
import medifeLogo from '../../assets/img/medifeLogo.webp'
import pfaLogo from '../../assets/img/pfaLogo.webp'
import prudentialLogo from '../../assets/img/prudentialLogo.webp'
import sanidadLogo from '../../assets/img/sanidadLogo.webp'
import assistanceLogo from '../../assets/img/uaLogo.webp'
import whirpoolLogo from '../../assets/img/whirlpoolLogo.webp'
import rappiLogo from '../../assets/img/rappiLogo.webp'
import unionPersonalLogo from '../../assets/img/upLogo.webp'

const Agreements = () => {
    const [ slidesNumber, setSlidesNumber ] = useState(2)
    useEffect(() => {
        const setSlidesOnResize = () => {
            const fullConfig = resolveConfig(tailwindConfig)
            const tailwindMediumBp = fullConfig.theme.screens.md
            const tailwindSmallBp = fullConfig.theme.screens.sm
            const tailwindLargeBp = fullConfig.theme.screens.lg
            const smallBp = matchMedia(`(min-width: ${tailwindSmallBp})`)
            const mediumBp = matchMedia(`(min-width: ${tailwindMediumBp})`)
            const largeBp = matchMedia(`(min-width: ${tailwindLargeBp})`)
            switch (true) {
                case largeBp.matches:
                    setSlidesNumber(6)
                    break
                case mediumBp.matches:
                    setSlidesNumber(4)
                    break
                case smallBp.matches:
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
        <section className="section">
            <div className="page-container">
                <h2 className="section-title mb-8 md:mb-12">Convenios</h2>
                <div className="section-container">
                    <CarouselProvider
                        totalSlides={10}
                        visibleSlides={slidesNumber}
                        naturalSlideHeight={200}
                        naturalSlideWidth={150}
                        isIntrinsicHeight
                        isPlaying
                        infinite
                        className="min-w-0"
                    >
                        <Slider>
                            <Slide index={0}>
                                <AgreementCard image={iomaLogo} altText="IOMA" />
                            </Slide>
                            <Slide index={1}>
                                <AgreementCard image={macroLogo} altText="Macro" />
                            </Slide>
                            <Slide index={2}>
                                <AgreementCard image={medifeLogo} altText="Medifé" />
                            </Slide>
                            <Slide index={3}>
                                <AgreementCard image={pfaLogo} altText="PFA" />
                            </Slide>
                            <Slide index={4}>
                                <AgreementCard image={prudentialLogo} altText="Prudential" />
                            </Slide>
                            <Slide index={5}>
                                <AgreementCard
                                    image={sanidadLogo}
                                    altText="Obra Social del Personal de la Sanidad Argentina"
                                />
                            </Slide>
                            <Slide index={6}>
                                <AgreementCard image={assistanceLogo} altText="Universal Assistance" />
                            </Slide>
                            <Slide index={7}>
                                <AgreementCard image={whirpoolLogo} altText="Whirpool" />
                            </Slide>
                            <Slide index={8}>
                                <AgreementCard image={rappiLogo} altText="Rappi" />
                            </Slide>
                            <Slide index={9}>
                                <AgreementCard image={unionPersonalLogo} altText="Unión Personal" />
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        </section>
    )
}

export default Agreements
