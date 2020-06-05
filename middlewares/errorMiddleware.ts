import  { Request, Response, Next } from "https://deno.land/x/snowlight/mod.ts";
import  CustomError  from "../helpers/customError.ts"; 

export const errorHandler = (err: CustomError, req: Request, res: Response, next: Next) => {
    
    const status = err.status || 500;
    const message = err.message || 'UNKNOWN_ERROR_CAUSE'

    console.log(err)

    res
        .status(status)
        .send({
                "timestamp": new Date(),
                "status": 500,
                "error": {
                    "name": err.name,
                    "message": err.message
                },
                "payload": null,
                "endpoint": req.url
        });
}