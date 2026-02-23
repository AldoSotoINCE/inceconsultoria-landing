import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import RequestVerification from "../components/RequestVerification";

function ContactMe() {

  return (
    <div id="Contacto" className="p-10 md:p-20 bg-white">
      <div className="text-center text-slate-900">
        <h1 className="text-4xl">¡Hablemos de tu verificación!</h1>
        <p className="py-3 text-lg">Estamos listos para trabajar juntos</p>
      </div>
      <div className="max-w-5xl mx-auto mt-12">
        <div id="contact-me-buttons" className="flex flex-col md:flex-row justify-center gap-2">
            <a href="mailto:info@inceconsultoria.com.mx" className="flex w-auto md:w-full px-10 py-2 gap-2 justify-center border rounded-xl border-gray transition:transform duration-500 hover:bg-ince-blue1 hover:text-white hover:cursor-pointer"><HiOutlineMailOpen size={25}/>info@inceconsultoria.com.mx</a>
            <a href="https://wa.me/16644104450?text=Hola,%20necesito%20mas%20informaci%C3%B3n" className="flex w-full px-10 py-2 justify-center gap-2 items-center border rounded-xl border-gray hover:bg-ince-blue1 hover:text-white hover:cursor-pointer transition:transform duration-500"><FaWhatsapp size={25}/>Whatsapp</a>
        </div>
        
        <p className="my-10 text-center text-2xl">Ó solicita una cotización ⬇️</p>
        <RequestVerification/>
      </div>
    </div>
  );
}

export default ContactMe;