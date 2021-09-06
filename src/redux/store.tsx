import vsratiy_cat from '../images/vsratiy_cat.jpg';
import doge from '../images/doge.jpg';
import parrot from '../images/parrot.jpg';
import hamster from '../images/hamster.jpg';
import turtle from '../images/turtle.jpg';
import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";
import {v1} from "uuid";
import profileReducer, {ProfileActionsType} from "./profileReducer";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer";


type PostType = {
    id: string
    ava: string
    post: string
    likesCount: number
};
type DialogType = {
    id: string
    ava: string
    name: string
};
type MessageType = {
    id: string
    message: string
};
type FriendType = {
    id: string
    ava: string
    name: string
};

export type ProfilePageStateType = {
    posts: Array<PostType>
    newPostText: string
};
export type DialogsPageStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
};
export type FriendsPageType = {
    friends: Array<FriendType>
};

export type StateType = {
    profilePage: ProfilePageStateType
    dialogsPage: DialogsPageStateType
    friendsPage: FriendsPageType
};

export type ActionsType = ProfileActionsType | DialogsActionsType;

type StoreType = {
    _state: StateType
    _subscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), ava: cat_with_tongue, post: "Кто насрал в мой лоток?", likesCount: 14},
                {id: v1(), ava: angry_cat, post: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        friendsPage: {
            friends: [
                {id: v1(), name: "Cat", ava: vsratiy_cat},
                {id: v1(), name: "Doge", ava: doge},
                {id: v1(), name: "Parrot", ava: parrot},
                {id: v1(), name: "Hamster", ava: hamster},
                {id: v1(), name: "Turtle", ava: turtle},
            ]
        }
    },
    _subscriber() {
        console.log('State has been changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._subscriber = observer;
    },
    dispatch(action: ActionsType) {

        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._subscriber();
    }
}