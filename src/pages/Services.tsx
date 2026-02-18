import { useState } from "react";

const services = [
  {
    id:"01",
    title: "Verificación de instalaciones eléctricas",
    description:"Evaluamos instalaciones eléctricas conforme a la normativa vigente, verificando condiciones de seguridad, capacidad de carga, sistemas de puesta a tierra y protecciones. Emitimos dictámenes con validez oficial para trámites ante autoridades, CFE, bomberos, aseguradoras, entre otras."
  },
  {
    id:"02",
    title: "Verificación de instalaciones de gas LP",
    description:"Inspeccionamos instalaciones de gas LP para garantizar el aprovechamiento y el cumplimiento con las disposiciones técnicas y de seguridad aplicables. Revisamos tanques, tuberías, reguladores y ventilación, emitiendo dictámenes que respaldan la operación segura del inmueble."
  },
  {
    id:"03",
    title: "Verificación de eficiencia energética",
    description:"Analizamos el desempeño energético de instalaciones y equipos para asegurar cumplimiento normativo y optimizar el consumo. Identificamos áreas de mejora que reducen costos operativos y fortalecen la sostenibilidad del proyecto."
  },
  {
    id:"04",
    title: "Servicios de consultoría",
    description:"Brindamos asesoría técnica especializada para la correcta interpretación y aplicación de la normativa. Acompañamos desde la planeación hasta la atención de observaciones, asegurando que tu proyecto cumpla sin contratiempos."
  },
]

export default function ServicesStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="Servicios" className="pt-10">
        <div className='py-10 text-center'>
            <p className='inline-block px-5 py-1.5 text-ince-blue1 border border-ince-blue1 rounded-2xl'>Tu seguridad es primero</p>
            <h1 className='py-3 text-5xl'>Nuestros <span className='text-ince-blue1'>servicios</span></h1>
        </div>
        <div className="max-w-sm md:max-w-350 mx-auto rounded-3xl overflow-hidden border border-black/10">
        {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
            <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                grid grid-cols-[100px_1fr_200px]
                px-12
                border-b border-black/10
                transition-all duration-500
                ${isActive 
                    ? "bg-ince-blue1/80 py-14 text-white" 
                    : "bg-white py-10 hover:bg-black/5"}
                `}
            >
                {/* ID */}
                <div className={`flex items-center text-sm ${isActive ? "text-white" : "text-black/50"} `}>
                    {service.id}
                </div>

                {/* Content */}
                <div>
                <h3 className="text-3xl font-medium">
                    {service.title}
                </h3>

                {/* Contenido expandible */}
                <div
                    className={`
                    overflow-hidden transition-all duration-500
                    ${isActive 
                        ? "max-h-96 opacity-100 mt-6" 
                        : "max-h-0 opacity-0"}
                    `}
                >
                    <p className={`max-w-xl text-base leading-relaxed ${isActive ? "text-white" : "text-black/70"}`}>
                    {service.description}
                    </p>

                    {/* <button className="mt-6 px-6 py-3 rounded-full text-sm tracking-widest text-black bg-white hover:text-white hover:bg-ince-blue1 transition-colors duration-300">
                        
                    </button> */}
                </div>
                </div>

                <div />
            </div>
            );
        })}

        </div>
    </section>
  );
}