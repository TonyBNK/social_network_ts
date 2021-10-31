import {AuthActionType, UserAuthStateType} from "../../types/types";


const initialState: UserAuthStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionType):
    UserAuthStateType => {
    switch (action.type) {
        case "social_network/auth/SET_AUTHENTICATED":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}