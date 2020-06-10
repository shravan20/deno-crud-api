import Database from '../database/config.ts';
const User: any = new Database('user');

export const createUser = async (data: any) => {
    
    let result: any = await User.collection.insertOne(data);
    return result;
};

export const getUserById = async (query: any) => {

    try {
        console.log('Hi. I am in..');
        
        return await User.collection.find();
        
    } catch (e) {
        throw e
    } 
};

