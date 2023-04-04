/* eslint-disable import/newline-after-import */
import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '../components/layout/Layout'
import NotFound from '../components/Views/NotFound/NotFound'
const Home = lazy(() => import('../components/Views/Home/Home'))
const Companies = lazy(() => import('../components/Views/Companies/Companies'))
const Jobs = lazy(() => import('../components/Views/Jobs/Jobs'))
const Blogs = lazy(() => import('../components/Views/Blogs/Blogs'))
const EmergencyCareOnline = lazy(() => import('../components/Views/EmergencyCareOnline/EmergencyCareOnline'))
const SpecialistOnline = lazy(() => import('../components/Views/SpecialistOnline/SpecialistOnline'))
const SelfDiagnosis = lazy(() => import('../components/Views/SelfDiagnosis/SelfDiagnosis'))
const CardiovascularRisk = lazy(() => import('../components/Views/CardiovascularRisk/CardiovascularRisk'))
const ClinicalAnalysis = lazy(() => import('../components/Views/ClinicalAnalysis.jsx/ClinicalAnalysis'))
const Vaccines = lazy(() => import('../components/Views/Vaccines/Vaccines'))
const Subscriptions = lazy(() => import('../components/Views/Subscriptions/Subscriptions'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/empresas',
                element: <Companies />
            },
            {
                path: '/trabaja-con-nosotros',
                element: <Jobs />
            },
            {
                path: '/blog',
                element: <Blogs />
            },
            {
                path: '/guardia-online',
                element: <EmergencyCareOnline />
            },
            {
                path: '/mi-especialista-online',
                element: <SpecialistOnline />
            },
            {
                path: '/diagnostico-asistido',
                element: <SelfDiagnosis />
            },
            {
                path: '/riesgo-cardiovascular',
                element: <CardiovascularRisk />
            },
            {
                path: '/analisis-clinicos',
                element: <ClinicalAnalysis />
            },
            {
                path: '/vacunas',
                element: <Vaccines />
            },
            {
                path: '/suscripciones',
                element: <Subscriptions />
            }
        ]
    }
])

export default router
