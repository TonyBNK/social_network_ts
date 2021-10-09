import {initialiazedSuccess} from "../action-creators/actionCreators";
import {Dispatch} from "react";
import {AppThunkType} from "../store";


export type InitializeStateType = {
    isInitialize: boolean;
}
export type InitializeDispatchType = {
    initializeApp: () => AppThunkType
}

export type InitializeActionsType = ReturnType<typeof initialiazedSuccess>;

export type InitializeType = InitializeStateType & InitializeDispatchType;

export type InitializeThunkType = () => (dispatch: Dispatch<InitializeActionsType>) => void

const initialState: InitializeStateType = {
    isInitialize: false
}

export const appReducer = (state = initialState, action: InitializeActionsType):
    InitializeStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                isInitialize: true
            }
        default:
            return state;
    }
}