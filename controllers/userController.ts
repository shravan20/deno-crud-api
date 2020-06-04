import  { Request, Response } from "https://deno.land/x/snowlight/mod.ts";



export const getUserDetails = (req: Request, res: Response) => {
    return res.status(200).send("Get User Data");

}

export const getUsers = (req: Request, res: Response) => {

    return res.status(200).send("Get all Users Data");

}

export const createUser = (req: Request, res: Response) => {
    let data = req.body.read();
    console.log(data)
    return res.status(200).send("Create a User");

}

export const updateUser = (req: Request, res: Response) => {

    return res.status(200).send("Update User Data");

}

export const removeUser = (req: Request, res: Response) => {

    return res.status(200).send("Removed User");

}