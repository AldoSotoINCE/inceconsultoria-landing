import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappBubble(){
  const waUrl = `https://wa.me/16644104450?text=Hola,%20necesito%20mas%20informaci%C3%B3n`;
    return(
        <a 
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"    
            aria-label="Abrir chat de WhatsApp"
            className="fixed bottom-4 right-4 z-100 rounded-full p-4 m-4 bg-green-500 text-white shadow-xl hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
            <FaWhatsapp className="w-7 h-7"/>
        </a>
    )
}