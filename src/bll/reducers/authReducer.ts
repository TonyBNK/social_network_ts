import {Nullable} from "../../types/nullable";
import {FormDataType} from "../../components/LoginPage";
import {setAuthUserDataSuccess} from "../action-creators/actionCreators";
import {setAuthUserData} from "../thunks/thunks";
import {FormAction} from "redux-form";
import {Dispatch} from "react";


export type AuthActionsType =
    ReturnType<typeof setAuthUserDataSuccess>;

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
    logOut: () => void
}

export type LoginPageDispatchType = {
    logIn: (formData: FormDataType) => void
}

export type AuthUserPropsType = AuthUserMTSPType & AuthUserMDTPType;

export type LogInType = (formatData: FormDataType) => (dispatch: Dispatch<ReturnType<typeof setAuthUserData> | FormAction>) => void

const initialState: UserAuthStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionsType):
    UserAuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}