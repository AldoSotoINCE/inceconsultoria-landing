import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-ince-gray  mt-5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="tracking-widest text-sm font-semibold ">
              UBICACIÓN
            </h3>
            <div className="mt-6 space-y-8">
              <div>
                <p className="font-semibold">Tijuana, Baja California:</p>
                <p className="mt-2">
                  Calle Juan Escutia, Chulavista, 22045
                </p>
                <p className="mt-2 ">Tel: 664 684 3379</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-6">
            <a
                href="https://www.facebook.com/INCETJ"
                target="_blank"
                aria-label="Facebook"
                className=" hover:text-white transition"
            >
                <FaFacebook size={40}/>
            </a>

            <a
                href="https://www.instagram.com/ince_tj/"
                target="_blank"
                aria-label="Instagram"
                className=" hover:text-white transition"
            >    
                <FaInstagram size={40}/>       
            </a>

            <a
                href="https://www.linkedin.com/in/ince-ingenier%C3%ADa-770372220/"
                target="_blank"
                aria-label="TikTok"
                className=" hover:text-white transition"
            >    
                <FaLinkedin size={40}/>       
            </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex mx-auto max-w-7xl px-6 py-6 justify-between">
          <p className="text-xs">
            © {new Date().getFullYear()}, INCE Consultoria
          </p>
        </div>
      </div>
    </div>
  );
}