import {Nullable} from "../../types/nullable";
import {FormDataType} from "../../components/LoginPage";
import {setAuthUserDataSuccess} from "../actions/actions";


export type AuthActionsType =
    ReturnType<typeof setAuthUserDataSuccess>;

export type UserAuthStateType = {
    userId: Nullable<number>
    login: Nullable<string>
    email: Nullable<string>
    isAuth: boolean
}

export type AuthMeType = {
    id: number
    login: string
    email: string
}

export type LoginType = {
    userId: number
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