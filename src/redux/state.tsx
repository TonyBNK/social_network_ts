import vsratiy_cat from '../images/vsratiy_cat.jpg';
import doge from '../images/doge.jpg';
import parrot from '../images/parrot.jpg';
import hamster from '../images/hamster.jpg';
import turtle from '../images/turtle.jpg';
import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";
import {v1} from "uuid";
import cat_with_glasses from '../images/cat_with_glasses.jpg';


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

type ProfilePageStateType = {
    posts: Array<PostType>
    newPost: string
};
type DialogsPageStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
};
type FriendsPageType = {
    friends: Array<FriendType>
};

type StateType = {
    profilePage: ProfilePageStateType
    dialogsPage: DialogsPageStateType
    friendsPage: FriendsPageType
};

export type ActionsType =
    ReturnType<typeof setNewPostActionCreator>
    | ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof setNewMessageActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>;

export type StoreType = {
    _state: StateType
    _subscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const setNewPostActionCreator = (text: string) => ({
    type: "SET-NEW-POST",
    postText: text
} as const);
export const addNewPostActionCreator = () => ({type: "ADD-NEW-POST"} as const);
export const setNewMessageActionCreator = (text: string) => ({
    type: "SET-NEW-MESSAGE",
    messageText: text
} as const);
export const addNewMessageActionCreator = () => ({type: "ADD-NEW-MESSAGE"} as const);

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), ava: cat_with_tongue, post: "Кто насрал в мой лоток?", likesCount: 14},
                {id: v1(), ava: angry_cat, post: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
            ],
            newPost: ''
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
            newMessage: ''
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
        if (action.type === "SET-NEW-POST") {
            this._state.profilePage.newPost = action.postText;
            this._subscriber();
        } else if (action.type === "ADD-NEW-POST") {
            this._state.profilePage.posts.unshift({
                id: v1(),
                ava: cat_with_glasses,
                post: this._state.profilePage.newPost,
                likesCount: 0
            });
            this._state.profilePage.newPost = '';
            this._subscriber();
        } else if (action.type === "SET-NEW-MESSAGE") {
            this._state.dialogsPage.newMessage = action.messageText;
            this._subscriber();
        } else if (action.type === "ADD-NEW-MESSAGE") {
            this._state.dialogsPage.messages.push({id: v1(), message: this._state.dialogsPage.newMessage});
            this._state.dialogsPage.newMessage = '';
            this._subscriber();
        }
    }
}