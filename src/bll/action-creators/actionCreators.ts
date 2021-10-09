import {Nullable} from "../../types/nullable";


export const setAuthUserDataSuccess = (
    userId: Nullable<number>, login: Nullable<string>,
    email: Nullable<string>, isAuth: boolean
) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    } as const
};

export const initialiazedSuccess = () => ({
    type: 'SET_INITIALIZED'
} as const);