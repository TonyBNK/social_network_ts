import {InitializeActionType, InitializeStateType} from "../../types/types";


const initialState: InitializeStateType = {
    isInitialize: false,
    editMode: false
}

export const appReducer = (state = initialState, action: InitializeActionType):
    InitializeStateType => {
    switch (action.type) {
        case "social_network/app/SET_INITIALIZED":
            return {
                ...state,
                isInitialize: true
            }
        case "social_network/app/SET_EDIT_MODE":
            return {
                ...state,
                editMode: action.isEdit
            }
        default:
            return state;
    }
}