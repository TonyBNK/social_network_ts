import {ActionsType, ProfilePageStateType} from "./state";
import {v1} from "uuid";
import cat_with_glasses from "../images/cat_with_glasses.jpg";


export type ProfileActionsType =
    ReturnType<typeof setNewPostActionCreator>
    | ReturnType<typeof addNewPostActionCreator>;

const profileReducer = (state: ProfilePageStateType, action: ActionsType) => {

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