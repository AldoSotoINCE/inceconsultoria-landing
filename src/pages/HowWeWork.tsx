
import {
  FaComments,
  FaFileContract  
} from "react-icons/fa"

import { MdGppGood } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { GrInspect,GrPlan } from "react-icons/gr";
import { FaListCheck } from "react-icons/fa6";

export default function HowWeWork() {
  const steps = [
    {
        step: "01",
        icon: <FaComments size={22} />,
        title: "Solicitud de servicio",
        desc: "Recibimos la información técnica de la instalación y definimos el alcance de la verificación conforme a la normativa aplicable.",
        items: [
            "Identificación del tipo de instalación",
            "Revisión preliminar de documentación",
            "Determinación de la Norma aplicable (NOM)",
        ],
    },
    {
        step: "02",
        icon: <FaFileContract size={22} />,
        title: "Cotización y contrato de prestación de servicios",
        desc: "Emitimos la propuesta económica y formalizamos el servicio definiendo el alcance técnico, tiempos y responsabilidades.",
        items: [
            "Definición del alcance de verificación",
            "Emisión de propuesta económica",
            "Formalización contractual del servicio",
        ],
    },
    {
        step: "03",
        icon: <GrPlan size={22} />,
        title: "Planeación de inspección",
        desc: "Una vez formalizado el servicio, estructuramos el plan de inspección conforme a las características específicas de la instalación.",
        items: [
            "Definición del alcance técnico en sitio",
            "Programación de visita de inspección",
            "Preparación de listas de verificación normativas",
        ],
    },
    {
        step: "04",
        icon: <FaListCheck size={22} />,
        title: "Revisión en gabinete y generación de listas de verificación",
        desc: "Realizamos un análisis documental previo para identificar criterios normativos aplicables y estructurar las listas de verificación que se utilizarán en campo.",
        items: [
            "Revisión de planos y memorias técnicas",
            "Identificación de requisitos normativos",
            "Elaboración de listas de verificación",
        ],
    },
    {
        step: "05",
        icon: <GrInspect size={22} />,
        title: "Inspección en campo y evaluación técnica",
        desc: "Realizamos la verificación física de la instalación en sitio, evaluando el cumplimiento de los requisitos establecidos en la norma.",
        items: [
            "Inspección visual y física de la instalación",
            "Verificación de cumplimiento normativo",
            "Levantamiento de evidencias y hallazgos",
        ],
    },
    {
        step: "06",
        icon: <IoMdDocument size={22} />,
        title: "Generación de acta de evaluación de la conformidad",
        desc: "Se elabora el acta de evaluación de la conformidad, documentando los resultados obtenidos durante la inspección y el grado de cumplimiento con la norma",
        items: [
            "Integración de resultados técnicos",
            "Documentación de hallazgos y observaciones",
            "Determinación preliminar de cumplimiento",
        ],
    },
    {
        step: "07",
        icon: <MdGppGood size={22} />,
        title: "Emisión de dictamen de cumplimiento",
        desc: "Con base en el acta de evaluación de la conformidad, se emite el dictamen correspondiente que acredita el cumplimiento con la normativa aplicable.",
        items: [
            "Determinación final de cumplimiento",
            "Emisión del dictamen técnico",
            "Entrega formal del documento al solicitante",
        ],
    }
  ]

  return (
    <section id="Proceso" className="py-24">
      <div className="max-w-350 lg:350 mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block mb-4 px-4 py-2 text-xs font-semibold tracking-widest text-primary uppercase text-ince-blue1 border border-ince-blue1 rounded-full">
            Nuestra metodología de trabajo
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Como es nuestro proceso de <span className="text-ince-blue1">Verificacion</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Nuestro proceso de <span className="font-bold">7 pasos</span> ofrece aplicaciones escalables y de alto rendimiento.
            No solo escribimos código, también diseñamos soluciones 
          </p>
        </div>

        {/* ROADMAP */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col text-center relative h-full">

                {/* 1. Icon + Step (Contenedor fijo) */}
                <div className="flex-none mb-6">
                  <div className="relative mx-auto w-16 h-16 rounded-xl bg-white border border-slate-200 shadow flex items-center justify-center">
                    <span className="text-primary">{s.icon}</span>
                    <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-gray-600 text-xs flex items-center justify-center font-semibold">
                      {s.step}
                    </span>
                  </div>
                </div>

                {/* 2. Title (Altura mínima para alinear) */}
                <h3 className="text-lg font-bold text-slate-900 min-h-14 flex items-center justify-center px-2">
                  {s.title}
                </h3>

                {/* 3. Desc (flex-grow hace que este espacio empuje la card gris hacia abajo) */}
                <p className="mt-3 text-sm text-slate-600 grow">
                  {s.desc}
                </p>

                {/* 4. Bullet Card (Se alineará al fondo gracias al flex-grow anterior) */}
                <div className="mt-6 bg-slate-50 rounded-xl p-4 shadow-sm border border-slate-100 min-h-30">
                  <ul className="space-y-2 text-sm text-slate-700 text-left">
                    {s.items.filter(item => item !== "").map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
