import {Nullable} from "../../types/nullable";
import {FormDataType} from "../../components/LoginPage";
import {setAuthUserDataSuccess} from "../action-creators/actionCreators";
import {setAuthUserData} from "../thunks/thunks";
import {FormAction} from "redux-form";


export type SetUserDataType =
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
    setAuthUserData: () => void
    logOut: () => void
}

export type AuthUserPropsType = AuthUserMTSPType & AuthUserMDTPType;

export type SetAuthUserDataType = () =>
    (dispatch: (action: SetUserDataType) => void) => void

export type LogInType = (formatData: FormDataType) => (dispatch: (action: ReturnType<typeof setAuthUserData> | FormAction) => void) => void

const initialState: UserAuthStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: SetUserDataType):
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