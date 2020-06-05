import { connectToDB } from '../database/config.ts';


export const createUser = async (data: any) => {
    
    return data;

};

export const getUserById = (query: any): any => {

    return {
        "name": "William Shakespeare",
        "age": 456,
        "email": "bard.of.avon@heavenmail.com"
    };
};

export const updateUser = (filter: any, updateBody: any): any => {

    return {
        "name": "William Shakespeare",
        "age": 456,
        "email": "bard.of.avon@heavenmail.com"
    };
};

export const deleteUser = (filter: any): any => {

    return {
        "name": "William Shakespeare",
        "age": 456,
        "email": "bard.of.avon@heavenmail.com"
    };
};