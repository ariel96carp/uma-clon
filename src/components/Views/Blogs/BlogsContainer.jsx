import { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'

const BlogsContainer = () => {
    const BLOGS = [
        {
            title: 'Conocé qué es el asma y cómo controlarlo',
            category: 'Salud',
            specialist: 'Hugo F. Moreno - Especialista en Cirugía de Torax y Neumonología - MP 22993',
            readingTimeMins: 11,
            imageBgClassName: 'bg-[url("src/assets/img/medium_hands-with-lungs-shape.jpg")]'
        },
        {
            title: '¿Qué debemos saber de la Diabetes?',
            category: 'Salud',
            specialist: 'ÜMA Salud',
            readingTimeMins: 10,
            imageBgClassName: 'bg-[url("src/assets/img/small_blood-glucose-meter-and-stethoscope-on-white-background.jpg")]'
        },
        {
            title: '¿Qué es la Viruela del Mono y cuáles son sus síntomas?',
            category: 'Salud',
            specialist: 'Sofia Lodos - Médica - MN 155560',
            readingTimeMins: 6,
            imageBgClassName: 'bg-[url("src/assets/img/small_6286a52cb1646.jpg")]'
        },
        {
            title: 'Vacunación antigripal y algunos conceptos a saber sobre la gripe',
            category: 'Salud',
            specialist: 'Lucas Matías Córdoba - Médico',
            readingTimeMins: 9,
            imageBgClassName: 'bg-[url("src/assets/img/small_woman-with-plaster-on-shoulder-sitting-in-chair-after-vaccination.jpg")]'
        },
        {
            title: 'Las 11 preguntas más frecuentes sobre hipertensión arterial',
            category: 'Cardiología',
            specialist: 'Gustavo Daquarti - Cardiólogo',
            readingTimeMins: 14,
            imageBgClassName: 'bg-[url("src/assets/img/small_close-up-blood-pressure-measuring-device.jpg")]'
        },
        {
            title: 'Progressive Web Apps: ¿La web es el futuro de las aplicaciones?',
            category: 'Tecnología',
            specialist: 'Farid Murzone - AI & Engineering Mgr. / CoFounder ÜMA',
            readingTimeMins: 14,
            imageBgClassName: 'bg-[url("src/assets/img/img-blog-pwa-jul-21-mitrais.webp")]'
        },
        {
            title: 'Nuestro sistema inmune luego del Covid-19',
            category: 'Nutrición',
            specialist: 'Lorena Agostini - Nutricionista - MN 4133',
            readingTimeMins: 6,
            imageBgClassName: 'bg-[url("src/assets/img/small_healthy-balanced-vegetarian-food-top-view.jpg")]'
        }
    ]
    const [ filterBlogs, setFilterBlogs ] = useState('Todos')
    const setBlogsCategory = (e) => {
        const { target } = e
        setFilterBlogs(target.textContent)
    }
    return (
        <section className="section">
            <div className="page-container">
                <h2 className="text-center text-uma-blue uppercase mb-3">Blog</h2>
                <h1
                    className="text-center text-uma-blue font-black text-4xl mb-12"
                >
                    Mantenete al día con la información
                </h1>
                <div className="section-container">
                    <div className="mb-10">
                        <h2 className="blog-container-title">
                            Lo más nuevo
                        </h2>
                        {
                            BLOGS.slice(0, 1).map(({
                                title,
                                category,
                                specialist,
                                readingTimeMins,
                                imageBgClassName
                            }, index) => (
                                <article
                                    className="grid md:grid-cols-2 auto-rows-fr border rounded-sm"
                                    key={index}
                                >
                                    <div className="p-3 flex flex-col gap-4">
                                        <div className="p-2 border text-uma-blue border-uma-blue text-sm rounded-sm w-fit">
                                            {category}
                                        </div>
                                        <h3 className="font-bold text-3xl leading-tight">{title}</h3>
                                        <p>{specialist}</p>
                                        <div className="text-uma-blue flex items-center gap-1">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="w-4"
                                            >
                                                <path
                                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M13 7H11V13H17V11H13V7Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <p>{`${readingTimeMins} mins. de lectura`}</p>
                                        </div>
                                        <Link to="/" className="btn dark md:w-fit rounded-sm px-10">Leer más</Link>
                                    </div>
                                    <div
                                        className={`${imageBgClassName} bg-no-repeat bg-center bg-cover order-first md:order-last`}
                                    />
                                </article>
                            ))
                        }
                    </div>
                    <h2 className="blog-container-title">Todas las notas</h2>
                    <div className="flex gap-3 md:gap-2 flex-wrap mb-8">
                        <button
                            type="button"
                            className={`btn transparent blog ${filterBlogs === 'Todos' && 'dark'}`}
                            onClick={setBlogsCategory}
                        >
                            Todos
                        </button>
                        <button
                            type="button"
                            className={`btn transparent blog ${filterBlogs === 'Salud' && 'dark'}`}
                            onClick={setBlogsCategory}
                        >
                            Salud
                        </button>
                        <button
                            type="button"
                            className={`btn transparent blog ${filterBlogs === 'Tecnología' && 'dark'}`}
                            onClick={setBlogsCategory}
                        >
                            Tecnología
                        </button>
                        <button
                            type="button"
                            className={`btn transparent blog ${filterBlogs === 'Cardiología' && 'dark'}`}
                            onClick={setBlogsCategory}
                        >
                            Cardiología
                        </button>
                        <button
                            type="button"
                            className={`btn transparent blog ${filterBlogs === 'Nutrición' && 'dark'}`}
                            onClick={setBlogsCategory}
                        >
                            Nutrición
                        </button>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
                        {
                            filterBlogs === 'Todos' ? (
                                BLOGS.map(({
                                    title,
                                    category,
                                    specialist,
                                    readingTimeMins,
                                    imageBgClassName
                                }, index) => (
                                    <BlogCard
                                        title={title}
                                        category={category}
                                        specialist={specialist}
                                        readingTimeMins={readingTimeMins}
                                        imageBgClassName={imageBgClassName}
                                        key={index}
                                    />
                                ))
                            ) : (
                                BLOGS.filter((blog) => blog.category === filterBlogs).map(({
                                    title,
                                    category,
                                    specialist,
                                    readingTimeMins,
                                    imageBgClassName
                                }, index) => (
                                    <BlogCard
                                        title={title}
                                        category={category}
                                        specialist={specialist}
                                        readingTimeMins={readingTimeMins}
                                        imageBgClassName={imageBgClassName}
                                        key={index}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsContainer
