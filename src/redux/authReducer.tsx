import {authAPI} from "../api/api";
import {Nullable} from "../types/nullable";
import {FormDataType} from "../components/LoginPage";


export type SetUserDataType =
    ReturnType<typeof setAuthUserDataSuccess>
    | ReturnType<typeof logInSuccess> | ReturnType<typeof logOutSuccess>;

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

export type AuthUserMDTPType = {
    setAuthUserData: () => void
    logOut: () => void
}

export type AuthUserPropsType = AuthUserMTSPType & AuthUserMDTPType;

export type SetAuthUserDataType = () =>
    (dispatch: (action: SetUserDataType) => void) => void

export type LogInType = (formatData: FormDataType) => (dispatch: (action: SetUserDataType) => void) => void

const setAuthUserDataSuccess = (userId: number, login: string, email: string) => ({
    type: 'SET_USE_DATA',
    data: {
        userId,
        login,
        email
    }
} as const);
const logInSuccess = (userId: number) => ({
    type: 'LOG_IN',
    userId
} as const);
const logOutSuccess = () => ({
    type: 'LOG_OUT'
} as const);

export const setAuthUserData: SetAuthUserDataType = () => {
    return (dispatch) => {
        authAPI
            .getUsersAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setAuthUserDataSuccess(id, login, email));
                }
            })
    }
};
export const logIn: LogInType = (formData) => {
    return (dispatch) => {
        authAPI
            .logUserIn(formData)!
            .then(data => {
                if (data.resultCode === 0) {
                    const userId = data.data.userId;
                    dispatch(logInSuccess(userId));
                }
            })
    }
};
export const logOut = () => {
    return (dispatch: (action: SetUserDataType) => void) => {
        authAPI
            .logUserOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(logOutSuccess());
                }
            })
    }
};

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
        case "LOG_IN":
            return {
                ...state,
                login: 'TonyBNK',
                userId: action.userId,
                isAuth: true
            }
        case "LOG_OUT":
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}