import {ActionsType, DialogsPageStateType} from "./store";
import {v1} from "uuid";
import vsratiy_cat from "../images/vsratiy_cat.jpg";
import doge from "../images/doge.jpg";
import parrot from "../images/parrot.jpg";
import hamster from "../images/hamster.jpg";
import turtle from "../images/turtle.jpg";


const initialState: DialogsPageStateType = {
    dialogs: [
        {id: v1(), name: "Cat", ava: vsratiy_cat},
        {id: v1(), name: "Doge", ava: doge},
        {id: v1(), name: "Parrot", ava: parrot},
        {id: v1(), name: "Hamster", ava: hamster},
        {id: v1(), name: "Turtle", ava: turtle},
    ],
    messages: [
        {id: v1(), message: 'So much wow!'},
        {id: v1(), message: 'Bark'},
        {id: v1(), message: "What's up?"},
    ],
    newMessage: ''
};

export type DialogsActionsType =
    ReturnType<typeof setNewMessageActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>;

const dialogsReducer = (state = initialState, action: ActionsType) => {

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