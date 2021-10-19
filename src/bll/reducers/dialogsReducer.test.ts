import {v1} from "uuid";
import vsratiy_cat from "../../images/vsratiy_cat.jpg"
import doge from "../../images/doge.jpg";
import parrot from "../../images/parrot.jpg";
import hamster from "../../images/hamster.jpg";
import turtle from "../../images/turtle.jpg";
import dialogsReducer, {
    addNewMessage,
    DialogsPageStateType
} from "./dialogsReducer";


let initialState: DialogsPageStateType;

beforeEach(() => {
    initialState = {
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
});

test('new message should be added', () => {
    let newState = dialogsReducer(initialState, addNewMessage('Hello there!'));

    expect(newState.messages.length).toBe(4);
    expect(newState.messages[3].message).toBe('Hello there!');
});