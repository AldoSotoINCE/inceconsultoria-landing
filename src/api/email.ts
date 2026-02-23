
const BASE_URL = "http://127.0.0.1:8000/api/verificacion/send-email-service-request/"
export const requestVerificationEmail = async (form:FormData) => {
    return await fetch(
        BASE_URL, 
        {
            method: "POST", 
            body: form
        }
    );
};