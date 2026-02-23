import { useState } from "react"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import type { SolicitudVerificacionI } from "../interfaces/form.interface";
import { requestVerificationEmail } from "../api/email";


const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes 
const MAX_DWG_FILE_SIZE = 100 * 1024 * 1024; // 100 MB in bytes 


export default function RequestVerification() {

    const [tienePlanos, setTienePlanos] = useState<boolean>(false);

    const { register, handleSubmit, watch, formState: {errors} } = useForm<SolicitudVerificacionI>();
    
    const onSubmit = async (data: SolicitudVerificacionI) => {
        try {
            const formData = new FormData();

            // Campos normales
            formData.append("nombre", data.nombre);
            formData.append("celular", data.celular);
            formData.append("email", data.email);
            formData.append("motivoSolicitud", data.motivoSolicitud);
            formData.append("normaAVerificar", data.normaAVerificar);
            formData.append("giroInstalacion", data.giroInstalacion);
            formData.append("descripcion", data.descripcion);

            if (data.otroMotivo) {
                formData.append("otroMotivo", data.otroMotivo);
            }

            if (data.otroGiro) {
                formData.append("otroGiro", data.otroGiro);
            }

            // Archivos
            if (data.reciboCfe && data.reciboCfe.length > 0) {
                formData.append("reciboCfe", data.reciboCfe[0]);
            }

            if (data.planos && data.planos.length > 0) {
                formData.append("planos", data.planos[0]);
            }

            const response = await requestVerificationEmail(formData)

            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }

            Swal.fire({
                title: 'Enviado',
                text: 'Solicitud enviada correctamente',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#2467BF"
            })
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Ocurrio un error al enviar la solicitud, favor de comunicarse via WhatsApp al: 664-410-4450',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#2467BF"
            })
        }
    };

    return (
        <div className="max-w-5xl mx-auto rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 text-gray-800">
                {/* Datos personales */}
                <div className="relative p-5 flex flex-col md:flex-row gap-3 rounded border border-black/30">
                    <p className="absolute -top-3 left-0 px-5 mx-3 rounded bg-ince-gray2">Datos de contacto:</p>
                    <div className="flex-1">
                        <p>Nombre del solicitante:</p>
                        <input 
                            type="text"
                            placeholder="John Doe"
                            className={`w-full px-5 py-1.5 rounded-xl border border-black/30 ${errors.nombre ? "border-red-500" : "border-black/15"}`}
                            {...register("nombre", { required: "Dato requerido" })}
                        />
                        <p className={` text-red-600 ${errors.nombre ? "visible" : "invisible"}`}>
                            <span>{String(errors.nombre?.message) ?? "Error"}</span>
                        </p>
                    </div>
                    <div className="flex-1">
                        <p>Numero celular</p>
                        <input 
                            type="text"
                            placeholder="664-000-0000"
                            className={`w-full px-5 py-1.5 rounded-xl border border-black/30 ${errors.celular ? "border-red-500" : "border-black/15"}`}
                            {...register("celular", {
                                required: "Dato requerido",
                                pattern: {
                                    value: /^(?:\d{10}|\d{3}[- ]?\d{3}[- ]?\d{4})$/,
                                    message: "Ingresa un número celular válido a 10 dígitos"
                                }
                            })}
                        />
                        <p className={` text-red-600 ${errors.celular ? "visible" : "invisible"}`}>
                            <span>{String(errors.celular?.message) ?? "Error"}</span>
                        </p>
                    </div>
                    <div className="flex-1">
                        <p>Correo electronico</p>
                        <input 
                            type="text"
                            placeholder="email@email.com"
                            className={`w-full px-5 py-1.5 rounded-xl border border-black/30 ${errors.celular ? "border-red-500" : "border-black/15"}`}
                            {...register("email", { 
                                required: "Dato requerido",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Ingresa un correo electrónico válido"
                                }
                            })}
                        />
                        <p className={` text-red-600 ${errors.email ? "visible" : "invisible"}`}>
                            <span>{String(errors.email?.message) ?? "Error"}</span>
                        </p>
                    </div>
                </div>

                {/* Motivo de la solicitud */}
                <div className="relative border border-black/30 rounded p-5">
                    <p className="absolute -top-3 left-0 px-5 mx-3 bg-ince-gray2 rounded">Motivo de solicitud:</p>
                    <div className="flex gap-2 text-center items-center">
                        <input 
                            type="radio" 
                            id="instalacion_nueva"
                            value="Instalacion nueva"
                            className="w-4"
                            {...register("motivoSolicitud", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.motivoSolicitud ? "border-red-500 text-red-500" : ""}`}>Instalación nueva</p>
                    </div>

                    <div className="flex gap-2 text-center items-center">
                        <input 
                            type="radio" 
                            id="proceso_interno" 
                            value="Proceso interno"
                            className="w-4"
                            {...register("motivoSolicitud", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.motivoSolicitud ? "border-red-500 text-red-500" : ""}`}>Proceso interno</p>
                    </div>

                    <div className="flex gap-2 text-center items-center">
                        <input 
                            type="radio" 
                            id="contratacion_cfe"
                            value="Contratacion CFE"
                            className="w-4 text-left"
                            {...register("motivoSolicitud", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.motivoSolicitud ? "border-red-500 text-red-500" : ""}`}>Contratación en CFE </p>
                    </div>

                    <div className="flex gap-2 text-center items-center">
                        <input 
                            type="radio" 
                            id="permisos"
                            value="Permisos"
                            className="w-4"
                            {...register("motivoSolicitud", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.motivoSolicitud ? "border-red-500 text-red-500" : ""}`}>Permisos (Bomberos o protección civil)</p>
                    </div>

                    <div className="flex gap-2 text-center items-center">
                        <input 
                            type="radio" 
                            id="otro"
                            value="Otro"
                            className="w-4"
                            {...register("motivoSolicitud", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.motivoSolicitud ? "border-red-500 text-red-500" : ""}`}>Otro</p>
                        {watch("motivoSolicitud") === "otro" && (
                            <input
                                {...register("otroMotivo", { required: "Dato obligatorio" })}
                                placeholder="Especificar motivo"
                                className="w-full border-b border-black/40 px-3 py-1"
                            />
                        )}
                    </div>
                    {errors.motivoSolicitud && (
                        <p className="mt-1 text-red-600">
                            {errors.motivoSolicitud.message}
                        </p>
                    )}
                </div>

                {/* Norma a verificar */}
                <div className="relative border border-black/30 rounded p-5">
                    <p className="absolute -top-3 left-0 px-5 mx-3 bg-ince-gray2 rounded">Norma a verificar</p>
                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="NOM-001-SEDE-2012" 
                            className="w-4"
                            value="NOM-001-SEDE-2012"
                            {...register("normaAVerificar", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.normaAVerificar ? "border-red-500 text-red-500" : ""}`}>NOM-001-SEDE-2012 - Instalaciones electricas</p>
                    </div>
                    
                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="NOM-004-SEDG-2004" 
                            className="w-4"
                            value="NOM-004-SEDG-2004"
                            {...register("normaAVerificar", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.normaAVerificar ? "border-red-500 text-red-500" : ""}`}>NOM-004-SEDG-2004  - Instalaciones GAS LP</p>
                    </div>
                    
                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="NOM-007-ENER-2014" 
                            className="w-4"
                            value="NOM-007-ENER-2014"
                            {...register("normaAVerificar", { required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.normaAVerificar ? "border-red-500 text-red-500" : ""}`}>NOM-007-ENER-2014 - Eficiencia energetica para sistema de alumbrado en edificios no residenciales</p>
                    </div>
                    {errors.normaAVerificar && (
                        <p className="mt-1 text-red-600">
                            {errors.normaAVerificar.message}
                        </p>
                    )}
                </div>

                {/* Giro de la instalacion */}
                <div className="relative border border-black/30 rounded p-5">
                    <p className="absolute -top-3 left-0 px-5 mx-3 bg-ince-gray2 rounded">Giro de la instalación</p>
                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="industria" 
                            className="w-4"
                            value="Industria"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Industria</p>
                    </div>

                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="local_comercial" 
                            className="w-4"
                            value="Local comercial"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}                        
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Local comercial</p>
                    </div>
                    
                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="gasolinera" 
                            className="w-4"
                            value="Gasolinera"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}                        
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Gasolinera</p>
                    </div>

                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="guarderia"
                            value="Guarderia"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}                        
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Guarderia</p>
                    </div>
                    
                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="preparacion_alimentos" 
                            className="w-4"
                            value="Preparacion de alimentos y bebidas"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}                        
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Preparación de alimentos y bebidas</p>
                    </div>

                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="oficinas" 
                            className="w-4"
                            value="Oficinas"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}                        
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Oficinas</p>
                    </div>

                    <div className="flex gap-2 text-left items-center">
                        <input 
                            type="radio" 
                            id="otro" 
                            value="Otro"
                            className="w-4"
                            {...register("giroInstalacion", {required: "Dato obligatorio" })}                        
                        />
                        <p className={`${errors.giroInstalacion ? "border-red-500 text-red-500" : ""}`}>Otro:</p>
                        {watch("giroInstalacion") === "otro" && (
                            <input
                                {...register("otroGiro")}
                                placeholder="Especificar giro"
                                className="w-full border-b border-black/40 px-3 py-1"
                            />
                        )}
                    </div>
                    {errors.giroInstalacion && (
                        <p className="mt-1 text-red-600">
                            {errors.giroInstalacion.message}
                        </p>
                    )}
                </div>

                {/* Descripcion de la instalacion */}
                <div>
                    <p>Descripción general de la instalación a verificar</p>
                    <textarea
                        id="" 
                        rows={3}
                        className={`w-full px-5 py-1 rounded border border-black/20  ${errors.descripcion ? "border-red-500" : "border-black/15"}`}
                        placeholder="Ejemplo: carga estimada, capacidad de subestación, carga a contratar, capacidad de tanque estacionario, subterráneo y equipos de consumo, etc "
                        {...register("descripcion",{ required: {value:true, message:"Dato obligatorio"}})}
                    />
                    <p className={` text-red-600 ${errors.descripcion ? "visible" : "invisible"}`}>
                        <span>{String(errors.descripcion?.message) ?? "Error"}</span>
                    </p>
                </div>

                {/* Identificacion oficial y recibo de CFE*/}
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <p>Recibo de CFE <span className="font-thin">(opcional)</span>:</p>
                        <p className="font-light  m-0">tamaño maximo 10MB</p>
                    </div>
                    <input type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className={`w-full rounded-md file:px-5 file:py-2 file:border file:rounded-l-md bg-gray-100 file:text-white border border-black/15 file:border-gray-600 file:bg-gray-600`}
                            {...register("reciboCfe", {
                                validate: (files: any) => {
                                    if (!files || files.length === 0) return true; // es opcional
                                    const file = files[0];
                                    if (file.size > MAX_FILE_SIZE) return "El archivo debe ser menor o igual a 10 MB.";
                                    return true;
                                    }
                                })
                            }
                    />
                </div>

                {/* planos */}
                <div>
                    <p className={`${errors.tienePlanos ? "text-red-500" : ""}`}>¿Cuentas con los planos del proyecto/obra a verificar?</p>
                    
                    <div className="flex gap-5">
                        <div className={`flex gap-2 text-center ${errors.tienePlanos ? "text-red-500" : ""}`}>
                            <input
                                id="Si"
                                value={"Si"}
                                type="radio" 
                                className="w-4"
                                {...register("tienePlanos", { required: "Dato obligatorio" })}
                                onChange={() => setTienePlanos(true)}
                            />
                            <p>Si</p>
                        </div>

                        <div className={`flex gap-2 text-center ${errors.tienePlanos ? "text-red-500" : ""}`}>
                            <input 
                                id="No"
                                value={"No"} 
                                type="radio" 
                                className="w-4"
                                {...register("tienePlanos", { required: "Dato obligatorio" })}
                                onChange={() => setTienePlanos(false)}
                            />
                            <p>No</p>
                        </div>
                    </div>
                    <p className={` text-red-600 ${errors.tienePlanos ? "visible" : "invisible"}`}>
                        <span>{String(errors.tienePlanos?.message) ?? "Error"}</span>
                    </p>
                        
                    {tienePlanos &&
                        <div className="my-5">
                            <p>Planos:</p>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png,.dwg"
                                className="w-full rounded-md file:px-5 file:py-2 file:border file:rounded-l-md bg-gray-100 file:text-white border border-black/15 file:border-gray-600 file:bg-gray-600"
                                {...register("planos", {
                                        validate: (files: any) => {
                                            if (!files || files.length === 0) return true; // es opcional
                                            const file = files[0];
                                            if (file.size > MAX_DWG_FILE_SIZE) return "El archivo debe ser menor o igual a 100 MB.";
                                            return true;
                                            }
                                        })
                                }
                            />
                        </div>
                    }
                </div>

                <button type="submit" className="w-full px-5 py-2.5 rounded-xl text-white bg-ince-blue1 hover:cursor-pointer hover:opacity-60">
                    Enviar solicitud de verificación
                </button>
            </form>
        </div>
    )
}
