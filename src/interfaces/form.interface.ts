export interface SolicitudVerificacionI {
  nombre: string
  celular: string
  email: string
  reciboCfe: FileList
  motivoSolicitud: string
  otroMotivo?: string
  normaAVerificar: string
  giroInstalacion: string
  otroGiro?: string
  descripcion: string
  tienePlanos: string
  planos?: FileList
}
