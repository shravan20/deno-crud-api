import { createUserService, getUserService } from "../services/userService.ts";
import { RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { responseEnvelope, errorEnvelope } from "../helpers/response.ts";


export const createUser = async (contxt: RouterContext) => {

    try {
        let response = contxt.response;
        let body = await contxt.request.body();
        
        let serviceCall = await createUserService(body.value);
        
        response.body = await responseEnvelope(201,serviceCall);  
        response.status = 201 
        
    } catch (e) {
            
        contxt.response.body = await errorEnvelope(500, e);
        contxt.response.status = 500;
    }
}

export const getUserDetails = async (contxt: RouterContext) => {
    try {

        let response = contxt.response;
        let serviceCall = await getUserService(contxt.params);

        response.body = await responseEnvelope(200, serviceCall);
        response.status = 200;
    } catch (e) {
      
        contxt.response.body = errorEnvelope(500, e);
        contxt.response.status = 500;

    }
}
