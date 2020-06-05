import { getUserById, createUser, updateUser, deleteUser } from './../repository/userDAL.ts';

export const createUserService = async (body: any) => {


    let newUser = await createUser(body);
    return newUser;
};




export const getUserService = async (params: any) => {

    let userData = await getUserById(params.id);
    return userData;
};


export const updateUserService = async (params: any, body: any) => {

    let updatedUserDoc = await updateUser(params.id, body);
    return updatedUserDoc;
};


export const removeUserService = async (params: any) => {

    let deletedUser = await deleteUser(params.id);
    return deletedUser;
};