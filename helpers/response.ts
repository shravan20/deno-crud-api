export const responseEnvelope = (status:number, serviceCall:any) => {
    return  { 
        "timestamp": new Date(), 
        "status": status, 
        "payload": serviceCall 
    }
};

export const errorEnvelope = (status:number, e:any) => {
    return  {
        "timestamp": new Date(),
        "status": 500,
        "error": {
            "name": e.name,
            "message": e.message
        },
        "payload": null
    }
};
