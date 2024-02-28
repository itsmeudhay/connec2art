import { MdOutlineMyLocation, MdEmail, MdCall, MdWhatsapp } from "react-icons/md";
import logo from '../assets/C2A.png'

function Contact() {


    return (
        <>
            
                <div id="contact" className='flex h-screen '>
                    <div className='items-center justify-center flex-1 hidden m-8 mx-8 text-black lg:flex'>
                        <img
                            className="object-cover w-full h-auto"
                            src={logo}
                            alt="Eduprajna classroom"
                        />
                    </div>
                    <div className='flex items-center justify-center w-full lg:w-1/2'>
                        <div className="">
                            <h1 className="flex justify-center mb-4 font-bold text-fontGreen lg:text-3xl">Contact Connec2Art Media :</h1>
                            <div className="p-4 rounded-lg md:p-8">
                                <div className="flex flex-col items-center justify-center gap-4 mb-4 md:flex-row">
                                    <a href="mailto:connec2artmedia@gmail.com" className="flex px-4 py-2 font-bold text-white transition-transform ease-in-out transform border border-none rounded-full bg-gradient-to-r from-sky-500 to-blue-800 hover:scale-110 hover:border-white duration-3000">
                                        <span className="flex items-center me-6"><MdEmail /></span>Email Us
                                    </a>

                                    <a href="tel:8217696986" className="flex px-4 py-2 font-bold text-white transition-transform ease-in-out transform border border-none rounded-full bg-gradient-to-r from-slate-500 to-slate-800 hover:scale-110 hover:border-white duration-3000">
                                        <span className="flex items-center me-6"><MdCall /></span>Call Us: +91-8217696986
                                    </a>

                                    <a href="https://wa.me/message/QA2IDDTW7MU6I1" className="flex px-4 py-2 font-bold text-white transition-transform ease-in-out transform border border-none rounded-full bg-gradient-to-r from-green-500 to-emerald-800 hover:scale-110 hover:border-white duration-3000">
                                        <span className="flex items-center me-6"><MdWhatsapp /></span>WhatsApp
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <a href="https://maps.app.goo.gl/zwa485ajSLQJTFML9" className="flex px-4 py-2 font-bold text-white transition-transform ease-in-out transform border border-none rounded-full bg-gradient-to-r from-pink-500 to-purple-800 hover:scale-110 hover:border-white duration-3000">
                                        <span className="flex items-center me-6"><MdOutlineMyLocation /></span>Location
                                    </a>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="flex justify-center mb-2 text-xl font-bold text-white animate-bounce">Get in touch with us today!</h3>
                                <p className="text-gray-700">
                                    {/* Add your contact details here (address, phone numbers, email, etc.) */}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


        </>
    );
}

export default Contact;