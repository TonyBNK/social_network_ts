import {v1} from "uuid";
import cat_with_glasses from "../images/cat_with_glasses.jpg";
import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";
import React from "react";


type PostType = {
    id: string
    ava: string
    post: string
    likesCount: number
};
export type ProfilePageStateType = {
    posts: Array<PostType>
    newPostText: string
};

export type ProfileActionsType =
    ReturnType<typeof setNewPostActionCreator>
    | ReturnType<typeof addNewPostActionCreator>;

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
    newPostText: ''
}

const profileReducer = (state = initialState, action: ProfileActionsType) => {

    switch (action.type) {
        case "SET-NEW-POST":
            return {
                ...state,
                newPostText: action.postText
            };
        case "ADD-NEW-POST":
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        ava: cat_with_glasses,
                        post: state.newPostText,
                        likesCount: 0
                    },
                    ...state.posts
                ],
                newPostText: ''
            };
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