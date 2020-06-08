import { createUserService, getUserService, updateUserService, removeUserService } from "../services/userService.ts";


export const createUser = async (contxt: any) => {

    try {
        let serviceCall = await createUserService(contxt.request.body());
        return res
                  .status(201)
                  .send({
                    "timestamp": new Date(),
                    "status": 201,
                    "payload": serviceCall,
                    "endpoint": req.url
                  });
        
    } catch (e) {
        return res.status(500).send({
            "timestamp": new Date(),
            "status": 500,
            "error": {
                "name": e.name,
                "message": e.message
            },
            "payload": null,
            "endpoint": req.url
    });
    }
}

export const getUserDetails = async (contxt: any) => {
    try {

        let serviceCall = await getUserService(contxt.params);
        return res.status(200).send({
            "timestamp": new Date(),
            "status": 200,
            "payload": serviceCall,
            "endpoint": req.url
            });
    } catch (e) {
      
        return res.status(500).send({
            "timestamp": new Date(),
            "status": 500,
            "error": {
                "name": e.name,
                "message": e.message
            },
            "payload": null,
            "endpoint": req.url
        });
        
    }

}
