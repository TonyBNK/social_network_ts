import {ActionsType, ProfilePageStateType} from "./store";
import {v1} from "uuid";
import cat_with_glasses from "../images/cat_with_glasses.jpg";
import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";


const initialState: ProfilePageStateType = {
    posts: [
        {
            id: v1(),
            ava: cat_with_tongue,
            post: "Кто насрал в мой лоток?",
            likesCount: 14
        },
        {
            id: v1(),
            ava: angry_cat,
            post: "Кожанный мешок опять забыл покормить }:(",
            likesCount: 23
        },
    ],
    newPost: ''
}

export type ProfileActionsType =
    ReturnType<typeof setNewPostActionCreator>
    | ReturnType<typeof addNewPostActionCreator>;

const profileReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case "SET-NEW-POST":
            state.newPost = action.postText;
            return state;
        case "ADD-NEW-POST":
            state.posts.unshift({
                id: v1(),
                ava: cat_with_glasses,
                post: state.newPost,
                likesCount: 0
            });
            state.newPost = '';
            return state;
        default:
            return state;
    }
}

export const setNewPostActionCreator = (text: string) => ({
    type: "SET-NEW-POST",
    postText: text
} as const);
export const addNewPostActionCreator = () => ({type: "ADD-NEW-POST"} as const);

export default profileReducer;