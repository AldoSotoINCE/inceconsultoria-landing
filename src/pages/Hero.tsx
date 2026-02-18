import heroImg from '../assets/imgs/hero_img.jpg'
export default function Hero() {
    const waUrl = `https://wa.me/16644104450?text=Hola,%20necesito%20mas%20informaci%C3%B3n`;

    return (
        <section id='Inicio' className="pt-32 md:pt-52">
            <div className="max-w-350 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* TEXTO */}
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Inspección de Instalaciones <span className='text-ince-blue1'>Eléctricas</span> y de <span className='text-ince-blue1'>Gas LP</span> con Total Cumplimiento Normativo
                    </h1>

                    <p className="text-lg font-thin mb-6">
                        Inspeccionamos instalaciones conforme a la Norma Oficial Mexicana, 
                        garantizando seguridad, legalidad y tranquilidad para tu empresa.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"    
                            aria-label="Abrir chat de WhatsApp"
                            className="px-6 py-3 rounded-lg font-semibold transition text-white bg-ince-blue1 hover:scale-[1.1] hover:cursor-pointer"
                        >
                            Solicitar Verificación
                        </a>

                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"    
                            aria-label="Abrir chat de WhatsApp"
                            className="border border-black/20 px-6 py-3 rounded-lg hover:scale-[1.1] hover:cursor-pointer transition"
                        >
                            Hablar con un Especialista
                        </a>
                    </div>
                </div>

                {/* IMAGEN */}
                <div>
                    <img 
                        src={heroImg} 
                        alt="Ingeniero realizando verificación eléctrica"
                        className="rounded-xl shadow-2xl hover:scale-[1.05] transition-all duration-300"
                    />
                </div>
            </div>
        </section>

    )
}
