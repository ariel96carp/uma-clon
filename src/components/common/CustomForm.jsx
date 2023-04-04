import { useState } from 'react'
import {
    Formik,
    Field,
    ErrorMessage,
    Form
} from 'formik'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import ErrorFormMessage from './ErrorFormMessage'
import FormLoader from './FormLoader'

const CustomForm = ({ type }) => {
    const [ sendingForm, setSendingForm ] = useState(false)
    const [ sendedForm, setSendedForm ] = useState(false)
    const navigate = useNavigate()
    const addClassOnSubmit = (e) => {
        const { target } = e
        target.classList.toggle('success')
        setTimeout(() => target.classList.toggle('success'), 2000)
    }
    return (
        <section
            className={`screening-form ${type === 'healthScreening' ? 'bg-form-pattern' : 'bg-[url("src/assets/img/banner-vaccine.965903d0.webp")]'}`}
        >
            <div className="page-container h-full">
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 md:justify-items-center items-center h-full section-container">
                    <div>
                        <h1
                            className={`font-semibold ${type === 'healthScreening' ? 'text-uma-blue' : 'text-white'} text-3xl md:text-5xl leading-tight mb-4`}
                        >
                            {
                                type === 'healthScreening'
                                    ? 'Análisis clínicos a domicilio'
                                    : 'Vacunación corporativa'
                            }
                        </h1>
                        <p className={`font-medium text-lg ${type !== 'healthScreening' && 'text-white'}`}>
                            {
                                type === 'healthScreening'
                                    ? '¡Extracciones de sangre y análisis de laboratorio sin salir de tu \
                                    casa! Resultados dentro de las 12hs.'
                                    : 'Cuidá a tus empleados con el servicio de vacunación como medida de \
                                    prevención frente a las nuevas cepas de la gripe.'
                            }
                        </p>
                    </div>
                    <div className="bg-white rounded-md shadow-md py-10 px-6">
                        <h2 className="text-center mb-6 sm:w-[80%] mx-auto">
                            ¿Necesitas hacerte un estudio? Completa el formulario y nos pondremos
                            en contacto.
                        </h2>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                number: '',
                                healthScreenings: '',
                                company: '',
                                persons: ''
                            }}
                            validate={(values) => {
                                const errors = {}
                                if (!values.name) errors.name = 'Por favor ingrese un nombre.'
                                if (!values.email) errors.email = 'Por favor ingrese un correo.'
                                if (!values.number) errors.number = 'Por favor ingrese un número de teléfono.'
                                if (type === 'healthScreening') {
                                    if (!values.healthScreenings) errors.healthScreenings = 'Por favor ingrese un análisis.'
                                } else {
                                    if (!values.company) errors.company = 'Por favor ingrese una empresa.'
                                    if (!values.persons) errors.persons = 'Debe seleccionar al menos una opción.'
                                }
                                return errors
                            }}
                            onSubmit={(values, { resetForm }) => {
                                setSendingForm(true)
                                setTimeout(() => {
                                    setSendingForm(false)
                                    setSendedForm(true)
                                    resetForm()
                                    setTimeout(() => {
                                        setSendedForm(false)
                                        navigate('/')
                                    }, 2000)
                                }, 2000)
                            }}
                        >
                            {() => (
                                <Form action="#" className="flex flex-col gap-4" autoComplete="off">
                                    <div>
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Nombre y Apellido"
                                            className="screening-form-input"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            render={(msg) => <ErrorFormMessage msg={msg} />}
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="screening-form-input"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            render={(msg) => <ErrorFormMessage msg={msg} />}
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            type="tel"
                                            name="number"
                                            placeholder="Número de Teléfono"
                                            className="screening-form-input"
                                        />
                                        <ErrorMessage
                                            name="number"
                                            render={(msg) => <ErrorFormMessage msg={msg} />}
                                        />
                                    </div>
                                    {
                                        type === 'healthScreening' ? (
                                            <div>
                                                <Field
                                                    type="text"
                                                    name="healthScreenings"
                                                    placeholder="Análisis a realizar"
                                                    className="screening-form-input"
                                                />
                                                <ErrorMessage
                                                    name="healthScreenings"
                                                    render={(msg) => <ErrorFormMessage msg={msg} />}
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <div>
                                                    <Field
                                                        type="text"
                                                        name="company"
                                                        placeholder="Empresa"
                                                        className="screening-form-input"
                                                    />
                                                    <ErrorMessage
                                                        name="company"
                                                        render={
                                                            (msg) => <ErrorFormMessage msg={msg} />
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <Field
                                                        as="select"
                                                        name="persons"
                                                        className="screening-form-input"
                                                    >
                                                        <option
                                                            value={0}
                                                            disabled
                                                        >
                                                            Personas a vacunar
                                                        </option>
                                                        <option value={1}>Menos de 5</option>
                                                        <option value={2}>Entre 5 y 10</option>
                                                        <option value={3}>Más de 10</option>
                                                    </Field>
                                                    <ErrorMessage
                                                        name="persons"
                                                        render={
                                                            (msg) => <ErrorFormMessage msg={msg} />
                                                        }
                                                    />
                                                </div>
                                            </>
                                        )
                                    }
                                    <input
                                        type="submit"
                                        value="Enviar"
                                        className="screening-form-submit"
                                        onClick={addClassOnSubmit}
                                    />
                                    { sendingForm && <FormLoader /> }
                                    {
                                        sendedForm && (
                                            <p
                                                className="text-center text-green-500"
                                            >
                                                ¡El formulario fue enviado exitosamente! A la
                                                brevedad nos estaremos comunicando.
                                            </p>
                                        )
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

CustomForm.propTypes = {
    type: PropTypes.oneOf([ 'healthScreening', 'vaccine' ])
}

export default CustomForm
