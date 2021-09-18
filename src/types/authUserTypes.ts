import {setAuthUserData} from "../redux/authReducer";
import {Nullable} from "./nullable";

export type SetUserDataType = ReturnType<typeof setAuthUserData>;

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
    setAuthUserData: (userId: number, login: string, email: string) => void
}

export type AuthUserPropsType = AuthUserMTSPType & AuthUserMDTPType;

