import { environment } from '../environment/enviroment'

const URI = environment.BASE_URL;
const requestVerificationEmailEndPoint = '/api/verificacion/send-email-service-request/'

const BASE_URL_EMAIL = `${URI}${requestVerificationEmailEndPoint}`

export const requestVerificationEmail = async (form:FormData) => {
    return await fetch(
        BASE_URL_EMAIL, 
        {
            method: "POST", 
            body: form
        }
    );
};