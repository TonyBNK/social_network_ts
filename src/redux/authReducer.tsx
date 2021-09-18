import {SetUserDataType, UserAuthStateType} from "../types/authUserTypes";


export const setAuthUserData = (userId: number, login: string, email: string) => ({
    type: 'SET_USE_DATA',
    data: {
        userId,
        login,
        email
    }
});

const initialState: UserAuthStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: SetUserDataType):
    UserAuthStateType => {
    switch (action.type) {
        case "SET_USE_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}