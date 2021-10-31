import {AuthActionType, UserAuthStateType} from "../../types/types";


const initialState: UserAuthStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null
}

export const authReducer = (state = initialState, action: AuthActionType):
    UserAuthStateType => {
    switch (action.type) {
        case "social_network/auth/SET_AUTHENTICATED":
            return {
                ...state,
                ...action.payload
            };
        case "social_network/auth/GET_CAPTCHA_URL":
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        default:
            return state;
    }
}