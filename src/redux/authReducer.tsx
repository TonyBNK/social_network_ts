import {authAPI} from "../api/api";
import {Nullable} from "../types/nullable";


export type SetUserDataType = ReturnType<typeof setAuthUserDataSuccess>;

export type UserAuthStateType = {
    userId: Nullable<number>
    login: Nullable<string>
    email: Nullable<string>
    isAuth: boolean
}

export type AuthUserMTSPType = {
    login: Nullable<string>
    isAuth: boolean
}

type AuthUserMDTPType = {
    setAuthUserData: () => void
}

export type AuthUserPropsType = AuthUserMTSPType & AuthUserMDTPType;

export type SetAuthUserDataType = () =>
    (dispatch: (action: SetUserDataType) => void) => void


const setAuthUserDataSuccess = (userId: number, login: string, email: string) => ({
    type: 'SET_USE_DATA',
    data: {
        userId,
        login,
        email
    }
});

export const setAuthUserData: SetAuthUserDataType = () => {
    return (dispatch) => {
        authAPI.getUsersAuth().then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthUserDataSuccess(id, login, email));
            }
        })
    }
}

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