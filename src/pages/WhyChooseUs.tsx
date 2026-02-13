import { 
  FaShieldAlt, 
  FaBolt, 
  FaFileAlt, 
  FaClock 
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué confiar en nosotros?
          </h2>
          <p className="text-slate-600 text-lg">
            Verificación técnica con respaldo legal, experiencia comprobada y
            dictámenes que realmente protegen tu inversión.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaShieldAlt className="text-ince-blue1 mb-6 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">
              Acreditación y respaldo oficial
            </h3>
            <p className="text-slate-600">
              Acreditados por EMA y aprobados por la autoridad competente,
              nuestros dictámenes cuentan con plena validez oficial.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaBolt className="text-ince-blue1 mb-6 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">
              Especialistas en normativa eléctrica
            </h3>
            <p className="text-slate-600">
              Aplicamos la NOM con criterio técnico, experiencia en campo y
              enfoque preventivo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaFileAlt className="text-ince-blue1 mb-6 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">
              Dictámenes claros y precisos
            </h3>
            <p className="text-slate-600">
              Informes estructurados y listos para trámites ante autoridades,
              CFE o aseguradoras.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaClock className="text-ince-blue1 mb-6 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">
              Atención ágil y acompañamiento
            </h3>
            <p className="text-slate-600">
              Te guiamos durante todo el proceso, desde la inspección hasta la
              resolución de observaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
