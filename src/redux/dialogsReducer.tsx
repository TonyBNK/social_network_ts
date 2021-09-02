import {ActionsType, DialogsPageStateType} from "./state";
import {v1} from "uuid";


export type DialogsActionsType =
    ReturnType<typeof setNewMessageActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>;

const dialogsReducer = (state: DialogsPageStateType, action: ActionsType) => {

    switch (action.type) {
        case "SET-NEW-MESSAGE":
            state.newMessage = action.messageText;
            return state;
        case "ADD-NEW-MESSAGE":
            state.messages.push({id: v1(), message: state.newMessage});
            state.newMessage = '';
            return state;
        default:
            return state;
    }
}

export const setNewMessageActionCreator = (text: string) => ({
    type: "SET-NEW-MESSAGE",
    messageText: text
} as const);
export const addNewMessageActionCreator = () => ({type: "ADD-NEW-MESSAGE"} as const);

export default dialogsReducer;