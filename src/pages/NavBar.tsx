import { useEffect, useState } from 'react';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RxHamburgerMenu } from "react-icons/rx";

import logo from '../assets/imgs/logo_navbar.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const waUrl = `https://wa.link/xzp6p0`;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-50 shadow-lg" : "bg-transparent"}`}>
            <nav className='w-full mx-ato flex items-center justify-between lg:px-20 py-5 lg:py-4'>
                <div className='px-5'>
                    <img src={logo} alt="logo" className='min-w-20 max-w-42'/>
                </div>
                <div className='px-10 py-5 hidden lg:flex items-center gap-5 text-gray-900'>
                    <a href="#Inicio"    className='hover:underline decoration-2 decoration-black/70 underline-offset-8'>Inicio</a>
                    <a href="#Nosotros"  className='hover:underline decoration-2 decoration-black/70 underline-offset-8'>Nosotros</a>
                    <a href="#Servicios" className='hover:underline decoration-2 decoration-black/70 underline-offset-8'>Servicios</a>
                    <a href="#Proceso"   className='hover:underline decoration-2 decoration-black/70 underline-offset-8'>Proceso de verificación</a>
                    <a href="#Contacto"  className='px-6 py-2 rounded-lg text-white bg-ince-blue1 hover:opacity-50 transition-opacity duration-300'>Contacto</a>
                    <div className='flex gap-2'>
                      <div className='flex items-center justify-center gap-2'>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          aria-label="Instagram"
                          className="text-ince-blue1 hover:opacity-50 transition-opacity duration-300"
                        >
                          <FaInstagram size={25} className='text-primary'/>
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="Facebook"
                          className="text-ince-blue1 hover:opacity-50 transition-opacity duration-300"
                        >
                          <FaFacebook  size={25} className='text-primary'/>
                        </a>
                        <a
                          href="https://www.tiktok.com/"
                          target="_blank"
                          aria-label="Linkedin"
                          className="text-ince-blue1 hover:opacity-50 transition-opacity duration-300"
                        >
                          <FaLinkedin  size={25} className='text-primary'/>
                        </a>
                      </div>
                    </div>
                </div>
                <button onClick={() => setOpen(!open)} className='lg:hidden '>
                    <RxHamburgerMenu className='text-3xl mr-10'/>
                </button>
                <div className={`fixed top-0 left-0 w-full h-dvh transform transition-transform duration-600 bg-white
                    ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex justify-between p-6">
                        <img src="logo.png" alt="" className="w-20 pt-5"/>
                        <button onClick={() => setOpen(false)} className="text-2xl hover:cursor-pointer">
                            <IoMdCloseCircleOutline size={35} className='text-primary'/>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4 p-10 text-center text-lg">
                        <a href="#Inicio" className="text-xl" onClick={() => setOpen(false)}>Inicio</a>
                        <a href="#Nosotros" className="text-xl" onClick={() => setOpen(false)}>Nosotros</a>
                        <a href="#Servicios" className="text-xl" onClick={() => setOpen(false)}>Servicios</a>
                        <a href="#Proceso" className="text-xl" onClick={() => setOpen(false)}>Proceso de verificacion</a>
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"    
                            aria-label="Abrir chat de WhatsApp"
                            className="py-2 text-2xl rounded-lg text-white bg-ince-blue1" 
                            onClick={() => setOpen(false)}
                        >
                            Contacto
                        </a>
                    </ul>
                    <div className='flex items-center justify-center gap-2'>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          aria-label="Instagram"
                          className="transition"
                        >
                          <FaInstagram size={25} className='text-ince-blue1'/>
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="Facebook"
                          className=" transition"
                        >
                          <FaFacebook  size={25} className='text-ince-blue1'/>
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="TikTok"
                          className=" transition"
                        >
                          <FaLinkedin  size={25} className='text-ince-blue1'/>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}