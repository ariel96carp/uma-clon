import { Link } from 'react-router-dom'

const JobsBanner = () => (
    <section
        className="h-[calc(100vh-var(--header-size))] bg-no-repeat bg-center bg-cover bg-[url('/src/assets/img/jobs.a26fc641.webp')] bg-[rgba(10,109,214,.714)] bg-blend-multiply"
    >
        <div className="page-container h-full">
            <div className="grid md:grid-cols-2 items-center section-container text-white h-full">
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className="uppercase text-xl font-semibold">Trabajá con nosotros</h3>
                    <h1
                        className="text-6xl font-black leading-tight text-center md:text-left"
                    >
                        Hacemos que las cosas pasen
                    </h1>
                    <Link
                        to="/"
                        className="border rounded-md p-4 w-full sm:w-[80%] md:w-1/2 text-center font-semibold"
                    >
                        Sumate al equipo!
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default JobsBanner
