import { connectToDB } from '../database/config.ts';


export const createUser = async (data: any) => {
    
    return data;

};

export const getUserById = (query: any): any => {

    try {
      console.log('I was here');

    return {
        "id": "emp31",
        "name": "William Shakespeare",
        "age": 456,
        "email": "bard.of.avon@heavenmail.com"
    };
        
    } catch (e) {
        throw e
    } 
};

