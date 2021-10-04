import {Nullable} from "../../types/nullable";


export const setAuthUserDataSuccess = (
    userId: Nullable<number>, login: Nullable<string>,
    email: Nullable<string>, isAuth: boolean
) => ({
    type: 'SET_USER_DATA',
    payload: {
        userId,
        login,
        email,
        isAuth
    }
} as const);