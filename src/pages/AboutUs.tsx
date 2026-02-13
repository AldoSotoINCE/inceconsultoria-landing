import { useState } from 'react';
import about_us from '../assets/imgs/about_us.jpg'

const services = [
  {
    id: "verificacion",
    title: "¿Qué es una verificación?",
    content: "La constatación ocular o comprobación mediante muestreo, medición, pruebas de laboratorio, o examen de documentos que se realizan para evaluar la conformidad en un momento determinado.",
  },
  {
    id: "unidad_de_verificacion",
    title: "¿Qué es una unidad de verificación?",
    content: "Una Unidad de Verificación (UV) es una persona física o moral acreditada por la Entidad Mexicana de Acreditación (EMA) y aprobada por la autoridad competente —como la Secretaría de Energía (SENER), según la materia— para evaluar y dictaminar si una instalación cumple con la Norma Oficial Mexicana aplicable.",
  },
  {
    id: "norma",
    title: "¿Qué es la norma oficial mexicana?",
    content: "la Norma Oficial Mexicana (NOM) es una regulación técnica obligatoria emitida por el Gobierno de México que establece los requisitos mínimos de seguridad, calidad y operación que deben cumplir productos, procesos, instalaciones o servicios.",
  },
];

export default function AboutUs() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section id='Nosotros' className="pt-24">
            <div className='py-20 text-center'>
                <p className='inline-block px-5 py-1.5 text-ince-blue1 border border-ince-blue1 rounded-2xl'>Ingeniería con respaldo normativo</p>
                <h1 className='py-3 text-5xl'>¿Quiénes<span className='text-ince-blue1'> somos?</span></h1>
            </div>
            <div className="max-w-400 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* IMAGEN */}
                <div className='order-2 lg:order-1'>
                    <img 
                        src={about_us} 
                        alt="Ingeniero revisando planos eléctricos"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* CONTENIDO */}
                <div className='order-1 lg:order-2'>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                    <span className='text-ince-blue1'>INCE Consultoria</span> Garantiza Cumplimiento y Seguridad
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                   Somos especialistas en la verificación de 
                    instalaciones eléctricas y de aprovechamiento de gas conforme a la Norma Oficial Mexicana.
                    Evaluamos técnicamente cada proyecto para asegurar que cumpla con los 
                    requisitos de seguridad y normatividad vigente.
                </p>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Una verificación es un proceso técnico que valida que una instalación 
                    opere bajo condiciones seguras, evitando riesgos, sanciones legales y 
                    responsabilidades civiles.
                </p>

                <h1 className='py-2 font-bold text-lg text-slate-600'>Normas aprobadas y acreditadas:</h1>
                <ul className="space-y-3 text-slate-700">
                    <li className='text-lg font-semibold'>✔ NOM-001-SEDE-2012 - Instalaciones Eléctricas</li>
                    <li className='text-lg font-semibold'>✔ NOM-004-SEDG-2004 - Instalaciones de Gas LP</li>
                    <li className='text-lg font-semibold'>✔ NOM-007-ENER-2014 - Eficiencia energetica</li>
                </ul>
                </div>
            </div>

            <section className="py-12 md:py-36">
                <div className="max-w-400 mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6">
                            {activeService.title}
                        </h3>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {activeService.content}
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 border-r border-gray-200">
                        {services.map((service) => (
                            <button
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className={`w-full text-left px-6 py-6 text-lg font-medium transition
                                ${activeService.id === service.id 
                                ? "bg-ince-blue1 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                }`}
                            >
                            {service.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    )
}
