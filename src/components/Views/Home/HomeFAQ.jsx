import { Link } from 'react-router-dom'
import FAQ from '../../common/FAQ'

const HomeFAQ = () => (
    <section className="section">
        <div className="page-container">
            <div className="section-container">
                <FAQ
                    items={[
                        {
                            question: '¿Qué es UMA Salud?',
                            response: 'ÜMA Salud es una plataforma de salud y bienestar apalancada en \
                            inteligencia artificial que tiene como objetivo principal \
                            proporcionar un acceso ágil, seguro y de calidad a los servicios \
                            de salud, combinando tecnología y telemedicina.'
                        },
                        {
                            question: '¿Cómo puedo registrarme en UMA Salud?',
                            response: (
                                <p>
                                    Para comenzar a utilizar ÜMA solo debes ingresar al siguiente
                                    enlace:
                                    <Link to="/" className="font-semibold">&nbsp;registrarse</Link>
                                    , completa los datos del formulario y ¡listo!
                                </p>
                            )
                        },
                        {
                            question: '¿Es gratuito el registro?',
                            response: 'El registro es totalmente gratuito y no tiene ningún costo \
                            adicional. Solo abonas las consultas que resulten efectivas para \
                            nuestros servicios de Guardia Online y Especialistas Online.'
                        },
                        {
                            question: '¿Qué servicio ofrecemos?',
                            response: (
                                <>
                                    <p className="mb-6 md:mb-8">Contamos con los siguientes ejercicios:</p>
                                    <ul className="mb-6 md:mb-8 flex flex-col gap-1">
                                        <li>
                                            <span className="font-bold">Guardia Online:</span>
                                            &nbsp;Podrás acceder a una guardía médica online,
                                            24hs, los 7 días de la semana.
                                        </li>
                                        <li>
                                            <span className="font-bold">Especialistas Online:</span>
                                            &nbsp;Contamos con más de 20 especialidades
                                            con servicio de atención online.
                                        </li>
                                    </ul>
                                    <p className="mb-6 md:mb-8">
                                        A su vez, contamos con las siguientes herramientas
                                        totalmente
                                        <span className="font-bold">&nbsp;gratuitas</span>
                                        &nbsp;para cuidar tu salud:
                                    </p>
                                    <ul className="flex flex-col gap-1">
                                        <li>
                                            <span className="font-bold">Diagnóstico Asistido:</span>
                                            &nbsp;Podrás conocer los diagnósticos posibles para tus
                                            síntomas en tan solo minutos.
                                        </li>
                                        <li>
                                            <span className="font-bold">Test de Riesgo Cardiovascular:</span>
                                            &nbsp;Podrás evaluar las posibilidades que tienes de
                                            sufrir alguna enfermedad cardíaca según tus antecedentes
                                            y hábitos de vida.
                                        </li>
                                        <li>
                                            <span className="font-bold">Seguimiento COVID:</span>
                                            &nbsp;Monitoreamos tus síntomas por covid-19
                                            (o sospecha covid-19).
                                        </li>
                                        <li>
                                            <span className="font-bold">Pastillero Virtual:</span>
                                            &nbsp;Configure notificaciones diarias para no olvidarse
                                            de tomar sus medicamentos.
                                        </li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            question: '¿Cómo funciona la consulta en línea?',
                            response: (
                                <>
                                    <p className="mb-6 md:mb-8">Hay dos tipos consulta online en ÜMA:</p>
                                    <ul className="flex flex-col gap-1">
                                        <li>
                                            <span className="font-bold">Guardia Online:</span>
                                            &nbsp;Funciona como una guardia médica, se atenderá por
                                            orden de aparición y el profesional resolverá tus dudas
                                            en un consultorio virtual. Podrá emitir recetas y
                                            ordenes médicas.
                                            De ser necesario podrá enviarte un profesional para
                                            atención en el domicilio, o derivarte con un
                                            especialista.
                                        </li>
                                        <li>
                                            <span className="font-bold">Especialistas Online:</span>
                                            &nbsp;Podrás agendar un turno con un profesional en la
                                            especialidad que necesites, en el día y horario que mas
                                            se ajuste a tus necesidades. Contamos con mas de 20
                                            especialidades. El profesional de la salud atenderá
                                            todas tus dudas, podrá emitir recetas, ordenes de
                                            estudio y constancias de atención que luego tendrás
                                            disponible para descargar desde la app.
                                        </li>
                                    </ul>
                                </>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    </section>
)

export default HomeFAQ
