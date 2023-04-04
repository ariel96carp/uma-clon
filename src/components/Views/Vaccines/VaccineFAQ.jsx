import FAQ from '../../common/FAQ'

const VaccineFAQ = () => (
    <section className="section">
        <div className="page-container">
            <div className="section-container">
                <p className="text-center font-semibold text-lg text-[#9F3BDE]">¿Tienes dudas?</p>
                <h2 className="text-center font-bold mb-8 text-2xl">Preguntas frecuentes</h2>
                <FAQ
                    items={[
                        {
                            question: '¿Cual es el principal objetivo de la aplicación de la vacuna antigripal?',
                            response: 'El objetivo es disminuir las complicaciones, hospitalizaciones, muertes y \
                            secuelas ocasionadas por el virus de influenza en la población de riesgo en Argentina. \
                            Es importante recordar que la vacunación contra la gripe no genera protección contra el \
                            nuevo coronavirus COVID-19.'
                        },
                        {
                            question: '¿Que personas pueden recibir la vacuna antigripal?',
                            response: 'Embarazadas, en cualquier trimestre de la gestación y puérperas hasta el \
                            egreso de la maternidad máximo 10 días después del parto si no la recibieron durante \
                            el embarazo. El momento fundamental de vacunación es durante el embarazo para proteger \
                            a la madre y al bebé a través del pasaje de anticuerpos por la placenta. \
                            Niños de 6 a 24 meses (deben recibir dos dosis separadas de al menos 4 semanas, excepto \
                            los niños que ya hubieran recibido dos dosis anteriormente) Niños/as y adultos de 2 \
                            años a 64 años inclusive que soliciten la aplicación o que presenten ciertas \
                            condiciones como: enfermedades respiratorias, enfermedades cardíacas, inmunodeficiencias \
                            congénitas o adquiridas, pacientes oncohematológicos y trasplantados y otros como \
                            personas obesas con índice de masa corporal mayor a 40, diabéticos, personas con \
                            insuficiencia renal crónica en diálisis, etc. Personas mayores de 65 años'
                        },
                        {
                            question: '¿Si tengo las defensas bajas tengo contraindicada la vacuna?',
                            response: 'No. La vacuna antigripal está indicada para personas con problemas en la \
                            inmunidad para evitar complicaciones y muerte por este virus. La vacuna es segura \
                            para estas personas.'
                        },
                        {
                            question: '¿La vacunación antigripal previene la infección por el nuevo coronavirus?',
                            response: 'No existe evidencia que demuestre que la vacuna antigripal genere protección \
                            cruzada contra el coronavirus-COVID 19. Sin embargo se recomienda vacunarse, para de \
                            este modo, no contraer el virus de la gripe.'
                        }
                    ]}
                />
            </div>
        </div>
    </section>
)

export default VaccineFAQ
