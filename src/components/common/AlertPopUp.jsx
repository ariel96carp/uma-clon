import { forwardRef } from 'react'
import alertImage from '../../assets/img/OOjs_UI_icon_alert-yellow.svg.png'

const AlertPopUp = forwardRef((props, ref) => {
    const closeAlertOnClick = () => {
        const popupModal = ref.current
        popupModal.classList.toggle('active')
    }
    return (
        <div
            className="alert-popup-modal"
            ref={ref}
        >
            <button
                type="button"
                className="absolute top-4 right-4"
                onClick={closeAlertOnClick}
            >
                <svg
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-7"
                >
                    <path
                        d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
                        fill="white"
                    />
                </svg>
            </button>
            <div className="page-container">
                <div className="alert-popup">
                    <div className="h-full w-full flex items-center justify-center bg-white rounded-tl-md">
                        <img src={alertImage} className="h-[80%] sm:w-1/2 sm:h-auto" alt="Alerta" />
                    </div>
                    <div className="bg-red-500 p-4 w-full h-full flex items-center rounded-br-md">
                        <p className="font-semibold text-white text-center w-full">
                            Esta página es un clon y fue creada solamente con fines prácticos
                            y didácticos. La página original se encuentra en&nbsp;
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://umasalud.com/"
                                className="underline"
                            >
                                www.umasalud.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AlertPopUp
