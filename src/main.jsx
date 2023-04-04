import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
