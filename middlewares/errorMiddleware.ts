import { RouterContext } from 'https://deno.land/x/oak/mod.ts'
import  CustomError  from "../helpers/customError.ts"; 

export const errorHandler = (err: CustomError, contxt: RouterContext) => {
    
    const status = err.status || 500;
    const message = err.message || `UNKNOWN_ERROR_CAUSE`

    contxt.response.body = {
        "timestamp": new Date(),
        "status": 500,
        "error": {
            "name": err.name,
            "message": err.message
        },
        "payload": null
     };
    contxt.response.status = 500;
}