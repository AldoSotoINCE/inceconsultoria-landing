import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify'
import type { EmailI } from "../interfaces/email.interface";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function ContactMe() {

  const {
    register,
    handleSubmit,
    reset,
    formState:{ errors }
  } = useForm<EmailI>();

  const onSubmit = (data:EmailI) => {
    console.log(data)
    reset();
    toast.success('Correo enviado ✅', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    <div id="Contacto" className="p-10 md:p-20 my-20">
      <div className="text-center text-slate-900">
        <h1 className="text-4xl">¡Hablemos de tu verificación!</h1>
        <p className="py-3 text-lg">Estamos listos para trabajar juntos</p>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <div id="contact-me-buttons" className="flex flex-col md:flex-row justify-center gap-2">
            <a href="mailto:info@inceconsultoria.com.mx" className="flex w-auto md:w-full px-10 py-2 gap-2 justify-center border rounded-xl border-gray transition:transform duration-500 hover:bg-ince-blue1 hover:text-white hover:cursor-pointer"><HiOutlineMailOpen size={25}/>info@inceconsultoria.com.mx</a>
            <a href="https://wa.me/16644104450?text=Hola,%20necesito%20mas%20informaci%C3%B3n" className="flex w-full px-10 py-2 justify-center gap-2 items-center border rounded-xl border-gray hover:bg-ince-blue1 hover:text-white hover:cursor-pointer transition:transform duration-500"><FaWhatsapp size={25}/>Whatsapp</a>
        </div>
        <p className="my-5 text-center text-lg"> Ó enviame un correo 📧: </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p>Nombre:</p>
            <input 
              type="text" 
              placeholder=" Escribe tu correo" 
              className={`w-full p-2 border rounded-lg focus:outline-none ${errors.nombre ? "border-red-500" : "border-black/30"}`}
              {...register("nombre",{required:"El nombre es obligatorio"})}
            />                    
            {errors.nombre && (
              <p className="text-sm text-red-500 mt-1">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <p>Email:</p>
            <input 
              type="text" 
              placeholder=" Escribe tu correo" 
              className={`w-full p-2 border rounded-lg focus:outline-none ${errors.email ? "border-red-500" : "border-black/30"}`}
              {...register("email",
                {
                  required:"El email es obligatorio",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Introduce un correo electronico valido"}
                }
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}                
          </div>

          <div>
            <p>Telefono:</p>
            <input 
              type="text" 
              placeholder=" Escribe tu telefono" 
              className={`w-full p-2 border rounded-lg focus:outline-none ${errors.telefono ? "border-red-500" : "border-black/30"}`}
              {...register("telefono",{required:"El telefono es obligatorio"})}
            /> 
            {errors.telefono && (
              <p className="text-sm text-red-500 mt-1">
                {errors.telefono.message}
              </p>
            )}                  
          </div>
          <div>
            <p>Mensaje:</p>
            <textarea 
              rows={5}  
              placeholder="Escribe un mensaje" 
              className={`w-full px-4 py-3 border rounded-lg border-black/30  resize-none focus:outline-none ${errors.mensaje ? "border-red-500" : "border-black/30"}`}
              {...register("mensaje",{required:"El mensaje es obligatorio"})}
            />
            {errors.mensaje && (
              <p className="text-sm text-red-500 mt-1">
                {errors.mensaje.message}
              </p>
            )}
          </div>
          

          <button className="w-full flex justify-center items-center px-10 py-1.5 gap-2 border rounded-xl border-gray  hover:bg-ince-blue1 hover:text-white hover:cursor-pointer transition:transform duration-500"><MdOutlineMarkEmailRead size={30}/>Enviar correo</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            theme="light"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;