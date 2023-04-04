import FeatureItem from './Q&AItem'
import featuresImage from '../../../assets/img/companies-features.webp'

const QuestionsAndAnswers = () => (
    <section className="section">
        <div className="page-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-[3fr,2fr] gap-y-6 gap-x-4 section-container">
                <div className="text-uma-blue">
                    <h3 className="uppercase font-semibold mb-3">Inteligencia Artifical</h3>
                    <h2
                        className="font-black text-4xl md:text-5xl mb-3"
                    >
                        Consultorio Virtual
                        <span className="md:hidden">&nbsp;e Inteligencia Artificial</span>
                    </h2>
                    <img
                        src={featuresImage}
                        alt="Caraterísticas"
                        className="mx-auto md:ml-0 w-[90%] sm:w-[70%] md:w-[90%] lg:w-[70%]"
                    />
                </div>
                <ul className="flex flex-col gap-5">
                    <FeatureItem
                        title="Texto a voz"
                        text="La plataforma transforma a texto los diálogos que tienes con tus
                        pacientes, y recopila palabras clave para conformar la epicrisis."
                        bgImageClassName="before:bg-[url('/src/assets/img/microphone.webp')]"
                    />
                    <FeatureItem
                        title="Diagnóstico Predictivo"
                        text="Confeccione recetas digitales para sus pacientes, ordenes de estudio,
                        y cualquier archivo que crea necesario."
                        bgImageClassName="before:bg-[url('/src/assets/img/notes.webp')]"
                    />
                    <FeatureItem
                        title="Antecedentes Digitales"
                        text="Acceda a la historia clínica digital de sus pacientes, junto con notas
                        y observaciones de otros profesionales de la salud."
                        bgImageClassName="before:bg-[url('/src/assets/img/doctor.webp')]"
                    />
                    <FeatureItem
                        title="Recetas Digitales"
                        text="Confeccione recetas digitales para sus pacientes, ordenes de estudio,
                        y cualquier archivo que crea necesario."
                        bgImageClassName="before:bg-[url('/src/assets/img/pill.webp')]"
                    />
                </ul>
            </div>
        </div>
    </section>
)

export default QuestionsAndAnswers
