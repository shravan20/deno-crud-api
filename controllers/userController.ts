import  { Request, Response, Next } from "https://deno.land/x/snowlight/mod.ts";
import { createUserService, getUserService, updateUserService, removeUserService } from "../services/userService.ts";


export const createUser = async (req: Request, res: Response, next: Next) => {

    try {
        let serviceCall = await createUserService(req.body);
        return res.status(200).send(serviceCall);
    } catch (e) {

        next(e);
    }
    

}

export const getUserDetails = async (req: Request, res: Response, next: Next) => {
    try {
        let serviceCall = await getUserService(req.params);
        return res.status(200).send("Get User Data");
    } catch (e) {
        
        next(e);
    }

}

export const updateUser = async (req: Request, res: Response, next: Next) => {

    try {
        let serviceCall = await updateUserService(req.params, req.body);
        return res.status(200).send(serviceCall);
    } catch (e) {
        
        next(e);
    }
    
}

export const removeUser = async (req: Request, res: Response, next: Next) => {

    try {
        let serviceCall = await removeUserService(req.params);
        return res.status(200).send(serviceCall);
    } catch (e) {
        
        next(e);
    }

}