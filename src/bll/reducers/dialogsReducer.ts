import {v1} from "uuid";
import vsratiy_cat from "../../images/vsratiy_cat.jpg";
import doge from "../../images/doge.jpg";
import parrot from "../../images/parrot.jpg";
import hamster from "../../images/hamster.jpg";
import turtle from "../../images/turtle.jpg";


type DialogType = {
    id: string
    ava: string
    name: string
};

type MessageType = {
    id: string
    message: string
};

export type DialogsPageStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
};

export type DialogsActionsType = ReturnType<typeof addNewMessage>;

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
    ]
};

const dialogsReducer = (state: DialogsPageStateType = initialState, action: DialogsActionsType): DialogsPageStateType => {

    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {
                    id: v1(),
                    message: action.newMessageText
                }]
            }
        default:
            return state;
    }
}

export const addNewMessage = (newMessageText: string) => ({
    type: "ADD-NEW-MESSAGE",
    newMessageText
} as const);

export default dialogsReducer;