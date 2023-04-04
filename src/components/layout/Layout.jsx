import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useRef, useEffect, Suspense } from 'react'
import AlertPopUp from '../common/AlertPopUp'
import RouteLoader from '../common/RouteLoader'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
    const popupRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            const popupModal = popupRef.current
            popupModal.classList.add('active')
        }, 1000)
    }, [])
    return (
        <>
            <Header />
            <main>
                <AlertPopUp ref={popupRef} />
                <Suspense fallback={<RouteLoader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default Layout
