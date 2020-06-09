import { createUserService, getUserService } from "../services/userService.ts";
import { RouterContext } from 'https://deno.land/x/oak/mod.ts'


export const createUser = async (contxt: RouterContext) => {

    try {
        let response = contxt.response;
        console.log(await contxt.request.body());
        let serviceCall = await createUserService(contxt.request.body());
        response.body = {
            "timestamp": new Date(),
            "status": 201,
            "payload": serviceCall
          }; 
        response.status = 201 
        
        
    } catch (e) {
            
        contxt.response.body = {
            "timestamp": new Date(),
            "status": 500,
            "error": {
                "name": e.name,
                "message": e.message
            },
            "payload": null
        };
        contxt.response.status = 500;
    }
}

export const getUserDetails = async (contxt: RouterContext) => {
    try {

        let response = contxt.response;
        let serviceCall = await getUserService(contxt.params);
        response.body = {
            "timestamp": new Date(),
            "status": 200,
            "payload": serviceCall
        };
        response.status = 200;
    } catch (e) {
      
        contxt.response.body = {
            "timestamp": new Date(),
            "status": 500,
            "error": {
                "name": e.name,
                "message": e.message
            },
            "payload": null
         };   
    }
}
