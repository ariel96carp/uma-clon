import BenefitsCard from './BenefitsCard'

const Benefits = () => (
    <section className="section">
        <div className="page-container">
            <div className="section-container text-center">
                <h2 className="text-2xl font-bold underline mb-3">¿Por qué ÜMA?</h2>
                <p className="text-lg mb-12">
                    Acercamos a tu empresa un servicio de vacunación antigripal para todos tus
                    colaboradores.
                    Contratá ÜMA y lleva tranquilidad a tus empleados y a sus familias, sumando
                    medidas para el cuidado de la salud.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                    <BenefitsCard
                        imageSvg={(
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 mb-3 mx-auto"
                            >
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                                    fill="#0A6DD6"
                                />
                                <path
                                    d="M13 7H11V13H17V11H13V7Z"
                                    fill="#0A6DD6"
                                />
                            </svg>
                        )}
                        title="Rápidos"
                        description="Entrega del servicio en horarios programados."
                    />
                    <BenefitsCard
                        imageSvg={(
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 mb-3 mx-auto"
                            >
                                <path
                                    d="M9.95 1.5639L10.658 2.2709L1.465 11.4639C0.521 12.4079 0 13.6639 0 14.9999C0 16.3359 0.521 17.5919 1.465 18.5349C2.408 19.4789 3.664 19.9999 5 19.9999C6.336 19.9999 7.592 19.4789 8.535 18.5349L17.728 9.3419L18.435 10.0499L19.849 8.6359L11.364 0.149902L9.95 1.5639ZM7.121 17.1209C5.988 18.2539 4.012 18.2539 2.879 17.1209C2.313 16.5549 2 15.8019 2 14.9999C2 14.1979 2.313 13.4449 2.879 12.8789L3.758 11.9999H12.242L7.121 17.1209ZM14.242 9.9999H5.758L12.072 3.6859L16.314 7.9279L14.242 9.9999Z"
                                    fill="#0A6DD6"
                                />
                            </svg>
                        )}
                        title="A domicilio"
                        description="Vacunas en plantas, fábricas o negocios."
                    />
                    <BenefitsCard
                        imageSvg={(
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 mb-3 mx-auto"
                            >
                                <path
                                    d="M20.6779 5.97978L19.2629 7.39278L17.1429 5.27278L15.0209 7.39278L18.5559 10.9288L17.1419 12.3428L16.4349 11.6358L10.0709 17.9998H4.41391L2.29291 20.1208L0.878906 18.7068L2.99991 16.5858V10.9288L9.36391 4.56478L8.65691 3.85778L10.0709 2.44378L13.6069 5.97878L15.7269 3.85778L13.6069 1.73678L15.0209 0.321777L20.6779 5.97878V5.97978ZM8.65691 12.3418L5.82791 9.51378L4.41391 10.9278L7.24291 13.7558L8.65691 12.3418ZM11.4849 9.51378L8.65691 6.68578L7.24291 8.10078L10.0709 10.9288L11.4849 9.51478V9.51378Z"
                                    fill="#0A6DD6"
                                />
                            </svg>
                        )}
                        title="Incluye 4 cepas"
                        description={(
                            <ul className="flex flex-col gap-1">
                                <li>Influenza A - H3N2</li>
                                <li>Influenza A - H1N1</li>
                                <li>Influenza B - Linaje Victoria</li>
                                <li>Influenza B - Linaje Yamagat</li>
                            </ul>
                        )}
                    />
                </div>
            </div>
        </div>
    </section>
)

export default Benefits
