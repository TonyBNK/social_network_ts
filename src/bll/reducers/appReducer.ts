import {InitializeActionType, InitializeStateType} from "../../types/types";


const initialState: InitializeStateType = {
    isInitialize: false
}

export const appReducer = (state = initialState, action: InitializeActionType):
    InitializeStateType => {
    switch (action.type) {
        case "social_network/app/SET_INITIALIZED":
            return {
                ...state,
                isInitialize: true
            }
        default:
            return state;
    }
}