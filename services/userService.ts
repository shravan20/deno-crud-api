import { getUserById, createUser } from './../repository/userDAL.ts';

export const createUserService = async (body: any) => {

    let newUser = await createUser(body);
    return newUser;
};




export const getUserService = async (params: any) => {
    try {

        let userData = await getUserById(params.id);
        return userData;

    } catch (e) {
        throw e;
    }
    
};
