import whyChooseUsImg from '../assets/imgs/whychooseus_img.jpeg'

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-300 mx-auto px-6">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-justify ">
                    ¿Por qué confiar en nosotros?
                </h2>
                <p className=" text-slate-600 text-lg text-justify">
                    Verificación técnica con respaldo legal, experiencia comprobada y
                    dictámenes que realmente protegen tu inversión.
                </p>
                <img 
                    src={whyChooseUsImg} 
                    alt="" 
                    className="w-full max-w-md rounded-2xl mt-6"
                />
            </div>
            <div className="flex flex-col gap-2">
                {/* Card 1 */}
                <div className="bg-white/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                    <h3 className="flex flex-row gap-2 items-center text-lg font-semibold mb-3">
                        Acreditación y respaldo oficial
                    </h3>
                    <p className="text-slate-600">
                        Acreditados por EMA y aprobados por la autoridad competente,
                        nuestros dictámenes cuentan con plena validez oficial.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                    <h3 className="flex flex-row gap-2 items-center text-lg font-semibold mb-3">
                        Especialistas en normativa eléctrica y gas LP
                    </h3>
                    <p className="text-slate-600">
                        Aplicamos la NOM con criterio técnico, experiencia en campo y
                        enfoque preventivo.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                    <h3 className="flex flex-row items-center gap-2 text-lg font-semibold mb-3">
                        Dictámenes claros y precisos
                    </h3>
                    <p className="text-slate-600">
                        Informes estructurados y listos para trámites ante autoridades competentes, CFE.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                    <h3 className="flex flex-row gap-2 items-center text-lg font-semibold mb-3">
                        Atención ágil y acompañamiento
                    </h3>
                    <p className="text-slate-600">
                        Te guiamos durante todo el proceso, desde la inspección hasta la
                        resolución de observaciones.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
